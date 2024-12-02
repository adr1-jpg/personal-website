import React from "react";
import { useEffect } from "react";
import { Button, Slider } from "@fluentui/react-components";
import Header from "../../components/Header";
import theme from '../../assets/images/azure-theme-button.png'
import azure from '../../assets/icons/azure-theme.svg'
import azureTheme from '../../assets/icons/azure-theme.png'
import npm from '../../assets/icons/npm.png'
import github from '../../assets/icons/github.svg'
import Footer from "../../components/Footer";
import './work.css'
const Work: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='work' className="bg-background ">
            <Header />
            <div className='flex flex-col gap-6 justify-start 
                shadow-s 
                bp
                rounded-[20px]
                hero-container
                bg-gradient-to-r from-indigo-500/30 bg-[length:200%_200%] animate-gradient-x 
                bg-gradient-to-r from-indigo-500/30 from-10% via-sky-500/20 via-30% to-emerald-500/30 to-90%
                '
            >
                <div className="max-w-[1024px] hero-body">
                    <div className='w-full max-w-md max-1236:max-w-sm max-640:w-[250px] h-auto' >
                        <img loading='lazy' src={azureTheme} />
                    </div>
                    <h1 className="font-lora hero-desc">
                        A Unified Design System for Azure
                    </h1>
                </div>

            </div>
            <div className="study-container bp">
                <div>
                    <h1 className='font-lora study-header'>Overview</h1>
                    <p className="text-[18px] leading-normal font-openSans">In 2022, Microsoft launched <a href="https://fluent2.microsoft.design/" target="_blank" className="text-light-blue font-semibold">Fluent v9</a>,
                        the latest version of their design system. I developed a custom theme for the Azure portal,
                        applying Azure's brand colors to Fluent components. This ensured a cohesive and consistent
                        styling, typography, and color scheme, aligning with Azure's design language and delivering
                        a unified experience for millions of global users.
                    </p>
                    <div className="flex flex-row gap-3 mt-3">
                        <a className="hover:cursor-pointer" href='https://www.npmjs.com/package/@fluentui/azure-themes?activeTab=readme' target="_blank"><img className='max-w-[30px]' src={npm} /></a>
                        <a className="hover:cursor-pointer" href='https://github.com/microsoft/fluentui-contrib/tree/main/packages/azure-theme' target="_blank"><img className='max-w-[30px]' src={github} /></a>
                    </div>
                </div>

                <div>
                    <h1 className='font-lora study-header2'>Role</h1>
                    <p className="text-[18px] leading-normal font-openSans">I developed the package using React, Typescript, HTML, and CSS.</p>
                </div>


                <div>
                    <h1 className='font-lora study-header2'>Problem Statement</h1>
                    <p className="text-[18px] leading-normal font-openSans">
                        Ensure brand alignment with Azure's visual identity and deliver a scalable and maintainable solution.
                    </p>
                </div>


                <div className="study-two-col">
                    <div>

                        <h1 className='font-lora study-header'>Results</h1>
                        <p className="text-[18px] leading-normal font-openSans">
                            Achieved a visually cohesive UI across 40+ Fluent components.
                        </p>
                        <p className="text-[18px] leading-normal font-openSans">A few examples:</p>
                        <div className="demo">
                            <Button >Azure-themed button</Button>
                            <Button appearance="primary">Primary button</Button>
                            <Slider defaultValue={30} />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Work;