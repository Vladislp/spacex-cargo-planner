import React, { useState } from 'react';
import { calculateCargoBays } from '../utils/cargoUtils';

const ShipmentDetails = ({ shipment }) => {
    // State for box units and cargo bays
    const [boxUnits, setBoxUnits] = useState(shipment.boxes);

    // Calculate cargo bays with white color
    const cargoBays = (
        <span style={{ color: 'white' }}>
            {calculateCargoBays(boxUnits)}
        </span>
    );

    // Parse shipment boxes into options
    const options = shipment.boxes
        ? shipment.boxes.split(',').map(box => box.trim()).filter(box => box !== 'null')
        : [];

    // Handler for box units change
    const handleBoxUnitsChange = (event) => {
        const newBoxUnits = event.target.value;
        setBoxUnits(newBoxUnits);
    };

    return (
        <div>
            {/* Search input with datalist */}
            <input
                type="search"
                className='search'
                value={boxUnits}
                onChange={handleBoxUnitsChange}
                list="box-options"
            />
            <datalist id="box-options">
                {options.map((option, index) => (
                    <option key={index} value={option} />
                ))}
            </datalist>

            {/* Rectangle container */}
            <div className='rectangle'>
                <p className='shipment-name'>{shipment.name}</p>
                <p className='shipment-email'>{shipment.email}</p>
                <p className='Cargo-Boxes'>CARGO BOXES</p>
                <p className='Required-Cargo'>
                    Number of required cargo bays {cargoBays}
                </p>
                {/* Input for box units */}
                <input
                    type="text"
                    className='input'
                    value={boxUnits}
                    onChange={handleBoxUnitsChange}
                />
            </div>
        </div>
    );
};

export default ShipmentDetails;
