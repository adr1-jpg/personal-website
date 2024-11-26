import React from "react";
import { Button, Slider } from "@fluentui/react-components";
import Header from "../../components/Header";
import theme from '../../assets/images/azure-theme-button.png'
import azure from '../../assets/icons/azure-theme.svg'
import azureTheme from '../../assets/icons/azure-theme.svg'
import npm from '../../assets/icons/npm.svg'
import github from '../../assets/icons/github.svg'
import Footer from "../../components/Footer";
const Work: React.FC = () => {
    return (
        <div id='work' className="flex flex-col min-h-screen bg-background">
            <Header />
            <div className='flex flex-col gap-5 justify-start 
                pl-32 pr-4 py-20 bg-white rounded-xl shadow-s 
                bg-gradient-to-r from-indigo-500/30 bg-[length:200%_200%] animate-gradient-x 
                bg-gradient-to-r from-indigo-500/30 from-10% via-sky-500/20 via-30% to-emerald-500/30 to-90% hover:cursor-pointer
                '
            ><h1 className="font-inter font-semibold text-6xl mt-5 text-start">
                    Creating a Unified Design System for Azure
                </h1>
                <div className='size-3/12' >
                    <img loading='lazy' src={azureTheme} />
                </div>

            </div>
            <div className="flex flex-col flex-grow">


                <div className="mx-32">
                    <div className='my-4 font-openSans text-2xl'>
                        Microsoft's <a className="text-accent font-extrabold "
                            href='https://react.fluentui.dev/?path=/docs/concepts-introduction--docs'
                            target="_blank">Fluent UI v9</a> is the latest iteration of their design system.
                        To maintain visual cohesion across all Azure
                        portal components—a platform that serves millions of developers and businesses
                        globally—I developed a custom theme that integrated Azure's brand colors into each
                        Fluent UI component. <br></br><br></br>
                        This customization ensures a cohesive design by aligning the color scheme, typography, and overall style.
                    </div>
                </div>


                <div className="flex flex-col mx-32 mt-1 h-max">

                    <div className="flex gap-10">  <div className="flex flex-col gap-1 justify-between mt-3 ">
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
                        <div className="mt-3">
                            <h1 className="font-inter font-semibold text-xl">Results:</h1>
                            <div className="flex gap-5">
                                <Button style={{ marginTop: '10px' }}> Azure-themed Button </Button>
                                <Button appearance="primary" style={{ marginTop: '10px' }}> Primary Button </Button>
                                <Slider></Slider>
                            </div>
                        </div>
                    </div>
                        <div className="mt-3 content-center">
                            <div className='flow-root'>
                                <div className='mt-1 font-openSans text-2xl'>
                                    Azure-Theme was published as an npm package for easy access and implementation
                                    by developers. By contributing to Microsoft's fluentui-contrib repository—a
                                    key project that supports Fluent—I help maintain the portal's cohesive
                                    look, and support one of the largest cloud platforms in the world.
                                </div>

                            </div>
                            <div className='flex flex-row gap-3 mt-1'>
                                <a className='content-center size-7' href="https://www.npmjs.com/package/@fluentui-contrib/azure-theme?activeTab=readme" target="_blank">
                                    <img loading='lazy' className='hover:cursor-pointer' src={npm} />
                                </a>
                                <a className='size-6' href="https://github.com/microsoft/fluentui-contrib/tree/main/packages/azure-theme" target="_blank">
                                    <img loading='lazy' className='hover:cursor-pointer' src={github} />
                                </a>
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