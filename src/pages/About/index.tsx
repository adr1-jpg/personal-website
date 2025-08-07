import React from "react";
import nyc from '../../assets/images/nyc-me.jpeg'
import cs from '../../assets/images/me-cs.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from '../../components/ImageLoad'
import { useEffect } from "react";
import './about.css'
const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background">
            <Header />
            
            <div className="justify-items-center bp">
                <div className="flex about-section max-w-[1024px] w-full py-20 content-center gap-16">
                    <div className="flex flex-col about-desc leading-normal basis-1/2">
                        <p className="font-lora text-[50px] about-header text-blue">Nice to meet you</p>
                        <p className="font-openSans about-text">I'm a <span className="font-bold">Salvadoran American</span> passionate about being playful, curious, and bringing people together.<br /><br />
                            Growing up, I had no clear picture of the future I was working toward. I just knew it would be something that would inspire and challenge me, while also 
                            bringing a sense of <span className="font-bold">stability</span>, <span className="font-bold">fulfillment</span> and <span className="font-bold">joy</span>.<br /><br />
                            I first discovered computer science in high school through a summer program at MIT. It was tough—I had never experienced such academic rigor. But by proactively seeking support, <span className="font-bold text-blue">I persevered.</span></p>
                    </div>

                    <div className="basis-1/2 content-center justify-items-center">
                        <img src={nyc} className="about-img-2"/>
                    </div>
                </div>
            </div>
            <div className="justify-items-center bp">
                
                <div className="flex about-section max-w-[1024px] w-full py-10 content-center gap-10 rounded-[20px]">
                <div className="basis-1/2 content-center justify-items-center">
                        <img src={cs} className="about-img-2"/>
                    </div>
                    <div className="flex flex-col about-desc gap-6 leading-normal basis-1/2">
                        <p className="font-lora text-[50px] about-header text-blue">I can, and I will</p>
                        <p className="font-openSans about-text">
                            For undergrad, I attended Columbia University's School of Engineering. I majored in Computer Science with a focus on applications.
                            As a <span className="font-bold">first-generation college student</span>, I struggled navigating higher education. With the support of friends, family, and my Columbia community, I gained the confidence to embrace difficult challenges and push forward.</p>
                    </div>

                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;