import React, {useState } from 'react';
import SectionHeading from '../Components/SectionHeading';
import NftCard from '../Components/NftCard';
import imgOne from '../Assets/Img/nfts/1.png';
import imgTwo from '../Assets/Img/nfts/2.png';
import imgThree from '../Assets/Img/nfts/3.png';
import creator from '../Assets/Img/nfts/creator.png';

const HotNft = () => {

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
            console.log(currentCat.cat);
            return currentCat.cat === catItem;
        });

        setItems(updatedItem);




    };

    return (
        <section>
            <div className="container sm:px-0 px-4">
                <div className="flex justify-between">
                    <SectionHeading title="Hot NFTs"/>
                   
                    <div>
                        <button className="text-white border border-blue px-6 py-2 ml-2" onClick={()=>setItems(nfts)}>All</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2" onClick={()=>filterItem('art')}>Art</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2" onClick={()=>filterItem('sports')}>Sports</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2" onClick={()=>filterItem('visual')}>Visual</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2" onClick={()=>filterItem('video')}>Videos</button>
                        <button className="text-white border border-blue px-6 py-2 ml-2" onClick={()=>filterItem('music')}>Music</button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
                    {
                        items.map((nft, index) => <NftCard nftInfo={nft} key={index}/> )
                    }
                </div>
            </div>
        </section>
    );
};

export default HotNft;