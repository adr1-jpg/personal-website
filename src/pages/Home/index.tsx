import React, { useRef } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import self from '../../assets/images/self.jpg'
import nyc from '../../assets/images/nyc-me.jpeg'
import cs from '../../assets/images/me-cs.jpg'
import azureTheme from '../../assets/icons/azure-theme.png'
import virtualCampus from '../../assets/icons/campus.png'
import aquaire from '../../assets/icons/aquaire.png'
import neighborhood from '../../assets/icons/neighborhood.svg'
import './home.css'
import { useState, useEffect } from 'react';
import { useForm } from '../../context/DataProvider';
import { useNavigate } from 'react-router';
import { Card } from '@fluentui/react-components'

// import Lazy from '../../components/Lazy'
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
            <div ref={typeRef} className="font-inter text-accent text-5xl font-bold">
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
        behavior: 'smooth', // Smooth scrolling
      });
    }
    }
    return (
        <div id="home" className="grid bg-background">
            <Header />

            <div id='home' className='grid lg:grid-cols-2 md:grid-cols-1 gap-6 h-screen' ref={homeRef}>
                <div
                    className='flex flex-col py-5 md:px-20 lg:px-20 px-5 justify-center gap-6'>
                    <h1 className='text-6xl font-montaga text-left'>
                        Adriana Orantes
                    </h1>
                    <p className='text-left font-openSans text-3xl'>
                        At Microsoft, I thrive on transforming complex challenges into elegant solutions, driving projects that enhance user experience.<br /><br />
                        Outside of work, you'll find me dog-watching, working on a puzzle, or taking a 10-mile walk.
                    </p>
                    <div className='hidden md:block lg:block'>
                        <div className='flex gap-2 items-center text-accent cursor-pointer '>
                            <a  href="#about" className='scroll-link text-left font-openSans text-2xl font-semibold'>Learn more about me big</a>
                            <a   href="#about" className='scroll-link self-end'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-7 motion-safe:animate-bounce">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 
                                0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 
                                9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 
                                14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06
                                -1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l
                                -1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        <div className='flex gap-1 items-start text-accent cursor-pointer '>
                            <a onClick={scrollToAbout} className='scroll-link text-left font-openSans text-xl font-semibold'>Learn more about me small</a>
                            <a onClick={scrollToAbout} href='#about' className='scroll-link self-end'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-5 self-end motion-safe:animate-bounce">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 
                                0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 
                                9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 
                                14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06
                                -1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l
                                -1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
                <div className='overflow-hidden hidden lg:block'>
                    <img
                        src={self}
                        rel="preload"
                        onLoad={handleImageLoad}
                        className="
                    min-1300: h-[calc(100vh-78px)]
                    object-cover 
                    opacity-0 
                    visibility-hidden 
                    transition-opacity 
                    duration-[2500ms] 
                    ease-in-out
                    min-1300:justify-self-end
                    justify-self-center
                    "
                        style={{
                            opacity: loaded ? 1 : 0,
                            visibility: loaded ? 'visible' : 'hidden',
                        }}
                    />
                </div>

            </div>

            <div id='about' className='grid ' ref={aboutRef}>
                <div className='flex flex-col lg:mt-10 md:mt-10 lg:mx-48 md:mx-48 mx-5'>
                    <h2 className='font-inter text-accent text-start 
                    md:text-5xl lg:text-5xl text-2xl font-bold md:mt-10 
                    large:mt-10 '>It's so nice to meet you!</h2>
                    <div className='grid s:grid-cols-1 lg:grid-cols-2 lg:gap-10 md:gap-10 gap-3 md:mt-10 lg:mt-10 mt-3 mb-20'>
                        <img className='rounded-sm' src={nyc} loading='lazy' />
                        <p className='font-openSans text-2xl text-left content-center '>
                            I'm a Salvadoran American passionate about being
                            <span className='font-semibold'> playful</span>, <span className='font-semibold'> curious</span>, and
                            <span className='font-semibold'> bringing people together</span>.<br></br><br></br>
                            Growing up, I had no clear picture of the future I was working toward.
                            I just knew it would be something that would <span className='font-bold'> inspire</span> and
                            <span className='font-bold'> challenge</span> me, while also bringing a sense of
                            <span className='font-bold'> stability</span>, <span className='font-bold'> fulfillment </span>
                            and <span className='font-bold'> joy</span>.<br></br><br></br>
                            I first discovered computer science in high school through a summer program at MIT.
                            It was tough—I had never experienced such academic rigor.
                            But by proactively seeking support, <span className='text-accent font-bold'>I persevered.</span>

                        </p>
                    </div>
                </div>

                <div id='edu' className='flex flex-col  py-20 bg-[#D0D2CA] justify-center'>
                    <div className='grid s:grid-cols-1 lg:grid-cols-2 lg:mx-48 md:mx-48 mx-5 gap-10  '>
                        <div className='content-center self-center'>
                            <TypingEffect text='I can, and I will.' />
                            <div className='flow-root'>
                                <div className='my-4 font-openSans text-2xl'>
                                    For undergrad, I attended Columbia University’s School of Engineering.
                                    I majored in <span className='font-bold'>Computer Science</span> with a focus on applications.
                                </div>
                            </div>
                            <div className='flow-root'>
                                <div className='my-4 font-openSans text-2xl'>
                                    As a <span className='font-bold'>first-generation college student</span>, I struggled navigating higher education.
                                    With the support of friends, family, and my Columbia community, I gained the
                                    confidence to <span className='font-bold'>embrace difficult challenges</span> and push forward.
                                </div>
                            </div>

                        </div>
                        <div>

                            <img className='rounded-sm' loading='lazy' src={cs} />
                        </div>


                    </div>
                </div>
            </div>

            <div id='work' className='flex flex-col lg:mx-48 md:mx-48 mx-5 gap-6 mt-20 ' ref={workRef}>

                <div className=''>
                    <div className='flow-root'>
                        <div className='my-4 font-openSans text-3xl'>
                            Right now, I'm a <span className='font-extrabold'>Design Engineer </span>
                            for <span className='font-extrabold'>Microsoft's</span> cloud service, <span className='text-blue font-extrabold'>Azure</span>.
                        </div>
                    </div>
                    <div className='flow-root'>
                        <div className='my-4 font-openSans text-3xl'>
                            I build interactive and insightful prototypes for designers and researchers
                            to conduct user studies. I also help maintain <span className='font-black text-accent'>Fluent</span>—Microsoft's internal design system.
                        </div>
                    </div>
                </div>

                <h1 className='font-openSans text-2xl text-left mt-5'>Check out my latest work at Microsoft</h1>
                <Card onClick={handleCardClick} className='items-center 
                
                bg-gradient-to-r from-indigo-500/30 bg-[length:200%_200%] animate-gradient-x 
                bg-gradient-to-r from-indigo-500/30 from-10% via-sky-500/20 via-30% to-emerald-500/30 to-90% hover:cursor-pointer
                transition-transform duration-200 hover:-translate-y-2 '>
                    <img className='w-96 py-20 px-2' src={azureTheme} />
                </Card>
            </div>
            <div className='grid grid-rows-2 mt-20 mb-10 gap-5 lg:mx-48 md:mx-48 mx-5 text-center justify-items-center content-center'>
                <p className='font-inter text-2xl'>In my free time, I enjoy exploring the West Coast, international
                    travel, and photography.</p>
                <div className='flex gap-2 items-center text-accent cursor-pointer' onClick={handleGalleryClick}>
                    <a className='font-openSans  text-2xl'>Check out my gallery</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 self-center motion-safe:animate-bounce">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
                    </svg>
                </div>


            </div>
            <Footer />
        </div>
    );
};

export default Home;
