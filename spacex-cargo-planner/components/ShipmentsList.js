import React, { useState, useEffect } from 'react';
import ShipmentDetails from './ShipmentDetails';

const ShipmentList = () => {
    const [shipments, setShipments] = useState([]);
    const [selectedShipmentId, setSelectedShipmentId] = useState(null);
    const [selectedShipment, setSelectedShipment] = useState(null); // New state for selected shipment

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
    };

    return (
        <div className="shipment-list-container">
            <h1>Shiping List</h1>
            <table> 
                <tbody>
                    {shipments.map((shipment) => (
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
