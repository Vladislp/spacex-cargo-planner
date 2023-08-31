import React, { useState, useEffect, useRef } from 'react';
import { calculateCargoBays } from '../../utils/cargoUtils';

const ShipmentDetails = ({ shipment }) => {
    // State for box units and cargo bays
    const [boxUnits, setBoxUnits] = useState(shipment.boxes);
    const inputRef = useRef(null);

    // Update boxUnits and cargo bays when the shipment prop changes
    useEffect(() => {
        if(shipment.boxes !== null ) {
            setBoxUnits(shipment.boxes);
        } else {
            setBoxUnits("");
        }
    }, [shipment]);

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [boxUnits]);
    

    // Handler for box units change
    const handleBoxUnitsChange = (event) => {
        const newBoxUnits = event.target.value;
        setBoxUnits(newBoxUnits);
    };

    // Parse shipment boxes into options
    const options = shipment.boxes
        ? shipment.boxes.split(',').map(box => box.trim()).filter(box => box !== 'null')
        : [];

    // Calculate cargo bays with white color
    const cargoBays = (
        <span className='Cargo-Bays-Total' style={{ color: 'white '}}>
            {calculateCargoBays(boxUnits)}
        </span>
    )

    return (
        <div>
            {/* Search input with datalist */}
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
                    ref={inputRef}  
                    type="text"
                    className='input'
                    value={boxUnits}
                    onChange={handleBoxUnitsChange}
                    // ARIA attributes
                    aria-label="Number of box units"
                    aria-required="true"
                    aria-describedby='box-units-description'
                />
            </div>
        </div>
    );
};

export default ShipmentDetails;
