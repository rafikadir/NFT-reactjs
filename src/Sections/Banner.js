import React from 'react';
import banner from '../Assets/Img/banner.png';

const Banner = () => {
    return (
        <section>
            <div className="container sm:px-0 px-4">
                <div className="grid grid-cols-2 md:h-screen items-center">
                    <div className="text-center px-[10px] mb-[40px] md:mb-0 md:text-left">
                        <h2 className="text-white text-[28px] lg:text-[64px] lg:leading-tight lg:font-bold lg:mb-5">Discover a New Era of Crypto Currency</h2>
                        <p className="text-white mb-5 text-gray">Panda NFT is the primier marketplace for NFT, which are digital items you can truly own. Digital items have existed for a long time, but never like this.</p>
                        <a href="/" className="text-white bg-blue py-3 px-6 rounded-lg inline-block hover:bg-white hover:text-blue transition duration-200">Get Started</a>
                    </div>
                    <div className="text-center px-[10px]">
                        <img src={banner} alt="banner"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;