import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BigText from "../components/BigText";
import git from '../data/git.png';
import js from '../data/js.png';
import express from '../data/express.png';
import ts from '../data/ts.png';
import tailwind from '../data/tailwind.png';
import node from '../data/nodejs.png';
import mongo from '../data/mongo.png';
import nextjs from '../data/next.png';

const Tech: React.FC = () => {
    const techIcons = [
        { src: git, alt: "github icon", className: "h-24" },
        { src: tailwind, alt: "tailwindcss icon", className: "h-24" },
        { src: js, alt: "JavaScript icon", className: "h-24 scale-110" },
        { src: ts, alt: "TypeScript icon", className: "h-24" },
        { src: node, alt: "Node.js icon", className: "h-24 scale-125" },
        { src: express, alt: "Express.js icon", className: "h-24" },
        { src: mongo, alt: "MongoDB icon", className: "h-24 scale-150" },
        { src: nextjs, alt: "Next.js icon", className: "h-24" }
    ];

    const controlsTitle = useAnimation();
    const controlsCompanions = useAnimation();
    const techRefs = techIcons.map(() => useAnimation());
    const [refTitle, inViewTitle] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refCompanions, inViewCompanions] = useInView({ triggerOnce: true, threshold: 0.1 });
    const techRefsInView = techIcons.map(() => useInView({ triggerOnce: true, threshold: 0.1 }));

    useEffect(() => {
        if (inViewTitle) {
            controlsTitle.start('visible');
        }
    }, [controlsTitle, inViewTitle]);

    useEffect(() => {
        if (inViewCompanions) {
            controlsCompanions.start('visible');
        }
    }, [controlsCompanions, inViewCompanions]);

    techRefsInView.forEach((techRef, index) => {
        useEffect(() => {
            if (techRef.inView) {
                techRefs[index].start('visible');
            }
        }, [techRefs[index], techRef.inView]);
    });

    return (
        <div className="min-h-screen container m-auto px-4 xl:px-0 pt-24 pb-4">
            <section className="flex flex-col space-y-2 items-center justify-center">
                <section className="flex items-center gap-6">
                    <motion.div
                        ref={refTitle}
                        initial="hidden"
                        animate={controlsTitle}
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                            hidden: { opacity: 0, y: -50 }
                        }}
                    >
                        <BigText text="My" />
                    </motion.div>
                    <motion.h1
                        ref={refTitle}
                        initial="hidden"
                        animate={controlsTitle}
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
                            hidden: { opacity: 0, y: -50 }
                        }}
                        className="uppercase text-6xl md:text-7xl xl:text-8xl font-bold bg-slate-900 text-white py-3 px-2"
                    >
                        Tech
                    </motion.h1>
                </section>
                <motion.div
                    ref={refCompanions}
                    initial="hidden"
                    animate={controlsCompanions}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
                        hidden: { opacity: 0, y: -50 }
                    }}
                >
                    <BigText text="Companions" />
                </motion.div>
            </section>

            <div className="pt-20 md:pt-40 grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-8 md:gap-y-24">
                {techIcons.map((icon, index) => (
                    <motion.img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        className={icon.className}
                        initial="hidden"
                        animate={techRefs[index]}
                        variants={{
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.2, 0.8, 0.4, 1], delay: index * 0.1 } },
                            hidden: { opacity: 0, scale: 0.5 }
                        }}
                        ref={techRefsInView[index].ref}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tech;
