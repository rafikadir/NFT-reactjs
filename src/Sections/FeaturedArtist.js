import React from 'react';
import ArtistCard from '../Components/ArtistCard';
import SectionHeading from '../Components/SectionHeading';
import ThemeBtn from '../Components/ThemeBtn';
import bannerOne from '../Assets/Img/artist/banner_1.png';
import bannerTwo from '../Assets/Img/artist/banner_2.png';
import bannerThree from '../Assets/Img/artist/banner_3.png';
import bannerFour from '../Assets/Img/artist/banner_4.png';
import thumOne from '../Assets/Img/artist/thumb_1.png';
import thumTwo from '../Assets/Img/artist/thumb_2.png';
import thumThree from '../Assets/Img/artist/thumb_3.png';
import thumFour from '../Assets/Img/artist/thumb_4.png';

const FeaturedArtist = () => {

    const artists = [
        {
            "banner" : bannerOne,
            "name" : "CryptoPunks",
            "thumb" : thumOne,
            "follower" : "818.7"
        },
        {
            "banner" : bannerTwo,
            "name" : "Doodles",
            "thumb" : thumTwo,
            "follower" : "65.7"
        },
        {
            "banner" : bannerThree,
            "name" : "Bored Ape Yacht",
            "thumb" : thumThree,
            "follower" : "88"
        },
        {
            "banner" : bannerFour,
            "name" : "Capsule House",
            "thumb" : thumFour,
            "follower" : "18.7"
        }
    ]

    return (
        <section className="pb-[70px]">
            <div className="container m-auto sm:px-0 px-4">
                <div className="flex justify-between">
                    <SectionHeading title="Featured Artist"></SectionHeading>
                    <ThemeBtn link="/" name="View More"/>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {
                        artists.map((artist, index) => <ArtistCard info={artist} key={index}/>)
                    }
                </div>
                
            </div>
        </section>
    );
};

export default FeaturedArtist;