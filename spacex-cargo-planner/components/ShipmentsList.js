import React, { useState, useEffect } from 'react';

const ShipmentList = () => {
    const [shipment, setShipment] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/shipment.json');
            const data = await response.json();
            setShipment(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>List of Shipments</h2>
            <ul>
                {shipment.map((ship) => (
                    <li key={ship.id}>{ship.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShipmentList;
