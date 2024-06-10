'use client';

import { skillsData } from "@/libs/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/libs/hooks";
import { animate, motion } from "framer-motion";

const fadeInAnimVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index:number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
};

export default function Skills() {

    const { ref } = useSectionInView("Skills", 0.4);


    return (
        <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li key={index} className="border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                            variants={fadeInAnimVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once:true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
