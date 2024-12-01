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
import './aquaire.css'

const Aquaire: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='aquaire' className="flex flex-col justify-self-center intro">
            <Header />

            <div className='flex flex-col gap-6 justify-start 
            items-center 
            shadow-s 
            '
            >
                <div className="max-w-[1024px] w-full logo-container">
                    <div className='' >
                        <p className='proj-logo font-montserrat'>AQUAire</p>
                    </div>
                    <h1 className="font-lora font-medium mt-5 text-start work-page-desc">
                        Local, clean water
                    </h1>
                </div>


            </div>


            <div className="flex justify-center">
                <div className='flex flex-col'>
                    <h1 className='font-lora section-header'>Overview</h1>
                    <div className='flex flex-col rounded-xl shadow-s'>
                        <p className='font-openSans section-text'>A custom theme package for Fluent UI, aligning components with Azure Portal's
                            brand colors and design language.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Aquaire;