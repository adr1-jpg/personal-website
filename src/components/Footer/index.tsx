import React from "react";
import resume from '../../assets/icons/resume.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'

const Footer: React.FC = () => {
    return (
        <div className="justify-items-center bg-pastel-blue">

            <div className="hidden md:block lg:block flex w-full max-w-[1024px] px-10 py-5">
                <div className="flex justify-between text-[16px]">
                    <p>Made by Adriana Orantes</p>
                    <div className="flex gap-5 font-openSans">
                        <a className="hover:cursor-pointer flex items-center" href="https://www.linkedin.com/in/adriana-orantes-31a5a6198/" target="_blank">
                            <img src={linkedin} alt="Linkedin" className="w-4 h-4 mr-1" />Linkedin
                        </a>
                        <a className="hover:cursor-pointer flex items-center" href="https://github.com/adr1-jpg" target="_blank">
                            <img src={github} alt="Github" className="w-4 h-4 mr-1" />Github
                        </a>
                        <a className="hover:cursor-pointer flex items-center" href="https://docs.google.com/document/d/1YEoeWHF4jqr3WS938hHSKB3Rxo8hq9-t74FeBPZSOSw/edit?usp=sharing" target="_blank">
                            <img src={resume} alt="Resume" className="w-4 h-4 mr-1" />Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* <div className="block md:hidden bg-pastel-blue">
                <div className="flex flex-col gap-2 justify-between mx-8 my-10 text-[16px]">
                    <p>© 2024 Adriana Orantes</p>
                    <div className="flex gap-5 font-openSans ">
                    <a className="hover:cursor-pointer flex items-center" href="https://www.linkedin.com/in/adriana-orantes-31a5a6198/" target="_blank">
                            <img src={linkedin} alt="Linkedin" className="w-4 h-4 mr-1" />Linkedin
                        </a>
                        <a className="hover:cursor-pointer flex items-center" href="https://github.com/adr1-jpg" target="_blank">
                            <img src={github} alt="Github" className="w-4 h-4 mr-1" />Github
                        </a>
                        <a className="hover:cursor-pointer flex items-center" href="https://docs.google.com/document/d/1YEoeWHF4jqr3WS938hHSKB3Rxo8hq9-t74FeBPZSOSw/edit?usp=sharing" target="_blank">
                            <img src={resume} alt="Resume" className="w-4 h-4 mr-1" />Resume
                        </a>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default Footer;