import { useEffect, useRef } from "react";
import { MotionConfig } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const marqueeItems = [
  "TypeScript",
  "FastAPI",
  "React",
  "Cloud systems",
  "API design",
  "PostgreSQL",
  "Human-first UX",
];

function AmbientGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (
      !glow ||
      (typeof window.matchMedia === "function" &&
        window.matchMedia("(pointer: coarse)").matches)
    ) {
      return;
    }

    const moveGlow = (event: PointerEvent) => {
      glow.style.setProperty("--pointer-x", `${event.clientX}px`);
      glow.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", moveGlow, { passive: true });
    return () => window.removeEventListener("pointermove", moveGlow);
  }, []);

  return <div ref={glowRef} className="ambient-glow" aria-hidden="true" />;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <AmbientGlow />
        <div className="noise" aria-hidden="true" />
        <Header />

        <main id="main-content">
          <About />

          <div className="marquee" aria-label="Core technologies and focus areas">
            <div className="marquee__track">
              {[0, 1].map((group) => (
                <div
                  className="marquee__group"
                  aria-hidden={group === 1}
                  key={group}
                >
                  {marqueeItems.map((item) => (
                    <span key={`${group}-${item}`}>
                      {item}
                      <i aria-hidden="true">✦</i>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <footer className="site-footer">
          <a className="footer-mark" href="#top" aria-label="Back to top">
            YR<span>.</span>
          </a>
          <p>
            Designed with curiosity. Built with care.
            <br />
            © {new Date().getFullYear()} Yashraj Rathore
          </p>
          <div className="footer-links" aria-label="Social links">
            <a href="mailto:rathore.yash6@yahoo.com" aria-label="Email Yashraj">
              <FiMail />
            </a>
            <a
              href="https://github.com/Yashraj-Rathore"
              target="_blank"
              rel="noreferrer"
              aria-label="Yashraj on GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://ca.linkedin.com/in/yashraj-rathore"
              target="_blank"
              rel="noreferrer"
              aria-label="Yashraj on LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href="#top" aria-label="Back to top">
              <FiArrowUpRight />
            </a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
