import React from "react";
import { useEffect } from "react";
import { Button, Slider } from "@fluentui/react-components";
import Header2 from "../../components/Header2";
import theme from '../../assets/images/azure-theme-button.png'
import azure from '../../assets/icons/azure-theme.svg'
import azureTheme from '../../assets/icons/azure-theme.svg'
import npm from '../../assets/icons/npm.svg'
import github from '../../assets/icons/github.svg'
import Footer from "../../components/Footer";

const Work: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='work' className="flex flex-col bg-background">
            <Header2 />
            <div className='flex flex-col gap-6 justify-start 
                lg:px-48  lg:py-20 px-10 py-5 bg-white rounded-xl shadow-s 
                bg-gradient-to-r from-indigo-500/30 bg-[length:200%_200%] animate-gradient-x 
                bg-gradient-to-r from-indigo-500/30 from-10% via-sky-500/20 via-30% to-emerald-500/30 to-90%
                '
            ><h1 className="font-inter font-semibold lg:text-6xl text-4xl mt-5 text-start">
                    Creating a Unified Design System for Azure
                </h1>
                <div className='lg:size-3/12 size-8/12' >
                    <img loading='lazy' src={azureTheme} />
                </div>

            </div>
            <div className="flex flex-col flex-grow lg:mx-40 mx-10">


                <div className=" mt-10">
                    <p className="font-inter font-semibold text-lg">Overview</p>
                    <div className='my-2 font-openSans text-2xl'>
                        Microsoft's <a className="text-accent font-extrabold "
                            href='https://react.fluentui.dev/?path=/docs/concepts-introduction--docs'
                            target="_blank">Fluent UI v9</a> is the latest iteration of their design system.
                        To maintain visual cohesion across all Azure
                        portal components—a platform that serves millions of developers and businesses
                        globally—I developed a custom theme that integrated Azure's brand colors into each
                        Fluent UI component.
                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="font-inter font-semibold text-lg">Results</h1>
                    <div className='flow-root'>
                        <div className='mt-1 font-openSans text-2xl'>
                            Azure-Theme was published as an <a href="https://www.npmjs.com/package/@fluentui-contrib/azure-theme?activeTab=readme" target="_blank" className="text-accent font-extrabold">npm package</a> for easy access and implementation
                            by developers. By contributing to Microsoft's <a href="https://github.com/microsoft/fluentui-contrib/tree/main/packages/azure-theme" target="_blank" className="text-accent font-extrabold">fluentui-contrib repository</a>—a
                            key project that supports Fluent—I help maintain the portal's cohesive
                            look, and support one of the largest cloud platforms in the world.
                        </div>

                    </div>
                    <div className="mt-8">
                        <h1 className="font-inter font-semibold text-lg">Example</h1>
                        <div className="flex flex-col mt-2 h-max">
                            <p className="font-openSans text-xl">
                                To apply Fluent styles, wrap your application with a provider.
                                Then, import <span className="font-mono text-lg bg-[#f9f9f9] rounded-sm">azure-theme</span> from the <span className="font-mono text-lg bg-[#f9f9f9] rounded-sm">fluentui-contrib</span> repository to style
                                components for the Azure Portal.
                            </p>
                            <div className="flex gap-10 mt-4 ">

                                <div className="flex flex-row gap-10 justify-between mt-3block hidden lg:block ">
                                    <div className="bg-[#f9f9f9] p-6 rounded-sm ">
                                        <pre>
                                            <code>
                                                {`import * as React from 'react';
import { Button, Slider } from '@fluentui/react-components';
import { FluentProvider, button } from '@fluentui/react-components';
import { AzureDarkTheme } from '@fluentui-contrib/azure-theme';

function App() {
const theme = AzureDarkTheme; // or AzureLightTheme

    return (
        <FluentProvider theme={theme}>
            <Button>Azure Themed Button</Button>
            <Button appearance='primary'>Primary Button</Button>
            <Slider />
        </FluentProvider>
    );
}`}
                                            </code>
                                        </pre>
                                    </div>

                                    <div className="flex flex-col gap-4 hidden lg:block" >

                                        <div className="flex flex-col gap-4 ">
                                            <p className="font-inter font-semibold text-lg">Button and Slider demo</p>
                                            <Button className="w-44" onClick={() => alert('A Fluent button styled with the azure-theme package')}> Azure-themed Button </Button>
                                            <Button className="w-44" onClick={() => alert('A primary button!')} appearance="primary" > Primary Button </Button>
                                            <Slider className="w-44" value={30}></Slider>
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div className="block lg:hidden">
                                <div className="flex flex-col gap-4 ">
                                    <p className="font-inter font-semibold text-lg">Button and Slider demo</p>
                                    <Button className="w-44" onClick={() => alert('Just an example of how a Fluent button styled with the azure-theme package')}> Azure-themed Button </Button>
                                    <Button className="w-44" onClick={() => alert('A primary button!')} appearance="primary" > Primary Button </Button>
                                    <Slider className="w-44" value={30}></Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Work;