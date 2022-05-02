import React from 'react';
import Gallary from '../../Gallary/Gallary';
import Inventories from '../../Products/Inventories/Inventories';
import Quotes from '../../Quotes/Quotes';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Gallary></Gallary>
            <Quotes></Quotes>
        </div>
    );
};

export default Home;