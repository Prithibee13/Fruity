import React from 'react';
import Gallary from '../../Gallary/Gallary';
import Fruits from '../../Products/Inventory/Fruits';
import Quotes from '../../Quotes/Quotes';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Fruits></Fruits>
            <Gallary></Gallary>
            <Quotes></Quotes>
        </div>
    );
};

export default Home;