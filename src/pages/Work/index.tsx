import React from "react";
import { useEffect } from "react";
import { Button, Slider } from "@fluentui/react-components";
import Header from "../../components/Header";
import azureTheme from '../../assets/icons/azure-theme.svg'
import npm from '../../assets/icons/npm.png'
import github from '../../assets/icons/github.svg'
import Footer from "../../components/Footer";
import './work.css'

const Work: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='work' className="bg-background">
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
                <div className="three-col top-section">
                    <div className="">
                        <h1 className='font-lora text-blue info-header'>Role</h1>
                        <p className="text-[18px] leading-normal font-openSans info-text">Developer</p>
                    </div>
                    <div className="">
                        <h1 className='font-lora text-blue info-header'>Release</h1>
                        <p className="text-[18px] leading-normal font-openSans info-text">August 2024</p>
                    </div>
                    <div className="">
                        <h1 className='font-lora text-blue info-header'>Tools</h1>
                        <p className="text-[18px] leading-normal font-openSans info-text">React, Typescript, HTML, CSS</p>
                    </div>
                </div>
                <div className="">
                    <h1 className='font-lora study-header'>Overview</h1>
                    <p className="font-openSans design-desc">In 2022, Microsoft launched <a href="https://fluent2.microsoft.design/" target="_blank" className="text-light-blue font-semibold">Fluent v9</a>,
                        the latest version of their design system. I developed a custom theme for the Azure portal,
                        applying Azure's brand colors to Fluent components. This ensured a cohesive and consistent
                        styling, typography, and color scheme, aligning with Azure's design language and delivering
                        a unified experience for millions of global users.
                    </p>
                    <div className="flex gap-3 mt-2">
                        <a href="https://www.npmjs.com/package/@fluentui/azure-themes?activeTab=readme" target="_blank">
                            <img src={npm} className="icon" />
                        </a>
                        <a href="https://github.com/adr1-jpg/fluentui-contrib/tree/6307a97b0424c3e5c069a5bf6d2dfc0b2f5d1fca/packages/azure-theme" target="_blank">
                            <img src={github} className="icon" />
                        </a>
                    </div>
                </div>

                <div className="">
                    <h1 className='font-lora study-header'>Key features</h1>
                    <p className="text-[18px] leading-normal font-openSans">
                        <ul className="list pl-5 design-desc">
                            <li className="font-openSans">Light and Dark theme</li>
                            <li className="font-openSans">High contrast mode</li>
                            <li className="font-openSans">Easy implementation: Simply import the desired theme and wrap your components with
                                <a href="https://fluent2.microsoft.design/components/web/react/fluentprovider/usage"
                                    target="_blank"
                                    className="text-light-blue hover:cursor-pointer font-semibold"> FluentProvider
                                </a>
                            </li>
                        </ul>
                    </p>


                    <h1 className="text-[18px] font-openSans design-desc mt-4">This button demonstrates the Azure Theme styling 
                        applied to a Fluent button. On click, it navigates to a 
                        Storybook containing a showcase of all Fluent components styled with the Azure Theme. </h1>
                    <div className="demo">
                        <a href="https://microsoft.github.io/fluentui-contrib/azure-theme/?path=/docs/packages-azure-theme--docs"
                            target="_blank">
                            <Button appearance="primary">View all components</Button>
                        </a>

                        {/* <Slider defaultValue={30} /> */}
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Work;