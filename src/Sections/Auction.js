import React from 'react';
import NftCard from '../Components/NftCard';
import SectionHeading from '../Components/SectionHeading';
import creator from '../Assets/Img/nfts/creator.png';
import ThemeBtn from '../Components/ThemeBtn';
import imgOne from '../Assets/Img/nfts/1.png';
import imgTwo from '../Assets/Img/nfts/2.png';
import imgThree from '../Assets/Img/nfts/3.png';

const Auction = () => {

    const nfts = [
        {
            "title" : "Hamlet Contemplates",
            "meta" : "BSC",
            "img" : imgOne,
            "creator" :  "Salvador Dali",
            "price" : "4.89",
            "thumb" : creator
        },
        {
            "title" : "Hamlet Contemplates",
            "meta" : "BSC",
            "img" : imgTwo,
            "creator" :  "Salvador Dali",
            "price" : "3.5",
            "thumb" : creator
        },
        {
            "title" : "Hamlet Contemplates",
            "meta" : "BSC",
            "img" : imgThree,
            "creator" :  "Salvador Dali",
            "price" : "5.89",
            "thumb" : creator
        }
    ];

    return (
        <section className="pb-[70px]">
            <div className="container sm:px-0 px-4">
                <div className="flex justify-between">
                    <SectionHeading title="Live Auction"/>
                    <ThemeBtn link="/" name="Learn More"/>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                    {
                        nfts.map(nft => <NftCard nftInfo={nft}/> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Auction;