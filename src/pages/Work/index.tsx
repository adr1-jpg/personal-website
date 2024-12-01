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

const Work: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='work' className="bg-background">
            <Header />
            <div className='flex flex-col gap-6 justify-start 
                items-center
                shadow-s 
                bp
                bg-gradient-to-r from-indigo-500/30 bg-[length:200%_200%] animate-gradient-x 
                bg-gradient-to-r from-indigo-500/30 from-10% via-sky-500/20 via-30% to-emerald-500/30 to-90%
                '
            >
                <div className="max-w-[1024px] w-full px-10 py-20">
                    <div className='w-full max-w-md max-1236:max-w-sm max-640:w-[250px] h-auto' >
                        <img loading='lazy' src={azureTheme} />
                    </div>
                    <h1 className="font-lora font-medium lg:text-3xl text-4xl mt-5 text-start">
                        A Unified Design System for Azure
                    </h1>
                </div>

            </div>
            <div className="flex justify-center">
                <div className='flex flex-col max-w-[1024px] w-full p-10'>
                    <h1 className='font-lora text-xl font-medium leading-normal mb-2'>Overview</h1>
                    <p className="text-[18px] leading-normal font-openSans">Earlier this year, Microsoft
                        launched Fluent v9, the latest version of their design system. To ensure
                        consistency across all components using Fluent UI for the Azure
                        portal—a platform used by millions of developers and businesses
                        worldwide—I created a custom theme that applied Azure's brand
                        colors to each Fluent component. This ensured that the portal's
                        styling, color scheme, typography, and borders were cohesive and
                        aligned with the Azure design language, providing a seamless and
                        unified user experience for a vast, global audience.
                    </p>
                    <h1 className='font-lora text-xl font-medium leading-normal mb-2 mt-5'>Results</h1>
                    <p className="text-[18px] leading-normal font-openSans">Azure Theme was published as
                        an npm package for easy access and implementation by developers.
                        By contributing to Microsoft's fluentui-contrib repository—a key project
                        that supports Fluent UI— I help maintain the portal's cohesive look, and
                        support one of the largest cloud platforms in the world.
                    </p>
                    <div className="flex flex-row gap-3 mt-3">
                        <a className="hover:cursor-pointer" href='https://www.npmjs.com/package/@fluentui/azure-themes?activeTab=readme' target="_blank"><img className='max-w-[30px]' src={npm} /></a>
                        <a className="hover:cursor-pointer" href='https://github.com/microsoft/fluentui-contrib/tree/main/packages/azure-theme' target="_blank"><img className='max-w-[30px]' src={github} /></a>
                    </div>

                </div>
            </div>

<Footer/>
        </div>
    )
}

export default Work;