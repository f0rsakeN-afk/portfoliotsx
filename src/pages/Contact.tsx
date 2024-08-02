import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSquareFull } from "react-icons/fa6";

const Contact = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();
    const controls5 = useAnimation();

    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

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

    useEffect(() => {
        if (inView5) {
            controls5.start('visible');
        }
    }, [controls5, inView5]);

    return (
        <div className="container mx-auto pt-12 px-4 xl:px-0">
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
                    <FaSquareFull size={48} className="rotate-45 text-red-500" aria-label="decorative square" />
                </motion.div>
                <motion.h2
                    ref={ref2}
                    initial="hidden"
                    animate={controls2}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        hidden: { opacity: 0, y: -50 }
                    }}
                    className="text-6xl font-bold text-gray-800"
                >
                    Contact
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
                    <FaSquareFull size={48} className="rotate-45 text-red-500" aria-label="decorative square" />
                </motion.div>
            </div>
            <motion.div
                ref={ref4}
                className="mt-8 flex flex-col md:flex-row items-center justify-between"
                initial="hidden"
                animate={controls4}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
                    hidden: { opacity: 0, y: 50 }
                }}
            >
                <h2 className="text-xl font-semibold text-gray-800">
                    Phone Number: <a href="tel:+9779742302747" className="text-blue-600">+977-9742302747</a>
                </h2>
                <h2 className="text-xl font-semibold text-gray-800">
                    Email: <a href="mailto:xyz@gmail.com" className="text-blue-600">xyz@gmail.com</a>
                </h2>
            </motion.div>
            <motion.p
                ref={ref5}
                className="py-2 text-gray-700 text-center"
                initial="hidden"
                animate={controls5}
                variants={{
                    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.6 } },
                    hidden: { opacity: 0 }
                }}
            >
                Copyright &copy; 2024 Naresh Rajbanshi
            </motion.p>
        </div>
    );
};

export default Contact;
