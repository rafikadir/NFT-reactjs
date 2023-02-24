import React from 'react';
import NftCard from '../Components/NftCard';
import SectionHeading from '../Components/SectionHeading';
import ThemeBtn from '../Components/ThemeBtn';

const Auction = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between">
                    <SectionHeading title="Live Auction"/>
                    <ThemeBtn link="/" name="Learn More"/>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="w-full md:w-1/3 sm:w-1/2">
                        <NftCard/>
                    </div>
                    <div className="w-full md:w-1/3 sm:w-1/2">
                        <NftCard/>
                    </div>
                    <div className="w-full md:w-1/3 sm:w-1/2">
                        <NftCard/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auction;