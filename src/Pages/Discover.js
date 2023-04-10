import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { FiSearch } from "react-icons/fi";
import NftCard from '../Components/NftCard';
import imgOne from '../Assets/Img/nfts/1.png';
import imgTwo from '../Assets/Img/nfts/2.png';
import imgThree from '../Assets/Img/nfts/3.png';
import creator from '../Assets/Img/nfts/creator.png';
import ThemeBtn from '../Components/ThemeBtn';

const Discover = () => {

    const nfts = [
        {
            "title" : "Hamlet Contemplates",
            "meta" : "BSC",
            "img" : imgOne,
            "creator" :  "Salvador Dali",
            "price" : "4.89",
            "thumb" : creator,
            "cat" : "art"
        },
        {
            "title" : "Hamlet Contemplates",
            "meta" : "BSC",
            "img" : imgTwo,
            "creator" :  "Salvador Dali",
            "price" : "3.5",
            "thumb" : creator,
            "cat" : "sports"
        },
        {
            "title" : "Hamlet Contemplates",
            "meta" : "BSC",
            "img" : imgThree,
            "creator" :  "Salvador Dali",
            "price" : "5.89",
            "thumb" : creator,
            "cat" : "sports"
        },  {
            "title" : "Hamlet Contemplates",
            "meta" : "BSC",
            "img" : imgOne,
            "creator" :  "Salvador Dali",
            "price" : "4.89",
            "thumb" : creator,
            "cat" : "visual"
        },
        {
            "title" : "Hamlet Contemplates",
            "meta" : "BSC",
            "img" : imgTwo,
            "creator" :  "Salvador Dali",
            "price" : "3.5",
            "thumb" : creator,
            "cat" : "video"
        },
        {
            "title" : "Hamlet Contemplates",
            "meta" : "BSC",
            "img" : imgThree,
            "creator" :  "Salvador Dali",
            "price" : "5.89",
            "thumb" : creator,
            "cat" : "music"
        }
    ];

    const [items, setItems] = useState(nfts);

    const filterItem = (catItem) => {
        const updatedItem = nfts.filter((currentCat) =>{
            return currentCat.cat === catItem;
        });
        setItems(updatedItem);
    };

    return (
        <>
            <Navbar/>
            <section className="pt-[150px] pb-[50px]">
                <h2 className="text-[55px] font-bold text-center pb-10">Explore Collectibles</h2>
                
                <div className="max-w-[800px] m-auto relative">
                    <input className="bg-black w-full border rounded-lg border-white py-[20px] px-[20px] text-white" type="text" placeholder='Type Your Keywords...'/>
                    <button className="bg-blue text-white leading-7 w-[35px] h-[35px] absolute right-3 top-4 rounded-[20px]">
                        <FiSearch className="inline"/>
                    </button>
                </div>
            </section>
            <section className="pb-[70px]">
            <div className="container sm:px-0 px-4">
                <div className="flex justify-center mb-10">               
                    <div>
                        <button className="text-white border border-blue px-6 py-2 ml-2 hover:bg-blue" onClick={()=>setItems(nfts)}>All</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2 hover:bg-blue" onClick={()=>filterItem('art')}>Art</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2 hover:bg-blue" onClick={()=>filterItem('sports')}>Sports</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2 hover:bg-blue" onClick={()=>filterItem('visual')}>Visual</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2 hover:bg-blue" onClick={()=>filterItem('video')}>Videos</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2 hover:bg-blue" onClick={()=>filterItem('music')}>Music</button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                    {
                        items.map((nft, index) => <NftCard nftInfo={nft} key={index}/> )
                    }
                </div>
                
                <div className="mt-[40px] text-center mb-3">
                    <ThemeBtn link="/" name="View More"/>
                </div>
            </div>
        </section>
        </>
    );
};

export default Discover;