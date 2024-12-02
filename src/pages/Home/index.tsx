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
import { Link, useNavigate } from 'react-router-dom';
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
        const [isVisible, setIsVisible] = useState(false);
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
                { threshold: 0.5 }
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
            <div ref={typeRef} className="font-lora text-blue relative greeting" style={{ minWidth: `${text.length}ch` }}>
                <span style={{ visibility: 'hidden' }}>{text}</span>
                <span className='absolute left-[0]'>{displayedText}</span>
            </div>
        );
    }

    return (
        <div className='bg-gradient'>
            <Header />
            <div className='flex bp intro' >
                <div className='h-auto'>
                    <div className=''>
                        <TypingEffect text="Hi, I'm Adri!" />
                    </div>
                    <p className='text-left leading-loose desc font-openSans'>
                        I love tackling real-world problems that make a difference in people's lives.<br />
                        Design Engineer @ <a className='text-light-blue hover:cursor-pointer' href='https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account/search?ef_id=_k_Cj0KCQiAr7C6BhDRARIsAOUKifj3TEMgGBDB3PWi2jB14RqTjd-y-2LI1j4um87UHDilRu9mQ3TmM2AaAh4DEALw_wcB_k_&OCID=AIDcmmfq865whp_SEM__k_Cj0KCQiAr7C6BhDRARIsAOUKifj3TEMgGBDB3PWi2jB14RqTjd-y-2LI1j4um87UHDilRu9mQ3TmM2AaAh4DEALw_wcB_k_&gad_source=1&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifj3TEMgGBDB3PWi2jB14RqTjd-y-2LI1j4um87UHDilRu9mQ3TmM2AaAh4DEALw_wcB' target='_blank'>Microsoft Azure</a>.<br />
                        Puzzle, cycling, and dog enthusiast.
                    </p>
                </div>
                <div className='h-auto self'>
                    <img src={self} rel='preload' className='w-full max-w-md max-1236:max-w-60 h-auto rounded-[20px] ' />
                </div>
            </div>
            <div className='bp'>

                <h1 className='text-2xl font-lora text-left work-title mb-5'>
                    Check out my work ✨
                </h1>
                <div className='work-container transition-transform 
                        duration-200 hover:-translate-y-2 hover:cursor-pointer'>
                    <Link to='/work' className='one-card'>
                        <div className='one-card-body'>
                            <div className='card flex flex-row '>
                                <div className='content-center'>
                                    <img src={azureTheme} className='one-card-logo h-auto' />
                                </div>
                            </div>
                            <div className='max-1236:mt-2'>
                                <h1 className='font-lora card-title'>Azure Theme for Fluent UI</h1>
                                <p className='font-openSans card-text'>A custom theme package for Fluent UI, aligning components with Azure Portal's
                                    brand colors and design language.</p>
                            </div>
                        </div>
                    </Link>
                    
                    {/* <div className='two-card-container bp'>

                        <Link to='/campus' className='two-card'>
                            <div className='transition-transform 
                            duration-200 hover:-translate-y-2 hover:cursor-pointer
                            '>
                                <div className='flex flex-col'>
                                    <div className='content-center'>
                                        <p className=' text-[26px] max-1236:text-[30px] font-medium font-poppins leading-tight text-campus card-brand'>Columbia Virtual Campus</p>
                                    </div>
                                    <p className='font-lora text-[20px] 
                                        font-medium mt-2 leading-tight card-title-two'>Reimagining student connection</p>

                                </div>
                            </div>
                        </Link>

                        <Link to='/aquaire' className='two-card'>
                            <div className='transition-transform 
                            duration-200 hover:-translate-y-2 hover:cursor-pointer'>
                                <div className='flex flex-col'>
                                    <div className='content-center'>
                                        <img src={aquaire} className='w-full max-w-[160px] h-auto' />
                                    </div>
                                    <p className='font-lora text-[20px] 
                                        font-medium mt-2 leading-tight card-title-two'>Local, clean water</p>
                                </div>
                            </div>
                        </Link>


                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
