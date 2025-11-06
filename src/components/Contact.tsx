import Reveal from "./Reveal";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-16"> 
      <Reveal>
        <h2 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Contact
        </h2>
      </Reveal>

      <Reveal>
        <p className="mt-4 text-center text-slate-300">
          Feel free to reach out — I love collaborating & contributing to impactful products.
        </p>
      </Reveal>

      <div className="mt-8 flex items-center justify-center gap-4 flex-wrap px-4">
        <Reveal>
          <a
            href="mailto:yashraj@example.com"
            className="flex items-center gap-2 bg-teal-400 text-[#0b0f17] font-semibold px-4 py-2 rounded-lg hover:bg-teal-300"
          >
            <FaEnvelope /> Email
          </a>
        </Reveal>

        <Reveal>
          <a
            href="https://github.com/"
            className="flex items-center gap-2 text-white border border-white/10 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <FaGithub /> GitHub
          </a>
        </Reveal>

        <Reveal>
          <a
            href="https://linkedin.com"
            className="flex items-center gap-2 text-white border border-white/10 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
