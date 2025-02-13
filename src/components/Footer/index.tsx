import React from "react";
import resume from '../../assets/icons/resume.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import './footer.css'
const Footer: React.FC = () => {
    return (
        <div className="bp">
            <div className="footer-container">
                <div className="footer-left">
                    <p>Made by Adriana Orantes ✨</p>
                 </div>
                <div className="footer-right">
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
            {/* <div className="justify-items-center">
                <div className="hidden md:block lg:block flex w-full max-w-[1024px] my-10">
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

            </div>
            <div className="justify-items-start">
                <div className="block md:hidden">
                    <div className="flex flex-col gap-2 justify-between mx-8 my-10 text-[12px]">
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
                </div>
            </div> */}

        </div>

    )
}

export default Footer;