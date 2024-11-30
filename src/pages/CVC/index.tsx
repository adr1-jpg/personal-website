import React from "react";
import { useEffect } from "react";
import { Button, Slider } from "@fluentui/react-components";
import Header from "../../components/Header";
import graphic from '../../assets/icons/graphic.svg';

import npm from '../../assets/icons/npm.png'
import github from '../../assets/icons/github.svg'
import Footer from "../../components/Footer";

const CVC: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='cvc' className="flex flex-col bg-background">
            <Header />
            <div className='flex flex-col gap-6 justify-start 
                items-center
                bg-[#FCE4D5]
                shadow-s 
                '
                // style={{height: 'calc(100vh - 300px)'}}
            >
                <div className="max-w-[1024px] w-full px-10 py-16 justify-items-start relative min-h-[500px]">
                    <div className='w-full max-640:w-[250px] h-auto' >
                        <p className=' text-[40px] max-1236:text-[50px] font-medium font-poppins leading-tight text-campus'>Columbia Virtual Campus</p>
                        <h1 className="font-lora font-medium lg:text-[28px] text-4xl mt-1 text-start">
                            Reimagining student connection
                        </h1>
                    </div>

                    <div className="flex flex-row w-auto">
                        <div className="mt-10 basis-1/6 leading-relaxed">
                            <a className="font-lora font-[24px] font-bold hover:cursor-pointer text-blue hover:text-blue hover:font-bold">Overview</a>
                            <p className="font-lora font-[24px] text-[#8CB3CC] hover:cursor-pointer hover:font-bold">Research</p>
                            <p className="font-lora font-[24px] text-[#8CB3CC] hover:cursor-pointer hover:font-bold">Design</p>
                            <p className="font-lora font-[24px] text-[#8CB3CC] hover:cursor-pointer hover:font-bold">Result</p>
                        </div>
                        <div className="absolute bottom-[0] right-[0] w-[80%] ">
                            <img src={graphic} className='h-auto' />
                        </div>
                        
                    </div>

                </div>

            </div>
            <div className="flex justify-center">
                <div className='flex flex-col max-w-[1024px] w-full p-10'>
                    <h1 className='font-lora text-xl font-medium leading-normal mb-2'>Overview</h1>
                    <div className='flex flex-col shadow-s'>
                        <p className='font-openSans text-[16px] leading-normal'>As a designer for Columbia Virtual Campus, I contributed 
                            to enhancing a platform developed during the pandemic to foster remote student connection. 
                            My primary responsibility was redesigning the homepage to improve usability and accessibility. 
                            I updated font colors to meet WCAG AA accessibility standards, ensuring an inclusive user 
                            experience, and redesigned the events section to prominently feature highlighted events, 
                            improving visibility and engagement. This redesign strengthened the platform's mission of 
                            building community in a challenging remote environment.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CVC;