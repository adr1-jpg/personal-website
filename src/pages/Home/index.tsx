import React from 'react';
import Header from '../../components/Header'
import self from '../../assets/images/self.jpg'
const Home: React.FC = () => {
    return (
        <div id="home" className="flex flex-col">
            <Header />
            <div className='flex flex-row gap-6'>
                <div className='flex flex-col mx-32 justify-center gap-6'>
                    <h1 className='text-6xl font-montaga text-left'>
                        Adriana Orantes
                    </h1>
                    <p className='text-left font-openSans text-xl'>
                        At Microsoft, I thrive on transforming complex challenges into elegant solutions, driving projects that enhance user experience.
                        Outside of work, you'll find me dog-watching, working on a puzzle, or taking a 10-mile walk.
                    </p>
                </div>

                <img className='h-[calc(100vh-85px)]' src={self} />

            </div>
        </div>
    );
};

export default Home;
