import React from "react";
import nyc from '../../assets/images/nyc-me.jpeg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const About: React.FC = () => {
    return (
        <div >
            <Header />
            <div className="justify-items-center">
                <div className="flex max-w-[1024px] w-full px-10 py-20 content-center gap-5">
                    <div className="flex flex-col gap-5 leading-normal basis-1/2">
                        <p className="font-lora text-[50px] ">Nice to meet you</p>
                        <p className="font-openSans leading-normal">I'm a Salvadoran American passionate about being playful, curious, and bringing people together.<br/><br/>
                            Growing up, I had no clear picture of the future I was working toward. I just knew it would be something that would inspire and challenge me, while also bringing a sense of stability, fulfillment and joy.<br/><br/>
                            I first discovered computer science in high school through a summer program at MIT. It was tough—I had never experienced such academic rigor. But by proactively seeking support, I persevered.</p>
                    </div>

                    <div>
                        <img src={nyc} />
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}

export default About;