import React from "react";
import nyc from '../../assets/images/nyc-me.jpeg'
import cs from '../../assets/images/me-cs.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const About: React.FC = () => {
    return (
        <div className="bg-background">
            <Header />
            <div className="justify-items-center bg-background">
                <div className="flex max-w-[1024px] w-full py-20 content-center gap-16">
                    <div className="flex flex-col gap-6 leading-normal basis-1/2">
                        <p className="font-lora text-[50px] ">Nice to meet you</p>
                        <p className="font-openSans leading-normal">I'm a Salvadoran American passionate about being playful, curious, and bringing people together.<br /><br />
                            Growing up, I had no clear picture of the future I was working toward. I just knew it would be something that would inspire and challenge me, while also bringing a sense of stability, fulfillment and joy.<br /><br />
                            I first discovered computer science in high school through a summer program at MIT. It was tough—I had never experienced such academic rigor. But by proactively seeking support, I persevered.</p>
                    </div>

                    <div className="basis-1/2">
                        <img src={nyc} className="rounded-[20px]"/>
                    </div>
                </div>
            </div>
            <div className="justify-items-center bg-background">
                
                <div className="flex max-w-[1024px] w-full py-10 content-center gap-10 rounded-[20px]">
                <div className="basis-1/2">
                        <img src={cs} className="rounded-[20px]"/>
                    </div>
                    <div className="flex flex-col gap-6 leading-normal basis-1/2">
                        <p className="font-lora text-[50px] ">I can, and I will</p>
                        <p className="font-openSans leading-normal">I'm a Salvadoran American passionate about being playful, curious, and bringing people together.<br /><br />
                            For undergrad, I attended Columbia University's School of Engineering. I majored in Computer Science with a focus on applications.

                            As a first-generation college student, I struggled navigating higher education. With the support of friends, family, and my Columbia community, I gained the confidence to embrace difficult challenges and push forward.</p>
                    </div>

                    
                </div>
            </div>


            <Footer />
        </div>
    );
}

export default About;