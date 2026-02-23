import { motion } from "framer-motion";
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-transparent text-foreground z-10 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto pt-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 text-left">

        {/* Left: Large Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 rounded-full bg-neon/20 blur-3xl animate-pulse" />
            <img
              src="/bikrambabu.jpeg"
              alt="Er. Bikram Babu KC"
              className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight"
          >
            Er. Bikram Babu KC
          </motion.h1>

          {/* Subtitle / Title line */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-6"
          >
            Civil Engineer · Valuator · <span className="text-white font-bold border-b-2 border-neon pb-1">Vastu Shashtri</span> · Life Coach
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-lg sm:text-xl text-gray-400 font-light max-w-3xl mb-12 leading-relaxed italic"
          >
            "I don't just build buildings — <span className="text-white border-b-2 border-neon pb-1 font-medium not-italic">I build lives, harmony, and legacies.</span>"
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <SocialIcon href="https://www.youtube.com/@coachbikrambabu" icon={<Youtube className="w-5 h-5" />} />
            <SocialIcon href="https://www.facebook.com/bikrambabu.kc" icon={<Facebook className="w-5 h-5" />} />
            <SocialIcon href="https://www.tiktok.com/@vastushastribikrambabukc" icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.95-1.57 5.61-1.35 2.15-3.66 3.65-6.2 3.86-2.5.21-5.11-.31-7.14-1.87-2-1.53-3.23-3.83-3.41-6.32-.19-2.61.64-5.32 2.37-7.24 1.75-1.92 4.31-2.93 6.94-2.8V10.6c-2.02.04-3.95.88-5.32 2.31-1.39 1.48-2.14 3.51-1.98 5.54.12 1.96 1.16 3.82 2.76 4.96 1.63 1.14 3.67 1.46 5.56 1.05 1.55-.38 2.92-1.37 3.82-2.67 1.02-1.54 1.49-3.43 1.43-5.31V.02z" /></svg>
            } />
            <SocialIcon href="mailto:bikram.babu11@gmail.com" icon={<Mail className="w-5 h-5" />} />
            <SocialIcon href="tel:+9779857823863" icon={<Phone className="w-5 h-5" />} />
            <SocialIcon href="https://www.google.com/maps/dir/?api=1&destination=28.132538310113453,82.29853267643534" icon={<MapPin className="w-5 h-5" />} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-900/80 flex items-center justify-center text-gray-400 hover:bg-neon hover:text-black transition-colors duration-300"
  >
    {icon}
  </a>
);

export default HeroSection;
