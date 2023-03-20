import React from 'react';
import { Link } from 'react-router-dom';

const NftCard = ({nftInfo}) => {
    const {title,meta,img, creator, price, thumb} = nftInfo;


    return (
        <div className="p-6 bg-black rounded-[25px]">
            <img src={img} alt="nft"/>
            <div className="flex justify-between items-center mt-3 mb-3">
                <h3 className="text-[25px]">{title}</h3>
                <span className="text-white bg-blue px-4 rounded-lg">{meta}</span>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <img src={thumb} alt="creator"/>
                    <div className="pl-4">
                        <span className="text-gray block">Creator</span>
                        <Link className="text-white text-[20px]" to="/">{creator}</Link>
                    </div>
                </div>
                <div>
                    <span className="text-gray">Current Bid</span>
                    <h4 className="text-[20px] font-medium"><span>{price}</span>ETH</h4>
                </div>
            </div>
        </div>
    );
};

export default NftCard;