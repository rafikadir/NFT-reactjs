import React from 'react';
import SectionHeading from '../Components/SectionHeading';
import {MdConnectedTv,MdAccountBalanceWallet,MdShoppingCart} from "react-icons/md";

const Services = () => {

    const services = [
        {
            "icon" : <MdAccountBalanceWallet className="inline-block"/>,
            "title" : "Set up your wallet",
            "desc" : "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
        },
        {
            "icon" : <MdConnectedTv className="inline-block"/>,
            "title" : "Add your NFTst",
            "desc" : "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
        },
        {
            "icon" : <MdShoppingCart className="inline-block"/>,
            "title" : "List them for sale",
            "desc" : "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
        }
    ]

    return (
        <section className="pt-[200px] pb-[70px]">
            <div className="container mx-auto sm:px-0 px-4">
                <SectionHeading title="Create and sell your NFTs" centered={true}/>
      
                <div className="flex flex-col sm:flex-row">
                    {
                        services.map((service) => 
                            <div className="text-center bg-black mx-2 p-[40px] mb-4 rounded-2xl">
                                <div className="text-white bg-blue inline-block w-[80px] h-[80px] mb-[40px] rounded-[50px] text-[35px] leading-[70px]">{service.icon}</div>
                                <h3 className="text-[white] text-[30px] font-bold mb-3">{service.title}</h3>
                                <p className="text-gray text-[16px]">{service.desc}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;