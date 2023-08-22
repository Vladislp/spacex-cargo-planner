import React, { useState } from 'react';
import { calculateCargoBays } from '../utils/cargoUtils';

const ShipmentDetails = ({ shipment }) => {
    const [boxUnits, setBoxUnits] = useState(shipment.boxes);
    const cargoBays = calculateCargoBays(boxUnits);

    const handleBoxUnitsChange = (event) => {
        const newBoxUnits = event.target.value;
        setBoxUnits(newBoxUnits);
    };

    return (
        <div>
            <input
                type="search"
                className='search'
                value={boxUnits}
                onChange={handleBoxUnitsChange}
            />
            <div className='rectangle'>
                <p className='Cargo-Boxes'>CARGO BOXES</p>
                <p className='Required-Cargo'>Number of required cargo bays {cargoBays}</p>
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
