import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import self from '../../assets/images/self.jpg'
import nyc from '../../assets/images/nyc-me.jpeg'
import cs from '../../assets/images/me-cs.jpg'
import azureTheme from '../../assets/images/azure-theme.png'
import azure from '../../assets/images/azure.png'
import bing from '../../assets/images/bing.png'
import rainier from '../../assets/images/rainier.jpg'
import cityscape from '../../assets/images/cityscape.jpg'
import lisboa from '../../assets/images/lisboa.jpg'
import water from '../../assets/images/water.jpg'
import love from '../../assets/images/love.jpg'
import door from '../../assets/images/door.jpg'

import './home.css'
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


const Home: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    // Trigger the slide-in effect when the component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // scrolling to about me
    document.querySelectorAll('a.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent the default anchor click behavior
    
          const targetId = anchor.getAttribute('href')?.substring(1); // Get the target ID
          const targetElement = document.getElementById(targetId as string);
    
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 78, // Scroll to the target's position, minus 40px offset
              behavior: 'smooth' // Smooth scroll effect
            });
          }
        });
      });

    return (
        <div id="home" className="flex flex-col">
            <Header />

            <div className='flex flex-row gap-6'>
                <div
                    // className='flex flex-col mx-32 justify-center gap-6'
                    className={`${isVisible ? 'slide-in' : ''} flex flex-col mx-32 justify-center gap-6`}
                >
                    <h1 className='text-6xl font-montaga text-left transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                        Adriana Orantes
                    </h1>
                    <p className='text-left font-openSans text-2xl'>
                        At Microsoft, I thrive on transforming complex challenges into elegant solutions, driving projects that enhance user experience.<br /><br />
                        Outside of work, you'll find me dog-watching, working on a puzzle, or taking a 10-mile walk.
                    </p>
                    <div className='flex gap-2 items-center text-accent cursor-pointer'>
                        <a href='#aboutMe' className='scroll-link text-left font-openSans text-xl font-semibold'>Learn more about me</a>
                        <a href='#aboutMe' className='scroll-link'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="size-6 
                               
                                self-end">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
                            </svg>
                        </a>

                    </div>
                </div>
                <img
                    // className={`${isVisible ? 'slide-in' : ''} h-[calc(100vh-85px)]`}
                    src={self}
                    className='h-[calc(100vh-85px)]'>
                </img>

            </div>

            <div className='flex flex-col mx-32' id='aboutMe'>
                <h2 className='font-inter text-accent text-start text-5xl font-bold mt-10'>It's so nice to meet you!</h2>
                <div className='grid grid-cols-2 gap-10 mt-10'>
                    <img src={nyc} />
                    <p className='font-openSans text-xl text-left content-center'>I’m a Salvadoran American passionate about being
                        <span className='font-semibold'> playful</span>, <span className='font-semibold'> curious</span>, and
                        <span className='font-semibold'> bringing people together</span>.<br></br><br></br>
                        Growing up, I had no clear picture of the future I was working toward.
                        I just knew it would be something that would <span className='font-bold'> inspire</span> and
                        <span className='font-bold'> challenge</span> me, while also bringing a sense of
                        <span className='font-bold'> stability</span>, <span className='font-bold'> fulfillment </span>
                        and <span className='font-bold'> joy</span>.<br></br><br></br>
                        I first discovered computer science in high school through a summer program at MIT.
                        It was tough—I had never experienced such academic rigor.
                        But by proactively seeking support, I persevered.</p>
                </div>
            </div>

            <div className='flex flex-col mx-32 gap-16'>
                <div className='grid grid-cols-2 gap-10 mt-10'>
                    <div className='content-center'>
                        <h3 className='font-inter font-bold text-accent text-3xl text-left'>I can, and I will</h3>
                        <p className='font-openSans text-xl text-left mt-5'>For undergrad, I attended Columbia University’s School of Engineering.
                            I majored in <span className='font-bold'>Computer Science</span> with a focus on applications.<br></br><br></br>
                            As a <span className='font-bold'>first-generation college student</span>, I struggled navigating higher education.
                            With the support of friends, family, and my Columbia community, I gained the
                            confidence to <span className='font-bold'>embrace difficult challenges</span> and push forward. </p>
                    </div>
                    <img src={cs} />
                </div>
                <p className='font-openSans  text-2xl '>Right now, I'm a  <span className='font-bold'>Design Engineer </span>
                    for <span className='font-bold'>Microsoft's</span> cloud service, Azure.<br></br>
                    I build interactive and insightful prototypes for designers and researchers
                    to conduct user studies. I also help maintain Fluent—Microsoft's internal design system.</p>
            </div>

            <div className='flex flex-col mx-32 gap-6'>
                <h1 className='font-openSans text-3xl text-left mt-10'>My work at Microsoft</h1>
                <img src={azureTheme} />
                <div className='grid grid-cols-2 gap-10'>
                    <img src={azure} />
                    <img src={bing} />
                </div>
            </div>

            <div className='flex flex-col mx-32 mt-20'>
                <p className='font-inter text-center text-2xl'>In my free time, I enjoy exploring the West Coast, international
                    travel, and photography.</p>
                <h2 className='font-inter text-left text-3xl mt-20'>Gallery</h2>
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
    );
};

export default Home;
