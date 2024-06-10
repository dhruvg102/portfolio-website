'use client';
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/libs/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";



export default function Intro() {

    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const {ref} =  useSectionInView("Home", 0.5);

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            {/* IMAGE */}
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="https://media.licdn.com/dms/image/C4D03AQFWdgzriQTMxw/profile-displayphoto-shrink_400_400/0/1642251802027?e=1723075200&v=beta&t=WBdhWCAA8r99_08zttxB_1Bd5X2GcJGP4X9ZAfCBJpE"
                            // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                            alt="DHRUV IMAGE"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Dhruv.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">4 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js).</span>
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4
            text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >

                <Link href="#contact" className="group bg-slate-900 text-white px-7 py-3 flex
                items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                hover:bg-slate-950 active:scale-105 transition">
                    Contact Me Here <BsArrowRight className="opacity-75 group-hover:translate-x-1 transition" 
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}/>
                </Link>
                <a className="bg-white text-slate-700 p-4 flex items-center
                gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-slate-950 active:scale-105 transition
                cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 " href="https://www.linkedin.com/in/dhruv-gupta-89776b194/" target="_blank">
                    <BsLinkedin />
                </a>
                <a className="bg-white text-slate-700 text-[1.35rem] p-4 flex items-center
                gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-slate-950 active:scale-95 transition
                cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 " href="https://github.com/dhruvg102" target="_blank">
                    <FaGithubSquare />
                </a>

            </motion.div>

        </section>
    )
}
