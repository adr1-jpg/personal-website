import React from "react";
import { Button, Slider } from "@fluentui/react-components";
import Header from "../../components/Header";
import theme from '../../assets/images/azure-theme-button.png'
import azure from '../../assets/icons/azure-theme.svg'
import npm from '../../assets/icons/npm.svg'
import github from '../../assets/icons/github.svg'
import Footer from "../../components/Footer";
const Work: React.FC = () => {
    return (
        <div id='work' className="flex flex-col min-h-screen bg-background">
            <Header />
            <div className="flex flex-col flex-grow">
                <h1 className="font-inter font-semibold text-5xl mx-32 mt-5">
                    Creating a Unified Design System for Microsoft Azure
                </h1>
                <div className="grid grid-cols-3">

                    <div className="grid content-center ml-32" >
                        <img src={azure} />
                    </div><div className="flex flex-col mx-32 mt-6 h-max col-span-2">
                        <div className="grid">
                            <div className='flow-root'>
                                <div className='my-4 font-openSans text-xl'>
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
                        </div>
                    </div>
                </div>


                <div className="flex flex-col mx-32 mt-2 h-max">
                    <h1 className="font-inter font-semibold text-3xl">
                        Results
                    </h1>
                    
                    <div className='flow-root'>
                        <div className='mt-1 font-openSans text-xl'>
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
                        <a className='size-6'href="https://github.com/microsoft/fluentui-contrib/tree/main/packages/azure-theme" target="_blank">
                            <img loading='lazy' className='hover:cursor-pointer' src={github} />
                        </a>
                    </div>
                    <p className="font-openSans text-xl font-semibold mt-3">Example Fluent components styled with Azure-Theme: </p>
                    <div className="flex gap-5 items-end">
                        <Button style={{ marginTop: '10px' }}> Azure-themed Button </Button>
                        <Button appearance="primary" style={{ marginTop: '10px' }}> Primary Button </Button>
                        <Slider></Slider>
                    </div>
                   
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Work;