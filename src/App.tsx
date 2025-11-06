import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200">
      <Header />
    <div className="pointer-events-none fixed inset-0 -z-30">
  <svg
    className="h-full w-full opacity-[0.15]"
    viewBox="0 0 800 800"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 0 400 Q 200 380 400 400 T 800 400"
      stroke="rgba(0,255,200,0.25)"
      strokeWidth="1"
      fill="none"
    >
      <animate
        attributeName="d"
        dur="9s"
        repeatCount="indefinite"
        values="
          M 0 400 Q 200 380 400 400 T 800 400;
          M 0 400 Q 200 420 400 380 T 800 410;
          M 0 400 Q 200 380 400 400 T 800 400
        "
      />
    </path>
  </svg>
</div>




      <main>
        <About />
        <div className="w-full h-24 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent blur-xl" />

        <Projects />
        <div className="w-full h-24 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent blur-xl" />

        <Experience />
        <div className="w-full h-24 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent blur-xl" />

        <Skills />
        <div className="w-full h-24 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent blur-xl" />

        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Yashraj Rathore · Built with React & Tailwind
      </footer>
    </div>
  );
};

export default App;
