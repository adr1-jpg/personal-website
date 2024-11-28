import React from "react";

const Footer: React.FC = () => {
    return (
        <div>

            <div className="hidden md:block lg:block">
                <div className="flex justify-between lg:mx-32 mx-8 my-10 text-lg">
                    <p>© 2024 Adriana Orantes</p>
                    <div className="flex gap-5 font-openSans">
                        <a className="hover:cursor-pointer" href="https://www.linkedin.com/in/adriana-orantes-31a5a6198/" target="_blank">Linkedin</a>
                        <a className="hover:cursor-pointer" href="https://github.com/adr1-jpg" target="_blank">Github</a>
                        <a className="hover:cursor-pointer" href="https://docs.google.com/document/d/1YEoeWHF4jqr3WS938hHSKB3Rxo8hq9-t74FeBPZSOSw/edit?usp=sharing" target="_blank">Resume</a>
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <div className="flex flex-col gap-2 justify-between mx-8 my-10">
                    <p>© 2024 Adriana Orantes</p>
                    <div className="flex gap-5 font-openSans ">
                        <a className="hover:cursor-pointer" href="https://www.linkedin.com/in/adriana-orantes-31a5a6198/" target="_blank">Linkedin</a>
                        <a className="hover:cursor-pointer" href="https://github.com/adr1-jpg" target="_blank">Github</a>
                        <a className="hover:cursor-pointer" href="https://docs.google.com/document/d/1YEoeWHF4jqr3WS938hHSKB3Rxo8hq9-t74FeBPZSOSw/edit?usp=sharing" target="_blank">Resume</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;