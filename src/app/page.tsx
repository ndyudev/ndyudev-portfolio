"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
// ... phần còn lại giữ nguyên

const SOCIALS = [
  { href: "https://facebook.com/User.ChauuNhatDuyy.X.DeveloperIT/", icon: "/facebook.svg", alt: "Facebook" },
  { href: "https://www.instagram.com/_nhyuh.ndyut_/", icon: "/instagram.svg", alt: "Instagram" },
  { href: "https://www.linkedin.com/in/chauu-nhat-duyy-intech/", icon: "/linkedin.svg", alt: "LinkedIn" },
  { href: "https://youtube.com/", icon: "/youtube.svg", alt: "YouTube" },
  { href: "https://tiktok.com/", icon: "/tiktok.svg", alt: "TikTok" },
  { href: "https://discord.com/", icon: "/discord.svg", alt: "Discord" },
  { href: "https://roblox.com/", icon: "/roblox.svg", alt: "Roblox" },
];

const TECHS = [
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "HTML5", icon: "/html5.svg" },
  { name: "CSS3", icon: "/css3.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "Express", icon: "/express.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc] dark:from-[#18181b] dark:to-[#23272f]">
      {/* Header Wave */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path fill="url(#header-gradient)" fillOpacity="0.5" d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,117.3C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          <defs>
            <linearGradient id="header-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60a5fa" />
              <stop offset="1" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Header & Avatar */}
      <header className="flex flex-col items-center justify-center pt-4 pb-8">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-transparent bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 p-1 shadow-2xl mb-4 hover:scale-105 transition-all duration-300"
        >
          <div className="rounded-full overflow-hidden w-full h-full bg-white dark:bg-[#23272f] flex items-center justify-center">
            <Image
              src="/avatar.png"
              alt="Avatar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mb-2 tracking-tight drop-shadow-lg">
          Chau Nhat Duy
        </h1>
        <div className="text-2xl md:text-3xl font-semibold text-blue-700 dark:text-blue-300 min-h-[40px] mb-2">
          <Typewriter
            words={["Full Stack Developer", "Content Creator", "Graphic Designer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1800}
          />
        </div>
      </header>

      {/* About Me */}
      <motion.section
        id="about"
        className="bg-white/70 dark:bg-[#23272f]/80 rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto mb-10 backdrop-blur-md border border-blue-100 dark:border-blue-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">About Me</h2>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg text-center">
          👋 I am a <b>Full Stack Developer</b> with a passion for creating beautiful and functional web applications.<br />
          I have experience in various technologies and frameworks, and I love to learn new things every day.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        id="tech"
        className="flex flex-col items-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {TECHS.map((tech) => (
            <div
              key={tech.name}
              className="bg-white dark:bg-[#23272f] p-4 rounded-full shadow-lg border-2 border-blue-100 dark:border-blue-900 hover:scale-110 hover:shadow-2xl transition-transform duration-200"
              title={tech.name}
            >
              <Image src={tech.icon} alt={tech.name} width={48} height={48} />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Connect With Me */}
      <motion.section
        id="connect"
        className="flex flex-col items-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Connect With Me</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {SOCIALS.map((s) => (
            <motion.a
              key={s.alt}
              href={s.href}
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.18, rotate: 8 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform bg-white dark:bg-[#23272f] p-4 rounded-full shadow-lg border-2 border-blue-100 dark:border-blue-900 hover:shadow-2xl hover:scale-110"
            >
              <Image src={s.icon} alt={s.alt} width={40} height={40} />
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Footer Wave */}
      <div className="w-full overflow-hidden mt-8">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 rotate-180">
          <path fill="url(#footer-gradient)" fillOpacity="0.5" d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,117.3C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          <defs>
            <linearGradient id="footer-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818cf8" />
              <stop offset="1" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Chau Nhat Duy (ndyudev). Designed by ndyudev. All rights reserved.
      </footer>
    </div>
  );
}