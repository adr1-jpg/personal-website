import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="flex justify-between mx-32 my-10">
            <p>© 2024 Adriana Orantes</p>
            <div className="flex gap-5 font-openSans">
                <a>Linkedin</a>
                <a>Github</a>
                <a>Resume</a>
            </div>
        </div>
    )
}

export default Footer;