import React, { useState, useEffect } from 'react';
import ShipmentDetails from '../ShipmentDetails/ShipmentDetails';

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
      <td>{shipment.name}</td>
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
      <input
        type="search"
        className='search'
        value={searchQuary}
        onChange={(e) => setSearchQuary(e.target.value)}
        list="box-options"
        placeholder="Search"
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
