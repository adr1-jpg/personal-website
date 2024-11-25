import React from 'react';
import Header from '../../components/Header'
import self from '../../assets/images/self.jpg'
import nyc from '../../assets/images/nyc-me.jpeg'
import './home.css'
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Trigger the slide-in effect when the component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);

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
                        <a href='#aboutMe' className='text-left font-openSans text-xl font-semibold'>Learn more about me</a>
                        <a href='#aboutMe'>
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
            <div className='flex flex-col h-screen mx-32' id='aboutMe'>
                <h2 className='font-inter text-accent text-start text-5xl font-bold mt-10'>It's so nice to meet you!</h2>
                <div className='grid grid-cols-2 gap-10 mt-10'>
                    <img className='' src={nyc} />
                    <p className='font-openSans text-2xl text-left content-center'>I’m a Salvadoran American passionate about being
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
                <div> </div>
                <div> </div>
            </div>
            <div className='flex flex-col h-screen mx-32'>
                
            </div>
        </div>
    );
};

export default Home;
