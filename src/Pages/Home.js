import React from 'react';
import CreateNft from '../Components/CreateNft';
import Navbar from '../Components/Navbar';
import Auction from '../Sections/Auction';
import Banner from '../Sections/Banner';
import Company from '../Sections/Company';
import FeaturedArtist from '../Sections/FeaturedArtist';
import Footer from '../Sections/Footer';
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
            <CreateNft/>
            <Footer/>
        </>
    );
};

export default Home;