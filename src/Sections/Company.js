import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
        <section>
            <div className="container auto">
                <Swiper  
                    spaceBetween={50}
                    slidesPerView={5}>
                        {
                            companies.map((comapany) =>
                                <SwiperSlide>
                                    <img src={comapany.img} alt="company logo" />
                                </SwiperSlide>
                            )
                        }
                </Swiper> 
            </div>
        </section>
    );
};

export default Company;