import SectionWrapper from "./SectionWrapper";
import { Mail, Globe } from "lucide-react";

export default function AboutSection() {
    return (
        <SectionWrapper id="about" title="About Me">
            <div className="w-full space-y-8">
                <div className="space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I am a multi-disciplinary civil engineering professional from Dang, Nepal. With over a decade of hands-on expertise, I uniquely bridge the ancient science of Vastu Shastra with modern structural engineering — a rare combination that has made me one of Nepal's most sought-after consultants.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I founded <strong className="text-white">PrimeFace Engineering Consultancy Pvt. Ltd.</strong> in 2015 with a mission to bring harmony, precision, and cultural wisdom together under one roof. Beyond engineering, I actively serve as a life coach, educating thousands on YouTube and TikTok to empower them to make smarter decisions about their homes and lives.
                    </p>
                </div>

                {/* Contact & Links */}
                <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center justify-center pt-8 border-t border-white/10">
                    <a href="mailto:bikram.babu11@gmail.com" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-neon/30 hover:border-neon transition-all duration-300 rounded-full px-6 py-4 sm:px-8 sm:py-5 group shadow-lg shadow-black/50">
                        <div className="bg-neon text-black p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <span className="text-lg sm:text-2xl font-medium text-white group-hover:text-neon transition-colors">bikram.babu11@gmail.com</span>
                    </a>

                    <a href="https://theprimeface.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon/50 transition-all duration-300 rounded-full px-6 py-4 sm:px-8 sm:py-4 group shadow-lg shadow-black/50">
                        <div className="bg-white/10 text-white p-3 rounded-full group-hover:bg-neon group-hover:text-black transition-colors duration-300">
                            <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base sm:text-xl font-medium text-white group-hover:text-neon transition-colors">theprimeface.com</span>
                            <span className="text-xs sm:text-sm text-gray-400">Construction & Vastu Contact</span>
                        </div>
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}
