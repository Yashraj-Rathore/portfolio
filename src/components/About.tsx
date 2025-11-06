import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="relative py-28 text-center">
      {/*  Floating gradient orb */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 h-[600px] w-[700px]
          bg-gradient-to-br from-teal-500/20 via-cyan-400/20 to-blue-500/20
          blur-3xl opacity-70 rounded-full" />
      </div>

      {/*  Animated wavy background */}
      <div className="absolute inset-0 -z-20 opacity-[0.35]">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 200 C 200 250 400 150 600 200 C 750 240 800 180 800 180"
            fill="none"
            stroke="rgba(94,234,212,0.25)"
            strokeWidth="2"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M 0 200 C 200 250 400 150 600 200 C 750 240 800 180 800 180;
              M 0 180 C 220 130 380 280 610 220 C 740 200 800 260 800 260;
              M 0 200 C 200 250 400 150 600 200 C 750 240 800 180 800 180
              "
            />
          </path>
        </svg>
      </div>

      <Parallax>
        <Reveal>
          <p className="text-sm text-teal-300/80 tracking-wide uppercase">
            Full-Stack Developer
          </p>

          <h1 className="mt-3 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Yashraj Rathore
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            I specialize in building modern cloud-native platforms using Next.js,
            FastAPI, and GCP — crafting beautiful UX backed by scalable systems.
          </p>
        </Reveal>
      </Parallax>

      <Parallax>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://github.com"
            className="flex items-center gap-2 text-white border border-white/10 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="flex items-center gap-2 text-white border border-white/10 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 bg-teal-400 text-[#0b0f17] font-semibold px-4 py-2 rounded-lg hover:bg-teal-300"
          >
            <FaFileAlt /> Resume
          </a>
        </div>
      </Parallax>
    </section>
  );
}
