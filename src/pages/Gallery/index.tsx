import React from "react";
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
        <div>
            <Header />
            <div id='gallery' className='flex flex-col mx-32 mt-8'>
                <h2 className='font-inter text-left text-3xl'>Gallery</h2>
            </div>
            <div className='mx-32 my-5'>
                <ImageList variant="quilted"
                    cols={2}>
                    {itemData.map((item) => (
                        <ImageListItem>
                            <img src={item.img} />
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