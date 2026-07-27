import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";

const lineTransition = {
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function About() {
  return (
    <>
      <section id="top" className="hero">
        <div className="hero__aurora" aria-hidden="true" />

        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, ...lineTransition }}
        >
          <span className="status-dot" />
          Full-stack engineer · Toronto, Canada
        </motion.div>

        <div className="hero__grid">
          <div className="hero__copy">
            <h1>
              <motion.span
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, ...lineTransition }}
              >
                Complex systems,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, ...lineTransition }}
              >
                made <em>human.</em>
              </motion.span>
            </h1>

            <motion.div
              className="hero__intro"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, ...lineTransition }}
            >
              <p>
                I&apos;m Yashraj, a software engineer who turns ambitious ideas
                into thoughtful products—scalable underneath, effortless on
                the surface.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#work">
                  See my work <FiArrowDown />
                </a>
                <a
                  className="button button--outline"
                  href="/Yash_Rathore_General_Software_Engineer_Resume.pdf"
                  download="Yash_Rathore_General_Software_Engineer_Resume.pdf"
                >
                  Download résumé <FiDownload />
                </a>
                <a
                  className="text-link"
                  href="https://github.com/Yashraj-Rathore"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub /> GitHub <FiArrowUpRight />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-object"
            initial={{ opacity: 0, scale: 0.82, rotate: 8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Portrait of Yashraj Rathore"
          >
            <div className="hero-object__orbit hero-object__orbit--one" />
            <div className="hero-object__orbit hero-object__orbit--two" />
            <div className="hero-object__card">
              <img
                src="https://avatars.githubusercontent.com/u/46467096?v=4"
                alt="Yashraj Rathore"
              />
              <div className="hero-object__caption">
                <span>Currently</span>
                <strong>Building developer platforms</strong>
              </div>
            </div>
            <div className="floating-note floating-note--top">
              <span>01</span> Engineer
            </div>
            <div className="floating-note floating-note--bottom">
              Code <span>+</span> empathy
            </div>
          </motion.div>
        </div>

        <motion.a
          className="scroll-note"
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span />
          Scroll to get to know me
        </motion.a>
      </section>

      <section id="about" className="section about">
        <div className="section-kicker">
          <span>01</span>
          <p>Behind the build</p>
        </div>

        <div className="about__grid">
          <Reveal>
            <p className="about__statement">
              I care about the moment a technically hard thing starts to feel
              <em> obvious</em> to the person using it.
            </p>
          </Reveal>

          <div className="about__detail">
            <Reveal delay={0.08}>
              <p>
                My work lives between backend architecture and product
                experience. I enjoy untangling API workflows, data models, and
                cloud infrastructure—then shaping an interface that makes all
                that complexity disappear.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p>
                Away from the ticket queue, I&apos;m usually exploring a new
                framework, turning guitar tabs into software, or asking
                “there&apos;s got to be a cleaner way to do this.”
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="about__facts">
                <div>
                  <span>Education</span>
                  <strong>B.Eng. Software Engineering</strong>
                  <p>York University · Lassonde</p>
                </div>
                <div>
                  <span>Sweet spot</span>
                  <strong>0 → 1 product engineering</strong>
                  <p>APIs · platforms · polished UI</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
