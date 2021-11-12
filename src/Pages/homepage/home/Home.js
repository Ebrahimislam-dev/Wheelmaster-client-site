import React from 'react';
import Header from '../../SubPages/Header/Header';
import Works from '../Works/Works';
import Banner from './../banner/Banner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Works></Works>
        </div>
    );
};

export default Home;