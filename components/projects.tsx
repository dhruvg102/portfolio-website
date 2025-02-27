'use client';

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/libs/data";
import Project from "./project";
import { useSectionInView } from "@/libs/hooks";



export default function Projects() {

    const {ref} =  useSectionInView("Projects", 0.6);
    

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}
