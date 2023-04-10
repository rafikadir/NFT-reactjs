import React from 'react';
import { Link } from 'react-router-dom';

const CreateNft = () => {
    return (
        <div className="container text-center rounded-2xl bg-blue p-[40px] mb-[60px]">
           <h2 className="text-[50px] font-bold mb-3">Create Your Own NFT!</h2> 
           <p  className="text-white max-w-[600px] m-auto mb-7">We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!</p>

           <Link to="" className="font-medium bg-white py-3 text-blue px-3 rounded-md">Join Comunity Now</Link>
        </div>
    );
};

export default CreateNft;