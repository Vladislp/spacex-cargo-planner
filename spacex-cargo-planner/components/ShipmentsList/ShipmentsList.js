import React, { useState, useEffect } from 'react';
import ShipmentDetails from '../ShipmentDetails/ShipmentDetails';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const generateRows = (shipments, selectedShipmentId, handleRowClick) => {
  return shipments.map((shipment) => (
    <tr
      key={shipment.id}
      onClick={() => handleRowClick(shipment.id)}
      style={{
        color: selectedShipmentId === shipment.id ? 'white' : 'silver',
      }}
      className={`${selectedShipmentId === shipment.id ? 'selected' : ''} tr-hover`}
    >
      <td>
        <a style={{ color: selectedShipmentId === shipment.id ? 'white' : 'silver' }}>
          {shipment.name}
        </a>
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

  return (
    <div className="shipment-list-container">
      <div className="mobile-app">
        <div className="header">
          <div className="hamburger-icon" onClick={handleHamburgerClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <img className='spacex-logo' src="/logo.svg" alt="Logo" />
      <Autocomplete
        className='input'
        id="search-autocomplete"
        options={shipments.map((shipment) => shipment.name)}
        value={searchQuary}
        onChange={(event, newValue) => setSearchQuary(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            margin="normal"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            sx={{
              height: '3.1em',
              left: '19em', 
              top: '-13.7em', 
              right: '1em',
              bottom: '1em', 
              borderRadius: '10px',
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
