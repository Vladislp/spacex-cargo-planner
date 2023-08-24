import React, { useState, useEffect } from 'react';
import ShipmentDetails from './ShipmentDetails';
import { FaSearch } from 'react-icons/fa';

const ShipmentList = () => {
    const [shipments, setShipments] = useState([]);
    const [selectedShipmentId, setSelectedShipmentId] = useState(null);
    const [selectedShipment, setSelectedShipment] = useState(null); // New state for selected shipment
    const [searchQuary, setSearchQuary] = useState("");
    const filteredShipments = shipments.filter((shipment) =>
        shipment.name.toLowerCase().includes(searchQuary.toLowerCase())
    );

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
    };

    return (
        
        <div className="shipment-list-container">
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
                    {filteredShipments.map((shipment) => (
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
                    ))}
                </tbody>
            </table>
            {selectedShipment && <ShipmentDetails shipment={selectedShipment} />}
        </div>
    );
};

export default ShipmentList;
