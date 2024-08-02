import { easeInOut, motion } from 'framer-motion';
import { PiStarFourFill, PiHandWavingBold } from "react-icons/pi";
import myImage from '../data/IMG_20240621_082931_391.jpg';
import Socials from "./Socials";

const Intro = () => {
    return (
        <div className="container m-auto px-4 xl:px-0 py-8 xl:py-40 overflow-hidden">

            <div className="grid xl:grid-cols-3 gap-2">
                <div className="xl:col-span-2 pt-20">
                    <motion.p
                        animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        className="flex md:items-center gap-1 text-gray-700 text-xl font-medium"
                    >
                        <span className="text-yellow-600">
                            <PiHandWavingBold size={28} />
                        </span>
                        My name is Naresh & I am pursuing Bachelor in Computer Engineering!
                    </motion.p>

                    <section className="py-4">
                        <motion.h1
                            animate={{ scale: 1, x: 0 }}
                            initial={{ scale: 0, x: -500 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="text-6xl md:text-8xl xl:text-9xl text-gray-800 font-semibold pt"
                        >
                            MERN Stack
                        </motion.h1>
                        <section className="flex items-center gap-4 text-[#EF4444]">
                            <OrangeText />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 1,
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                            >
                                <PiStarFourFill size={72} />
                            </motion.div>
                        </section>
                    </section>

                    <motion.p
                        animate={{ x: 0 }}
                        initial={{ x: -350 }}
                        transition={{ duration: 0.6, ease: easeInOut }}
                        className="text-gray-700 text-xl font-medium"
                    >
                        from Biratnagar, Nepal.
                    </motion.p>

                    <Socials />
                </div>
                <div className="order-first xl:order-last flex items-center justify-center">
                    <motion.img
                        src={myImage}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.2, 0.8, 0.4, 1],
                            scale: {
                                type: "spring",
                                damping: 10,
                                stiffness: 150,
                                restDelta: 0.001,
                            },
                        }}
                        alt="my-image"
                        className="rounded-full drop-shadow-lg h-80 xl:h-[35rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;

const OrangeText = () => {
    return (
        <motion.h1
            animate={{ scale: 1, x: 0 }}
            initial={{ scale: 0, x: -500 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-6xl md:text-8xl xl:text-9xl font-semibold pt text-[#EF4444]"
        >
            Developer
        </motion.h1>
    );
};
