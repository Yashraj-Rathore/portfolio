import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";

const roles = [
  {
    period: "2025 — Now",
    role: "Full-Stack Developer · Backend Lead",
    company: "Vosyn",
    location: "Toronto, Canada",
    summary:
      "Building Vosyn Connect, a multilingual developer platform that turns complex media localization workflows into secure, approachable APIs.",
    highlights: [
      "Architected multi-tenant FastAPI services for projects, analytics, roles, and API-key authorization.",
      "Built 35+ REST and proxy endpoints connecting product workflows to internal ML services.",
      "Shaped Next.js interfaces for project setup, analytics, API exploration, and documentation.",
    ],
    href: "https://vosyn.ai",
  },
  {
    period: "2024 — 2025",
    role: "AI Trainer",
    company: "Outlier AI",
    location: "Remote",
    summary:
      "Created and evaluated programming and visual-reasoning tasks used to sharpen model performance and reveal difficult edge cases.",
    highlights: [
      "Designed programming and algorithmic tasks across Java, Python, and C++.",
      "Built adversarial variations for OCR, chart, diagram, and code-reasoning scenarios.",
      "Reviewed model output with an engineer's eye for correctness, clarity, and failure modes.",
    ],
    href: "https://outlier.ai",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-heading section-heading--split">
        <div className="section-kicker">
          <span>03</span>
          <p>The journey</p>
        </div>
        <Reveal>
          <h2>
            Where craft met
            <br />
            <em>real-world scale.</em>
          </h2>
        </Reveal>
      </div>

      <div className="timeline">
        {roles.map((job, index) => (
          <Reveal key={job.company} delay={index * 0.08}>
            <article className="timeline-item">
              <div className="timeline-item__period">
                <span>{job.period}</span>
                <p>{job.location}</p>
              </div>
              <div className="timeline-item__content">
                <div className="timeline-item__title">
                  <h3>{job.role}</h3>
                  <a href={job.href} target="_blank" rel="noreferrer">
                    {job.company} <FiArrowUpRight />
                  </a>
                </div>
                <p className="timeline-item__summary">{job.summary}</p>
                <ul>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
