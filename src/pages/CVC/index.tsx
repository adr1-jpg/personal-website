import React from "react";
import { useEffect } from "react";
import { Button, Slider } from "@fluentui/react-components";
import Header from "../../components/Header";
import graphic from '../../assets/icons/graphic.svg';
import './cvc.css'
import npm from '../../assets/icons/npm.png'
import github from '../../assets/icons/github.svg'
import Footer from "../../components/Footer";
import sketch from '../../assets/images/sketch.png'
import design from '../../assets/images/final-design.png'

const CVC: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='cvc' className="bg-background">
            <Header />
            <div className='flex flex-col gap-6 justify-start 
                items-center
                bg-[#FCE4D5]
                shadow-s 
                rounded-[20px]
                bp
                items-center
            
                '
            // style={{height: 'calc(100vh - 300px)'}}
            >
                <div className="max-w-[1024px] campus-hero-container">
                    <div className='w-full max-640:w-[250px] h-auto' >
                        <p className='font-poppins text-campus'>Columbia Virtual Campus</p>
                        <h1 className="font-lora text-campus-desc text-start">
                            Reimagining student connection
                        </h1>
                    </div>

                    <div className="flex flex-row w-auto">
                        <div className="graphic ">
                            <img src={graphic} className='h-auto' style={{minWidth: '100px', minHeight: '100px'}}/>
                        </div>

                    </div>

                </div>

            </div>


            <div className="study-container bp">
                <div className="three-col top-section">
                    <div className="">
                        <h1 className='font-lora text-blue info-header'>Role</h1>
                        <p className="text-[18px] leading-normal font-openSans info-text">Designer</p>
                    </div>
                    <div className="">
                        <h1 className='font-lora text-blue info-header'>Duration</h1>
                        <p className="text-[18px] leading-normal font-openSans info-text">Sept 2020 - May 2021</p>
                    </div>
                    <div className="">
                        <h1 className='font-lora text-blue info-header'>Tools</h1>
                        <p className="text-[18px] leading-normal font-openSans info-text">Figma</p>
                    </div>
                </div>

                <div className="">
                    <h1 className='font-lora study-header'>Overview</h1>
                    <p className="font-openSans design-desc">As a designer for Columbia Virtual Campus, I contributed
                        to enhancing a platform developed during the pandemic to foster remote student connection. I was tasked with redesigning the 'events' section of the homepage to improve user experience and accessibility.
                        <br /><br />Key updates included adjusting font colors to meet WCAG AA standards for inclusivity and highlighting key events to enhance visibility and engagement.
                    </p>
                </div>

                <div className="">
                    <h1 className='font-lora study-header'>Design Process</h1>
                    <h1 className='font-openSans design-desc'>I began with a low-fidelity prototype for the events section, 
                        focusing on highlighting a featured event alongside other options. After experimenting with layouts, 
                        I finalized a scrollable design that balances visibility and functionality, enabling users to explore 
                        more events seamlessly.</h1>
                    <div className="design-container mt-5 mb-5">

                        <div className="">
                            <div className="design-img">
                                <img src={sketch} />
                            </div>

                        </div>
                    </div>
                    <h1 className='font-openSans design-desc mb-5'>Using this foundation, I created a high-fidelity mockup in Figma, incorporating visual design elements like color palette and interactive components.</h1>
                    <div className="design-container">
                        <div className="">
                            <div className="design-img">
                                <img src={design} />
                            </div>

                        </div>
                    </div>

                </div>


            </div>


            <Footer />

        </div>
    )
}

export default CVC;