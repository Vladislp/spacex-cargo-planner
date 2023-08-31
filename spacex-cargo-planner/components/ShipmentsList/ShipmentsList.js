import React, { useState, useEffect, useRef } from 'react';
import ShipmentDetails from '../ShipmentDetails/ShipmentDetails';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';

const generateRows = (shipments, selectedShipmentId, handleRowClick) => {
  return shipments.map((shipment) => (
    <tr
      key={shipment.id}
      onClick={() => handleRowClick(shipment.id)}
      style={{
        color: selectedShipmentId === shipment.id ? 'white' : 'silver',
      }}
      className={`${selectedShipmentId === shipment.id ? 'selected' : ''} tr-hover`}
      /*
        ARIA Labels
           1) We can add "aria-selected" attribute to indicate the selected state.
           2) Additionally, we can use "aria-labelleby" to associate a hidden label with each row that provides context.
      */
      aria-selected={selectedShipmentId === shipment.id}
      aria-labelleby={'shipment-name-${shipment.id}'}
    >
      <td>
        <button
          style={{
            color: selectedShipmentId === shipment.id ? 'white' : 'silver',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
          onClick={() => handleRowClick(shipment.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
            handleRowClick(shipment.id);
          }
          }}
        >
          {shipment.name}
        </button>
      </td>
    </tr>
  ));
};

const ShipmentList = () => {
  const [shipments, setShipments] = useState([]);
  const [selectedShipmentId, setSelectedShipmentId] = useState(null);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [searchQuary, setSearchQuary] = useState("");
  const filteredShipments = shipments.filter((shipment) =>
    shipment.name.toLowerCase().includes(searchQuary.toLowerCase())
  );
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/shipment.json');
      const data = await response.json();
      setShipments(data);
    };
    fetchData();
  }, []);

  const handleRowClick = (id) => {
    setSelectedShipmentId(id);
    const selected = shipments.find((shipment) => shipment.id === id);
    setSelectedShipment(selected);
    setSearchQuary("");
    setShowMobileMenu(false);
  };

  const handleHamburgerClick = () => {
    setSelectedShipmentId(null);
    setSelectedShipment(null);
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSearchChange = (event, newValue) => {
    if (newValue.length < 3) {
      setSearchError("Search query must be at least 3 characters.");
    } else {
      setSearchError("");
    }
    setSearchQuary(newValue);
  };

  useEffect(() => {
    const handleSearchShortcut = (event) => {
      if (event.key === '/') {
        inputRef.current.focus();
        event.preventDefault();
      }
    };
  
    // Attach the event listener when the component mounts
    document.addEventListener('keydown', handleSearchShortcut);
  
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleSearchShortcut);
    };
  }, []);
  

  return (
    <div className="shipment-list-container">
      <div className="mobile-app">
        <div className='nav'>
          <div className="header">
            <div className="hamburger-icon" onClick={handleHamburgerClick}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <img className='spacex-logo' src="/logo.svg" alt="This is logo for a SpaceX company application called: 'Cargo Planner' "/>
      <Autocomplete
        className='input'
        id="search-autocomplete"
        options={shipments.map((shipment) => shipment.name)}
        value={searchQuary || "Apple"}
        onChange={(event, newValue) => setSearchQuary(newValue)}
        inputRef={inputRef}
        inputProps={{
          'aria-label': 'Search for a shipment',
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            margin="normal"
            variant="outlined"
            inputRef={params.InputProps.ref}
            InputProps={{
              // ARIA Labels
              'aria-label': 'Search for a shipment',
              'aria-autocomplete': 'list',
              'aria-haspopup': 'listbox',

              ...params.InputProps,
              type: 'search',
              startAdornment: (
                <SearchIcon color=""  />
              ),
            }}
            sx={{
              height: '3.1em',
              left: '19em', 
              top: '-13.7em', 
              right: '1em',
              bottom: '1em', 
              borderRadius: '1rem',
              backgroundColor: 'white',
              '@media (max-width: 768px)': {
                width: '100%',
                left: '0.7rem',
                top: '-7.5em',
              },
            }}
          />
        )}
      />
      <table>
        <tbody>
          {generateRows(filteredShipments, selectedShipmentId, handleRowClick)}
        </tbody>
      </table>
      {showMobileMenu && (
        <table>
          <tbody>
            {generateRows(filteredShipments, selectedShipmentId, handleRowClick)}
          </tbody>
        </table>
      )}
      {selectedShipment && <ShipmentDetails shipment={selectedShipment} />}
    </div>
  );
};

export default ShipmentList;
