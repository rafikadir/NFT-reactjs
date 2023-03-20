import React from 'react';
import { TbCurrencyEthereum } from "react-icons/tb";


const ArtistCard = ({info}) => {
    const {banner, thumb, name, follower} = info;

    return (
        <div className="p-3 pb-5 bg-black rounded-[25px] mb-[20px]">
            <div className="relative">
                <img src={banner} alt="banner" />

                <img className="absolute bottom-[-50px] left-0 right-0 max-w-[90px] mx-auto" src={thumb} alt="thumb" />
            </div>

            <div className="text-center pt-[70px]">
                <h3 className="text-3xl font-bold mb-3">{name}</h3>
                <p className="text-white text-sm"><span className="inline-block relative top-[2px] mr-1"><TbCurrencyEthereum/></span>{follower}K</p>
            </div>
        </div>
    );
};

export default ArtistCard;