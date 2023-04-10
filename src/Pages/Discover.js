import React from 'react';
import Navbar from '../Components/Navbar';
import { FiSearch } from "react-icons/fi";

const Discover = () => {
    return (
        <>
            <Navbar/>
            <section className="pt-[150px]">
                <h2 className="text-[55px] font-bold text-center pb-10">Explore Collectibles</h2>
                
                <div className="max-w-[500px] m-auto">
                    <input className="bg-black border rounded-md border-white py-[15px] px-[20px] text-white" type="text" placeholder='Type Your Keywords...'/>
                    <button className="bg-blue text-white w-[30px] h-[30px] text-center">
                        <FiSearch/>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Discover;