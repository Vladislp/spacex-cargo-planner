import React from 'react';
import RectangleComponent from '../components/Rectangle/Rectangle';
import ShipmentList from '../components/ShipmentsList/ShipmentsList';

const Home = () => {
    return (
        <div>
            {/* Skip to content link */}
            <a href='#main-content' className='skip-link'>
                Skip to content
            </a>
            <RectangleComponent />
            <ShipmentList />
        </div>
    );
};

export default Home;
