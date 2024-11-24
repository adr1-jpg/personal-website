import React from 'react';
import Header from '../../components/Header'
import self from '../../assets/images/self.jpg'
import nyc from '../../assets/images/nyc-me.jpeg'
const Home: React.FC = () => {
    return (
        <div id="home" className="flex flex-col">
            <Header />
            <div className='flex flex-row gap-6'>
                <div className='flex flex-col mx-32 justify-center gap-6'>
                    <h1 className='text-6xl font-montaga text-left'>
                        Adriana Orantes
                    </h1>
                    <p className='text-left font-openSans text-2xl'>
                        At Microsoft, I thrive on transforming complex challenges into elegant solutions, driving projects that enhance user experience.<br /><br />
                        Outside of work, you'll find me dog-watching, working on a puzzle, or taking a 10-mile walk.
                    </p>
                    <div className='flex gap-2 items-center text-accent'>
                        <a href='#aboutMe' className='text-left font-openSans text-xl font-semibold  transition cursor-pointer ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ...'>Learn more about me</a>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg> */}
                    </div>
                </div>
                <img className='h-[calc(100vh-85px)]' src={self} />
            </div>
            <div className='flex flex-col h-screen mx-32' id='aboutMe'>
                <h2 className='font-inter text-accent text-start text-5xl font-bold mt-10'>It's so nice to meet you!</h2>
                <div className='grid grid-cols-2 gap-10 mt-10'>
                    <img className='' src={nyc}/>
                    <p className='font-openSans text-2xl text-left content-center'>I’m a Salvadoran American passionate about being 
                    playful, curious, and bringing people together.<br></br><br></br>
                    Growing up, I had no clear picture of the future I was working toward. 
                    I just knew it would be something that would inspire and challenge me, 
                    while also bringing a sense of stability, fulfillment and joy.<br></br><br></br>
                    I first discovered computer science in high school through a summer program at MIT. 
                    It was tough—I had never experienced such academic rigor. 
                    But by proactively seeking support, I persevered.</p>
                </div>
                <div> </div>
                <div> </div>
            </div>
        </div>
    );
};

export default Home;
