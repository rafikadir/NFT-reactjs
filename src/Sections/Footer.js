import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Img/logo.png';

const Footer = () => {
    const resources = [
        {'name':'Help Center', 'link': '/'},
        {'name':'Platform Status', 'link': '/'},
        {'name':'Partners', 'link': '/'},
        {'name':'Gas-Free Marketplace', 'link': '/'}
    ];

    const companies = [
        {'name':'Our Team', 'link': '/'},
        {'name':'About Us', 'link': '/'},
        {'name':'Contact Us', 'link': '/'},
        {'name':'Career', 'link': '/'}
    ];


    return (
        <div className="container mt-">
            <div className="grid md:grid-cols-4 sm:grid-cols-2">
                <div>
                    <img src={logo} alt="logo" className="max-w-[200px] mb-4"/>
                    <p className="text-gray">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens NFTs. Buy, sell, and discover exclusive digital items.</p>
                </div>
                <div>
                    <h3 className='text-[30px] font-bold mb-5'>Resources</h3>
                    <ul>
                        { 
                            resources.map((resource, index) => 
                                <li>
                                    <Link to={resource.link} key={index}>{resource.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div>
                    <h3 className='text-[30px] font-bold mb-5'>Company</h3>
                    <ul>
                        { 
                            companies.map((company, index) => 
                                <li>
                                    <Link to={company.link} key={index}>{company.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div>
                    <h3 className='text-[30px] font-bold mb-5'>Contact</h3>
                    <p className="text-gray">2715 Ash Dr. San Jose, South Dakota 83475</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;