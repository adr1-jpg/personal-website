import React from "react";
import { useEffect } from "react";
import { Button, Slider } from "@fluentui/react-components";
import Header from "../../components/Header";
import theme from '../../assets/images/azure-theme-button.png'
import azure from '../../assets/icons/azure-theme.svg'
import azureTheme from '../../assets/icons/azure-theme.svg'
import npm from '../../assets/icons/npm.svg'
import github from '../../assets/icons/github.svg'
import Footer from "../../components/Footer";

const Aquaire: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div id='aquaire' className="flex flex-col min-h-screen bg-background">
        <Header />
        <h1 className="font-openSans text-4xl mx-48 mt-10">Aquaire</h1>
        {/* <div className="flex flex-col flex-grow mx-48">
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
        </div> */}
        {/* <Footer /> */}
    </div>
    )
}

export default Aquaire;