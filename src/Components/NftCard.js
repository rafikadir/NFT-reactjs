import React from 'react';
import { Link } from 'react-router-dom';
import one from '../Assets/Img/nfts/1.png';
import creator from '../Assets/Img/nfts/creator.png';

const NftCard = () => {
    return (
        <div className="p-6 bg-black rounded-[25px] mb-[25px]">
            <img src={one} alt="nft"/>
            <div className="flex justify-between items-center mt-3 mb-3">
                <h3 className="text-[25px]">Hamlet Contemplates</h3>
                <span className="text-white bg-blue px-4 rounded-lg">BSC</span>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <img src={creator} alt="creator"/>
                    <div className="pl-4">
                        <span className="text-gray block">Creator</span>
                        <Link className="text-white text-[20px]" to="/">Salvador Dali</Link>
                    </div>
                </div>
                <div>
                    <span className="text-gray">Current Bid</span>
                    <h4 className="text-[20px] font-medium">4.89 ETH</h4>
                </div>
            </div>
        </div>
    );
};

export default NftCard;