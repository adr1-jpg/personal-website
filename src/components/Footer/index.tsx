import React from "react";

const Footer: React.FC = () => {
    return (
        <div>

            <div className="hidden md:block lg:block">

                <div className="flex justify-between lg:mx-32 mx-8 my-10">
                    <p>© 2024 Adriana Orantes</p>
                    <div className="flex gap-5 font-openSans">
                        <a>Linkedin</a>
                        <a>Github</a>
                        <a>Resume</a>
                    </div>
                </div>
            </div>
            <div className="block md:hidden">

                <div className="flex flex-col gap-2 justify-between mx-8 my-10">
                    <p>© 2024 Adriana Orantes</p>
                    <div className="flex gap-5 font-openSans">
                        <a>Linkedin</a>
                        <a>Github</a>
                        <a>Resume</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;