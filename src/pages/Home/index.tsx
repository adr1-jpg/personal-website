import React, { useRef } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import self from '../../assets/images/self.jpg'
import nyc from '../../assets/images/nyc-me.jpeg'
import cs from '../../assets/images/me-cs.jpg'
import azureTheme from '../../assets/icons/azure-theme.png'
import cvc from '../../assets/icons/cvc.png'
import aquaire from '../../assets/icons/AQUAire.png'
import neighborhood from '../../assets/icons/neighborhood.svg'
import './home.css'
import { useState, useEffect } from 'react';
import { useForm } from '../../context/DataProvider';
import { useNavigate } from 'react-router';
import { Card } from '@fluentui/react-components'

const Home: React.FC = () => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/work');
    };
    const handleAquaireClick = () => {
        navigate('./aquaire')
    }
    const handleCampusClick = () => {
        navigate('./campus')
    }
    const handleGalleryClick = () => {
        navigate('/gallery')
    }
    const [isVisible, setIsVisible] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const workRef = useRef<HTMLDivElement | null>(null);
    const galleryRef = useRef<HTMLDivElement | null>(null);

    const { navState, setNavState } = useForm();
    // Trigger the slide-in effect when the component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);
    document.querySelectorAll('a.scroll-link').forEach(anchor => {
        console.log('in a scroll-link')
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor click behavior

            const targetId = anchor.getAttribute('href')?.substring(1); // Get the target ID
            const targetElement = document.getElementById(targetId as string);
            if (targetElement && targetElement.id === 'about') {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
            else if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 78,
                    behavior: 'smooth'
                });
            }
        });
    });
    const typeRef = useRef<HTMLDivElement>(null);
    const TypingEffect = ({ text }: { text: string }) => {
        // track if text is visible
        const [isVisible, setIsVisible] = useState(false);
        // store text
        const [displayedText, setDisplayedText] = useState("");
        const [index, setIndex] = useState(0);
        useEffect(() => {
            if (isVisible && index < text.length) {
                const timeout = setTimeout(() => {
                    console.log(text)
                    setDisplayedText((prev) => prev + text[index]);
                    setIndex(index + 1);
                }, 120); // Adjust speed of typing here
                return () => clearTimeout(timeout);
            }
        }, [isVisible, index, text]);
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.5 } // Adjust visibility threshold (50% visible)
            );

            if (typeRef.current) {
                observer.observe(typeRef.current);
            }

            return () => {
                if (typeRef.current) {
                    observer.unobserve(typeRef.current);
                }
            };
        }, []);
        return (
            <div ref={typeRef} className="text-5xl font-lora text-blue">
                {displayedText}
            </div>
        );
    }
    const scrollToAbout = () => {
        const target = document.querySelector('#about');

        if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.scrollY - 78;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    }
    return (
        <div className='bg-background '>
            <Header />
            <div className='flex max-1236:flex-col justify-self-center intro min-1236:gap-20 max-1236:gap-5 max-1236:justify-center min-1236:items-center p-10' >
                <div className=''>

                    <div>
                        <TypingEffect text="Hi, I'm Adri!" />
                    </div>


                    <p className='text-left leading-loose pt-4 text-[20px]'>
                        I love tackling real-world problems that make a difference in people's lives.<br />
                        Design Engineer @ <span className='text-light-blue'>Microsoft Azure</span>.<br />
                        Puzzle, cycling, and dog enthusiast.
                    </p>
                </div>
                <div className='h-full'>
                    <img src={self} className='w-full max-w-md max-1236:max-w-sm h-auto rounded-[20px]' />
                </div>
            </div>
            <div className='flex justify-center bg-pastel-blue ' >
                <div className='flex flex-col max-w-[1024px] w-full p-10'>
                    <h1 className='text-2xl font-lora text-left '>
                        Check out my work ✨
                    </h1>
                    <div className='flex max-1236:flex-col bg-white rounded-[20px] min-940:p-20 max-940:px-10 max-940:py-16 gap-5 mt-5
                    transition-transform duration-200 hover:-translate-y-2 hover:cursor-pointer'>
                        <div className='card flex flex-row '>
                            <div className='content-center'>
                                <img src={azureTheme} className='w-full max-w-md max-1236:max-w-sm max-640:w-[250px] h-auto' />
                            </div>
                        </div>
                        <div className='max-1236:mt-2'>
                            <h1 className='font-lora text-[24px] font-medium leading-normal'>Azure Theme for Fluent UI</h1>
                            <p className='font-openSans text-lg min-1236:pt-3'>A custom theme package for Fluent UI, aligning components with Azure Portal's
                                brand colors and design language.</p>
                        </div>
                    </div>
                    <div className='flex flex-row max-1236:flex-col gap-5'>
                        {/* <div className='flex max-1236:flex-col bg-white rounded-[20px] justify-center
                            min-940:px-20 max-940:p-5 
                            gap-5 mt-5
                            items-center
                            transition-transform duration-200 hover:-translate-y-2 hover:cursor-pointer'>
                            <div className='flex flex-col '>
                                <div className='content-center'>
                                <p className='text-[28px] font-medium font-poppins leading-tight text-campus'>Columbia Virtual Campus</p>
                                </div>
                                <p className='font-lora text-[20px] font-medium leading-normal mt-1'>Reimagining student connection</p>
                            </div>

                        </div> */}
                        <div className='flex max-1236:flex-col bg-white rounded-[20px] basis-1/2
                            min-940:p-20 max-940:px-10 max-940:py-16
                            gap-5 mt-5
                            items-center
                            max-1236:items-start
                            transition-transform duration-200 hover:-translate-y-2 hover:cursor-pointer'>
                            <div className='flex flex-col 
                
                            '>
                                {/* max-h-[104px] */}
                                <div className='content-center'>
                                    <p className=' text-[26px] max-1236:text-[38px] font-medium font-poppins leading-tight text-campus'>Columbia Virtual Campus</p>
                                </div>
                                <p className='font-lora text-[20px] font-medium mt-2 leading-tight'>Reimagining student connection</p>
                            </div>
                        </div>
                        <div className='flex max-1236:flex-col bg-white rounded-[20px] basis-1/2
                            min-940:p-20 max-940:px-10 max-940:py-16
                            gap-5 mt-5
                            items-center
                            max-1236:items-start
                            transition-transform duration-200 hover:-translate-y-2 hover:cursor-pointer
                            bg-gray-card
                            min-h-[256px]
                            max-940:justify-center
                            '>
                            <div className='flex flex-col'>
                                <div className='content-center'>
                                    <img src={aquaire} className='w-full max-w-[200px] h-auto' />
                                </div>
                                <p className='text-white font-lora text-[20px] font-medium mt-2 leading-tight'>Local, clean water</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
