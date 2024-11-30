import React from "react";
import { useEffect } from "react";
import { Button, Slider } from "@fluentui/react-components";
import Header from "../../components/Header";
import theme from '../../assets/images/azure-theme-button.png'
import azure from '../../assets/icons/azure-theme.svg'
import aquaire from '../../assets/icons/AQUAire.png'
import npm from '../../assets/icons/npm.svg'
import github from '../../assets/icons/github.svg'
import Footer from "../../components/Footer";

const Aquaire: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='aquaire' className="flex flex-col bg-background">
            <Header />
            <div className='flex flex-col gap-6 justify-start 
            items-center
           
            shadow-s 
            bg-gray-card
            '
            >
                <div className="max-w-[1024px] w-full px-10 py-20">
                    <div className='w-full max-w-md max-1236:max-w-sm max-640:w-[250px] h-auto' >
                        <img loading='lazy' src={aquaire} />
                    </div>
                    <h1 className="font-lora font-medium lg:text-3xl text-4xl mt-5 text-start text-[#F5F5F5]">
                        Local, clean water
                    </h1>
                </div>

            </div>
            <div className="flex justify-center">
                <div className='flex flex-col max-w-[1024px] w-full p-10'>
                    <h1 className='font-lora text-xl font-medium leading-normal mb-2'>Overview</h1>
                    <div className='flex flex-col lg:px-10  lg:py-20  bg-white rounded-xl shadow-s'>
                        <p className='font-openSans text-lg pt-3'>A custom theme package for Fluent UI, aligning components with Azure Portal's
                            brand colors and design language.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Aquaire;