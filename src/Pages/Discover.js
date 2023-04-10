import React from 'react';
import Navbar from '../Components/Navbar';
import { FiSearch } from "react-icons/fi";

const Discover = () => {
    return (
        <>
            <Navbar/>
            <section className="pt-[150px]">
                <h2 className="text-[55px] font-bold text-center">Explore Collectibles</h2>
                
                <div>
                    <input type="text" placeholder='Type Your Keywords...'/>
                    <button>
                        <FiSearch/>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Discover;