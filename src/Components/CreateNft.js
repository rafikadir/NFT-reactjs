import React from 'react';
import ThemeBtn from './ThemeBtn';

const CreateNft = () => {
    return (
        <div className="container text-center border border-blue border-2 rounded-2xl bg-black p-[40px] mb-[60px]">
           <h2 className="text-[50px] font-bold mb-3">Create Your Own NFT!</h2> 
           <p  className="text-white max-w-[600px] m-auto mb-5">We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!</p>

           <ThemeBtn link="" name="Join Comunity Now" className="bg-blue py-3"/>
        </div>
    );
};

export default CreateNft;