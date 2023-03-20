import React from 'react';
import Navbar from '../Components/Navbar';
import Auction from '../Sections/Auction';
import Banner from '../Sections/Banner';
import Company from '../Sections/Company';
import FeaturedArtist from '../Sections/FeaturedArtist';
import HotNft from '../Sections/HotNft';
import Services from '../Sections/Services';

const Home = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <Company/>
            <Services/>
            <Auction/>
            <FeaturedArtist/>
            <HotNft/>
        </>
    );
};

export default Home;