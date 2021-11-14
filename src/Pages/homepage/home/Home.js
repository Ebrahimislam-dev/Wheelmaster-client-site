import React from 'react';
import Header from '../../SubPages/Header/Header';
import Products from '../ProductPage/Products';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';

import Works from '../Works/Works';
import Banner from './../banner/Banner';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>


            <Works></Works>
            <Products></Products>
            <Subscribe></Subscribe>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;