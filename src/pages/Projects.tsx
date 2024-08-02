import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSquareFull } from "react-icons/fa6";

const Projects = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();

    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView1) {
            controls1.start('visible');
        }
    }, [controls1, inView1]);

    useEffect(() => {
        if (inView2) {
            controls2.start('visible');
        }
    }, [controls2, inView2]);

    useEffect(() => {
        if (inView3) {
            controls3.start('visible');
        }
    }, [controls3, inView3]);

    useEffect(() => {
        if (inView4) {
            controls4.start('visible');
        }
    }, [controls4, inView4]);

    return (
        <div className="container m-auto pt-12 min-h-screen">
            <div className="flex gap-4 items-center justify-center">
                <motion.div
                    ref={ref1}
                    initial="hidden"
                    animate={controls1}
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
                        hidden: { opacity: 0, scale: 0.5 }
                    }}
                >
                    <FaSquareFull size={48} className="rotate-45 text-[#ef4444]" />
                </motion.div>
                <motion.h2// Create an animation control for each icon
                    ref={ref2}
                    initial="hidden"
                    animate={controls2}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        hidden: { opacity: 0, y: -50 }
                    }}
                    className="text-6xl font-bold text-gray-800"
                >
                    Projects
                </motion.h2>
                <motion.div
                    ref={ref3}
                    initial="hidden"
                    animate={controls3}
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
                        hidden: { opacity: 0, scale: 0.5 }
                    }}
                >
                    <FaSquareFull size={48} className="rotate-45 text-[#ef4444]" />
                </motion.div>
            </div>

            <motion.h3
                ref={ref4}
                initial="hidden"
                animate={controls4}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
                    hidden: { opacity: 0, y: 50 }
                }}
                className="pt-28 text-5xl font-semibold text-center"
            >
                Coming soon
            </motion.h3>
        </div>
    );
}

export default Projects;
