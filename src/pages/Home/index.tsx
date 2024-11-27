import React, { useRef } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import self from '../../assets/images/self.jpg'
import nyc from '../../assets/images/nyc-me.jpeg'
import cs from '../../assets/images/me-cs.jpg'
import azureTheme from '../../assets/icons/azure-theme.png'


import './home.css'
import { useState, useEffect } from 'react';
import { useForm } from '../../context/DataProvider';
import { useNavigate } from 'react-router';
// import Lazy from '../../components/Lazy'
const Home: React.FC = () => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/work');
    };
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

    // track scrollHeight

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setNavState({ ...navState, scrollHeight: window.scrollY || 0 })
    //     }
    //     const currentScroll = window.scrollY + 88;

    //     window.addEventListener('scroll', handleScroll);
    //     const home = homeRef.current;
    //     const about = aboutRef.current;
    //     const work = workRef.current;
    //     const gallery = galleryRef.current;

    //     if (home && about && work && gallery) {
    //         const homeTop = home.offsetTop
    //         const homeHeight = home.offsetHeight
    //         const aboutTop = about.offsetTop;
    //         const aboutHeight = about.offsetHeight;
    //         const workTop = work.offsetTop;
    //         const workHeight = work.offsetHeight
    //         const galleryTop = gallery.offsetTop
    //         const galleryHeight = gallery.offsetHeight

    //         if (currentScroll >= homeTop && currentScroll < homeTop + homeHeight) {
    //             setNavState((prevState) => ({
    //                 ...prevState,
    //                 currentState: 'home',
    //             }));
    //         } else if (currentScroll >= aboutTop && currentScroll < aboutTop + aboutHeight) {
    //             setNavState((prevState) => ({
    //                 ...prevState,
    //                 currentState: 'about',
    //             }));
    //         } else if (currentScroll >= workTop && currentScroll < workTop + workHeight) {
    //             setNavState((prevState) => ({
    //                 ...prevState,
    //                 currentState: 'work',
    //             }));
    //         } else if (currentScroll >= galleryTop && currentScroll < galleryTop + galleryHeight) {
    //             setNavState((prevState) => ({
    //                 ...prevState,
    //                 currentState: 'gallery',
    //             }));
    //         }
    //     }

    //     return () => {
    //         window?.removeEventListener('scroll', handleScroll);
    //     }
    // }, [])


    const typeRef = useRef<HTMLDivElement>(null);
    const TypingEffect = ({ text }: { text: string }) => {
        // track if text is visible
        const [isVisible, setIsVisible] = useState(false);
        // store text
        const [displayedText, setDisplayedText] = useState("");
        const [index, setIndex] = useState(0);


        // Typing effect logic
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

        // Intersection Observer to detect when the element is in view
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
                {/* <span className="border-r-2 border-black animate-blink"> </span> */}
            </div>
        );
    }


    return (
        <div id="home" className="flex flex-col bg-background">
            <Header />

            <div id='home' className='grid grid-cols-2 gap-6 h-screen' ref={homeRef}>
                <div
                    // className={`${isVisible ? 'slide-in' : ''} flex flex-col mx-32 justify-center gap-6`}
                    className='flex flex-col mx-32 justify-center gap-6'
                >
                    <h1 className='text-6xl font-montaga text-left'>
                        Adriana Orantes
                    </h1>
                    <p className='text-left font-openSans text-2xl'>
                        At Microsoft, I thrive on transforming complex challenges into elegant solutions, driving projects that enhance user experience.<br /><br />
                        Outside of work, you'll find me dog-watching, working on a puzzle, or taking a 10-mile walk.
                    </p>
                    <div className='flex gap-2 items-center text-accent cursor-pointer'>
                        <a href='#about' className='scroll-link text-left font-openSans text-xl font-semibold'>Learn more about me</a>
                        <a href='#about' className='scroll-link'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="size-6 self-end">
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
                <img
                    src={self}
                    rel="preload"
                    onLoad={handleImageLoad}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: loaded ? 1 : 0,
                        visibility: loaded ? 'visible' : 'hidden',
                        transition: 'opacity .5s ease-in-out',
                    }}
                //   className={`${loaded ? 'visible' : 'hidden'}`}
                >

                </img>



            </div>
            <div id='about' ref={aboutRef}>
                <div className='flex flex-col mx-32 mt-10 h-screen'>
                    <h2 className='font-inter text-accent text-start text-5xl font-bold mt-10'>It's so nice to meet you!</h2>
                    <div className='grid grid-cols-2 gap-10 mt-10'>
                        <img src={nyc} loading='lazy' />
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

                <div className='flex flex-col px-32 py-20 bg-[#D0D2CA]'>
                    <div className='grid grid-cols-2 gap-20'>
                        <div className='content-center'>
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

                            <img className='pt-5' loading='lazy' src={cs} />
                        </div>


                    </div>
                </div>
            </div>

            <div id='work' className='flex flex-col mx-32 gap-6 mt-20' ref={workRef}>

                <div className='p-4'>
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

                <div onClick={handleCardClick} ref={typeRef} className='flex justify-center 
                p-32 bg-white rounded-xl shadow-s 
                bg-gradient-to-r from-indigo-500/30 bg-[length:200%_200%] animate-gradient-x 
                bg-gradient-to-r from-indigo-500/30 from-10% via-sky-500/20 via-30% to-emerald-500/30 to-90% hover:cursor-pointer
                '
                >
                    <div className='size-7/12' >
                        <img loading='lazy' src={azureTheme} />
                    </div>
                </div>

            </div>
            <div className='grid grid-rows-2 mt-20 mb-10 gap-5 text-center justify-items-center mx-32 content-center'>
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
