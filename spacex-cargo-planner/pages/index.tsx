import React from 'react';
import ShipmentDetails from '../components/ShipmentDetails';
import RectangleComponent from '../components/Rectangle';

const shipmentData = {
    id: 'd3ff0c68892',
    name: 'Amazon.com',
    email: 'contact@amazon.com',
    boxes: '6.8,7.9,3, 3.2,3.2,10,2'
};

const Home = () => {
    return (
        <div>
            <RectangleComponent />
            <ShipmentDetails shipment={shipmentData} />
            <img className="spacex-logo" src="https://www.spacex.com/static/images/share.jpg" alt="spacex-logo-alt" />
        </div>
    );
};

export default Home;
