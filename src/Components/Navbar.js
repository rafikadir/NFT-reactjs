import React, { useState } from 'react';
import logo from '../Assets/Img/logo.png' 

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const navitems = [
        {
            'title': 'Home',
            'link':'/'
        },
        {
            'title': 'Discover',
            'link':'/'
        },
        {
            'title': 'Docs',
            'link':'/'
        },
        {
            'title': 'About',
            'link':'/'
        },
        {
            'title': 'Blogs',
            'link':'/'
        },
        {
            'title': 'Contact Us',
            'link':'/'
        }
    ]

    return (
        <nav className="md:py-4 py-2 w-full fixed">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/">
                    <img src={logo} className="md:max-w-[150px] max-w-[130px]" alt="logo"/>
                </a>
                <div class="md:order-2 flex items-center">
                    <button type="button" class="border border-blue py-2 px-3 md:text-[16px] text-[12px] md:mr-0 mr-2 rounded-lg text-white hover:bg-blue transition duration-400">Connect Wallet</button>
                    
                    <button onClick={()=> setToggle((toggle) => !toggle)} class="inline-flex p-1 items-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                
                <ul className="md:flex flex-row md:w-auto md:order-1 justify-between items-center hidden">
                    {
                        navitems.map(navItem => 
                            <li key={navItem.title}>
                                <a href="/" className="mx-2 text-gray hover:text-white transition duration-400">{navItem.title}</a>
                            </li>
                        )
                    }
                </ul>

                {/* Mobile Menu */}
                <ul className={`${toggle ? 'translate-x-0' : '-translate-x-full'} fixed top-[60px] left-0 w-full bg-black p-3 md:hidden duration-500`}>
                    {
                        navitems.map(navItem => 
                            <li key={navItem.title}>
                                <a href="/" className="my-1 mx-3 inline-block text-gray hover:text-white transition duration-400">{navItem.title}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;