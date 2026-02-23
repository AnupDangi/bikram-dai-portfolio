import SectionWrapper from "./SectionWrapper";

const experiences = [
    {
        role: "Ph.D. Scholar in Civil Engineering",
        company: "Dr. K.N. Modi Institute of Engineering & Technology",
        period: "2024 - Present",
        description: "Deepening research at the intersection of traditional Vastu science and modern structural principles."
    },
    {
        role: "Content Creator & Life Coach",
        company: "YouTube / TikTok / Facebook",
        period: "2020 - Present",
        description: "Educating thousands on Vastu, engineering, home design, and personal development."
    },
    {
        role: "Master's in Political Science",
        company: "Ghorahi, Dang, Nepal",
        period: "2017 - 2019",
        description: "Completed Master's degree."
    },
    {
        role: "Founder & CEO",
        company: "PrimeFace Engineering Consultancy Pvt. Ltd.",
        period: "2017 - Present",
        description: "Serving residential, commercial, and religious construction clients across Dang, Nepal. We operate 3 branches and have successfully guided 991+ projects to completion."
    },
    {
        role: "Professional Civil Engineer",
        company: "Dang, Nepal",
        period: "2014 - Present",
        description: "Began professional career offering architectural drafting, structural analysis, and property valuation. Registered with Nepal Engineering Council."
    }
];

export default function ExperienceSection() {
    return (
        <SectionWrapper id="experience" title="Academic & Professional Background">
            <div className="space-y-10 mt-6">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-0">
                        <div className="md:grid md:grid-cols-4 gap-6 items-start">
                            <div className="md:col-span-1 text-neon font-mono text-sm mt-1 mb-2 md:mb-0">
                                {exp.period}
                            </div>
                            <div className="md:col-span-3 pb-8 border-b border-white/5 last:border-0 last:pb-0 relative">
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-[-39px] top-1.5 w-3 h-3 bg-neon rounded-full border-[3px] border-black" />

                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <h4 className="text-md text-gray-400 font-medium mb-4">{exp.company}</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
