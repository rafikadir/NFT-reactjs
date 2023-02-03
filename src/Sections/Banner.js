import React from 'react';
import banner from '../Assets/Img/banner.png';

const Banner = () => {
    return (
        <section className="bg-black h-screen">
            <div className="container mx-auto flex items-center">
                <div className="">
                    <h2 className="text-white text-[64px] leading-tight font-bold mb-5">Discover a New Era of Crypto Currency</h2>
                    <p className="text-white mb-5 text-gray">Panda NFT is the primier marketplace for NFT, which are digital items you can truly own. Digital items have existed for a long time, but never like this.</p>
                    <a className="text-white bg-blue py-2 px-5 rounded-lg inline-block hover:bg-white hover:text-blue transition duration-200" href="/">Get Started</a>
                </div>

                <div className="">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </section>
    );
};

export default Banner;