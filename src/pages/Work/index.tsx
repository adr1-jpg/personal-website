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
        <div id='work' className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col flex-grow">
                <h1 className="font-inter font-semibold text-4xl mx-32 mt-10">
                    Creating a Unified Design System for Microsoft Cloud Services
                </h1>
                <div className="grid grid-cols-3">

                    <div className="grid content-center ml-32" >
                        <img src={azure} />
                    </div><div className="flex flex-col mx-32 mt-6 h-max col-span-2">
                        <div className="grid">
                            <div className='flow-root'>
                                <div className='my-4 font-openSans text-xl'>
                                    Earlier this year, Microsoft launched Fluent v9, the latest version of their design system.
                                    To ensure consistency across all components using Fluent UI for the Azure portal—a
                                    platform used by millions of developers and businesses worldwide—I created a custom theme
                                    that applied Azure's brand colors to each Fluent component. This ensured that the portal's
                                    styling, color scheme, typography, and borders were cohesive and aligned with the Azure
                                    design language, providing a seamless and unified user experience for a vast, global audience.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col mx-32 mt-2 h-max">
                    <h1 className="font-inter font-semibold text-3xl">
                        Results
                    </h1>
                    <p className="font-openSans text-xl mt-2">Example Fluent components with Azure-Theme: </p>
                    <div className="flex gap-5 items-end">
                        <Button style={{ marginTop: '10px' }}> Azure-themed Button </Button>
                        <Button appearance="primary" style={{ marginTop: '10px' }}> Primary Button </Button>
                        <Slider></Slider>
                    </div>
                    <div className='flow-root'>
                        <div className='mt-4 font-openSans text-xl'>
                            Azure Theme was published as an npm package for easy access and implementation
                            by developers. By contributing to Microsoft's fluentui-contrib repository—a
                            key project that supports Fluent UI— I help maintain the portal's cohesive
                            look, and support one of the largest cloud platforms in the world.
                        </div>
                    </div>
                    <div className='my-1 font-openSans text-xl flex flex-row gap-5'>
                        <a className='content-center' target="_blank" href="https://www.npmjs.com/package/@fluentui-contrib/azure-theme?activeTab=readme">
                            <img className='hover:cursor-pointer' src={npm} />
                        </a>
                        <a target="_blank" href="https://github.com/microsoft/fluentui-contrib/tree/main/packages/azure-theme">
                            <img className='hover:cursor-pointer' src={github} />
                        </a>



                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Work;