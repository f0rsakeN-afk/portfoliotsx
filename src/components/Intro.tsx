import { PiStarFourFill, PiHandWavingBold } from "react-icons/pi";
import myImage from '../data/IMG_20240621_082931_391.jpg';
import Socials from "./Socials";

const Intro = () => {
    return (
        <div className="container m-auto px-4 xl:px-0 py-8 xl:py-40">

            <div className="grid xl:grid-cols-3 gap-2  ">
                <div className="xl:col-span-2 pt-20">
                    <p className="flex md:items-center gap-1 text-gray-700 text-xl font-medium">
                        <span className="text-yellow-600 " ><PiHandWavingBold size={28} /></span>
                        My name is Naresh & I am pursuing Bachelor in Computer Engineering!</p>

                    <section className="py-4">
                        <h1 className="text-6xl md:text-8xl xl:text-9xl text-gray-800 font-semibold pt">MERN Stack </h1>
                        <section className=" flex items-center gap-4 text-[#EF4444]">
                            <OrangeText />
                            <PiStarFourFill size={72} className="" />
                        </section>
                    </section>

                    <p className="text-gray-700 text-xl font-medium ">from Biratnagar, Nepal.</p>

                    <Socials/>
                </div>
                <div className="order-first xl:order-last flex items-center justify-center">
                    <img src={myImage} alt="my-image" className=' rounded-full drop-shadow-lg h-80 xl:h-[35rem]   ' />
                </div>
            </div>
        </div>
    )
}

export default Intro;
const OrangeText = () => {
    return (
        <h1 className="text-6xl md:text-8xl xl:text-9xl  font-semibold pt text-[#EF4444]">Developer</h1>
    )
}