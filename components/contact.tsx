'use client';

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/libs/hooks";
import { motion } from "framer-motion"
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {

    const { ref } = useSectionInView("Contact", 0.6);

    return (
        <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 0.5,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>

            <p className="text-slate-700 -mt-5 dark:text-white/80">Please contact me directly through this form.</p>

            <form className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    console.log(data + " " + error);
                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success('Email sent successfully');
                }}>
                <input
                    type="email"
                    name="senderEmail"
                    required maxLength={500}
                    placeholder="Your Email"
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none" />

                <textarea
                    name="message"
                    required maxLength={5000}
                    placeholder="Your Message"
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none" />

                <SubmitBtn />
            </form>
        </motion.section>
    )
}
