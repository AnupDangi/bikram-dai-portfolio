"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

type Experience = {
    period: string;
    role?: string;
    company?: string;
    description?: string;
    positions?: {
        role: string;
        company: string;
        description: string;
    }[];
};

const experiences: Experience[] = [
    {
        role: "Ph.D. Scholar in Civil Engineering",
        company: "Dr. K.N. Modi Institute of Engineering & Technology",
        period: "2023 - Present",
        description: "Deepening research in Sustainable Urban Futures: Design and Implementation of Green Infrastructure for Resilient and Upgrowing Cities."
    },
    {
        role: "Founder & CEO ",
        company: "PrimeFace Engineering Consultancy Pvt. Ltd.",
        period: "2017 - Present",
        description: "Serving residential, commercial, and religious construction clients across Dang, Nepal. We operate 3 branches and have successfully guided 991+ projects to completion."
    },
    {
        role: "Lecturer",
        company: "Rapti Engineering College,Ghorahi Dang: Pokhara University, Nepal ",
        period: "2024-present ",
        description: " Teaching undergraduate students on Construction Management."
    },
    {
        role: "Civil Engineering Consultant ",
        company: "Nepal Netra Jyoti Sangh (NNJS) Eye Health Programme,Rapti and Bahadurgunj",
        period: "2018-2025 ",
        description: "Design,Drawing,Estimation,Supervision and Quality Control of various projects of NNJS Eye Health Programme,Rapti and Bahadurgunj"
    },
    {
        role: "Content Creator & Life Coach",
        company: "YouTube / TikTok / Facebook",
        period: "2023 - Present",
        description: "Educating thousands on Vastu, Engineering, Home Design, and Personal Development."
    },
    {
        period: "2019 - 2022",
        positions: [
            {
                role: "Master's in Construction Technology",
                company: "Maharishi University of Information Technology,Lucknow,India",
                description: "Researched on Application of NBC Code on Tulsipur Municipality."
            },
            {
                role: "Civil Engineering Instructor",
                company: "Janakalyan Secondary School,Dudhras,Dang: CTEVT,Nepal",
                description: "Instructed Diploma in Civil Engineering students on various civil engineering subjects."
            }
        ]
    },

    {
        role: "Master's in Political Science",
        company: "Mahendra Multiple Campus,Ghorahi Dang: Tribhuvan University,Nepal",
        period: "2017 - 2019",
        description: "Built deep research in Politics,Governance,Policy and Power System."
    },
    {
        period: "2015 - 2017",
        positions: [
            {
                role: "Chief Officer",
                company: "Tulsipur Water Supply and Sanitation Office",
                description: "Served as Chief Officer at Tulsipur Water Supply and Sanitation Office."
            },
            {
                role: "Civil Coordinator & Instructor",
                company: "Dang Polytechnic Institute,Tulsipur Dang: CTEVT,Nepal",
                description: "Served as Civil Coordinator & Instructor at Dang Polytechnic Institute,Tulsipur Dang: CTEVT,Nepal"
            },
            {
                role: "Civil Coordinator",
                company: "Shree Tribhuvan Higher Secondary School,Luhaping,Salyan,Nepal",
                description: "Instructed Diploma in Civil Engineering students on various civil engineering subjects."
            }
        ]
    },
    {
        role: "Bachelor's in Civil Engineering",
        company: "Rapti Engineering College,Ghorahi Dang: Pokhara University, Nepal",
        period: "2011 - 2015",
        description: "Completed Bachelor's degree."
    }
];

export default function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <SectionWrapper id="experience" title="Academic & Professional Background">
            <div className="space-y-10 mt-6 relative" ref={containerRef}>
                {/* Vertical Timeline Background */}
                <div
                    className="hidden md:block absolute w-[2px] bg-white/10"
                    style={{ left: "calc(25% - 28px)", top: "12px", bottom: "0" }}
                />
                {/* Vertical Timeline Animated Foreground */}
                <motion.div
                    className="hidden md:block absolute w-[2px] bg-neon origin-top"
                    style={{ left: "calc(25% - 28px)", top: "12px", bottom: "0", scaleY: scrollYProgress }}
                />

                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-0">
                        <div className="md:grid md:grid-cols-4 gap-6 items-start">
                            <div className="md:col-span-1 text-neon font-mono text-sm mt-1 mb-2 md:mb-0">
                                {exp.period}
                            </div>
                            <div className="md:col-span-3 pb-8 border-b border-white/5 last:border-0 last:pb-0 relative">
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-[-39px] top-1.5 w-3 h-3 bg-neon rounded-full border-[3px] border-black z-10" />

                                {exp.positions ? (
                                    <div className="space-y-8">
                                        {exp.positions.map((pos, i) => (
                                            <div key={i} className="relative">
                                                <h3 className="text-xl font-bold text-white mb-1">{pos.role}</h3>
                                                <h4 className="text-md text-gray-400 font-medium mb-2">{pos.company}</h4>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {pos.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-md text-gray-400 font-medium mb-4">{exp.company}</h4>
                                        <p className="text-gray-300 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
