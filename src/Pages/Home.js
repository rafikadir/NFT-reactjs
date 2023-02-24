import React from 'react';
import Navbar from '../Components/Navbar';
import Auction from '../Sections/Auction';
import Banner from '../Sections/Banner';
import Company from '../Sections/Company';
import Services from '../Sections/Services';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Company/>
            <Services/>
            <Auction/>
        </>
    );
};

export default Home;