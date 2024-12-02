import React from "react";
import { useEffect, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import rainier from '../../assets/images/rainier.jpg'
import cityscape from '../../assets/images/cityscape.jpg'
import lisboa from '../../assets/images/lisboa.jpg'
import water from '../../assets/images/water.jpg'
import love from '../../assets/images/love.jpg'
import door from '../../assets/images/door.jpg'

const Gallery: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };


    const itemData = [
        {
            img: rainier,
            title: 'Rainier',
        },
        {
            img: lisboa,
            title: 'Lisboa',
        },
        {
            img: cityscape,
            title: 'Seattle',
        },
        {
            img: water,
            title: 'Bainbridge',
        },
        {
            img: love,
            title: 'Love',
        },
        {
            img: door,
            title: 'Light',
        },
    ];

    return (
        <div className="bg-background">
            <Header />

            <div className='mx-32 hidden lg:block max-w-[1024px] mt-5 justify-self-center'>
                <h2 className='font-inter text-left text-3xl'>Gallery</h2>
                <p className="mb-5 font-openSans mt-3 about-text" >In my free time, I enjoy exploring the West Coast, international travel, and photography.</p>
                <ImageList variant="quilted"
                    cols={2}>
                    {itemData.map((item) => (
                        <ImageListItem>
                            <img loading='lazy' src={item.img}
                                onLoad={handleImageLoad}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: loaded ? 1 : 0,
                                    visibility: loaded ? 'visible' : 'hidden',
                                    transition: 'opacity 2s ease-in-out',
                                }}
                            />
                            {/* <ImageListItemBar position="below" title={item.title} /> */}
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

            <div className='mx-5 my-3 block lg:hidden'>
                <h2 className='font-inter text-left text-3xl mt-5 mb-3'>Gallery</h2>
                <p className="mb-5 font-openSans mt-3 about-text" >In my free time, I enjoy exploring the West Coast, international travel, and photography.</p>
                <ImageList variant="quilted"
                    cols={1}>
                    {itemData.map((item) => (
                        <ImageListItem>
                            <img loading='lazy' src={item.img}
                                onLoad={handleImageLoad}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: loaded ? 1 : 0,
                                    visibility: loaded ? 'visible' : 'hidden',
                                    transition: 'opacity 2s ease-in-out',
                                }}
                            />
                            {/* <ImageListItemBar position="below" title={item.title} /> */}
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <Footer />
        </div>
    )
}
export default Gallery;