import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import one from '../Assets/Img/companies/1.png';
import two from '../Assets/Img/companies/2.png';
import three from '../Assets/Img/companies/3.png';
import four from '../Assets/Img/companies/4.png';
import five from '../Assets/Img/companies/5.png';


const Company = () => {

    const companies = [
        {'img': one},
        {'img': two},
        {'img': three},
        {'img': four},
        {'img': five},
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <OwlCarousel className='owl-theme' loop margin={10} items={5}>
                    {
                        companies.map(company =>
                            <img src={company.img} alt="company logo" className="max-w-[180px] w-[unset] mx-auto"/>
                        )
                    }
                </OwlCarousel>
            </div>
        </section>
    );
};

export default Company;