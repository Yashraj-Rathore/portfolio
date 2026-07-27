import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";

const impact = [
  { value: "35+", label: "production APIs shipped" },
  { value: "100+", label: "AI tasks evaluated" },
  { value: "15%", label: "deployment performance gain" },
];

const milestones = [
  {
    period: "Mar 2025 — Present",
    chapter: "Leading & shipping",
    role: "Full-Stack Developer · Deputy Team Lead",
    company: "Vosyn",
    location: "Toronto, Canada",
    summary:
      "Helping build Vosyn Connect, a multilingual AI developer platform, while turning product requirements into secure APIs and clear user workflows.",
    highlights: [
      "Coordinate sprint planning, onboarding, code reviews, and technical documentation across a cross-functional team.",
      "Architected multi-tenant FastAPI and PostgreSQL services for organizations, projects, RBAC, API keys, quotas, analytics, and usage tracking.",
      "Built 35+ REST and proxy endpoints connecting external developers to internal ML services through validated, JWT-secured flows.",
      "Improved Cloud Run deployment performance by 15% through container tuning and automated CI/CD.",
    ],
    focus: ["FastAPI", "PostgreSQL", "Next.js", "GCP", "Technical leadership"],
    href: "https://vosyn.ai",
  },
  {
    period: "Oct 2024 — May 2025",
    chapter: "Evaluating intelligence",
    role: "AI Trainer",
    company: "Outlier AI",
    location: "Remote",
    summary:
      "Worked at the boundary between software engineering and model behaviour, finding the edge cases that separate plausible answers from reliable ones.",
    highlights: [
      "Created and evaluated 100+ Java, Python, and C++ programming tasks for correctness, efficiency, reasoning, and edge-case handling.",
      "Wrote detailed scoring rationales, reproduced defects, and recommended fixes to improve training-data quality.",
      "Designed adversarial OCR, chart, and diagram evaluations and documented recurring model failure patterns.",
    ],
    focus: ["LLM evaluation", "Python", "Java", "C++", "Prompt engineering"],
    href: "https://outlier.ai",
  },
  {
    period: "Jun 2024",
    chapter: "The foundation",
    role: "B.Eng. (Honours) · Software Engineering",
    company: "York University · Lassonde",
    location: "Toronto, Canada",
    summary:
      "A rigorous engineering foundation that taught me to look beyond code—to architecture, trade-offs, testing, communication, and the people a system serves.",
    highlights: [
      "Studied data structures and algorithms, databases, software architecture, web development, testing, and cloud computing.",
      "Turned theory into team projects spanning backend systems, mobile applications, and full-stack product development.",
    ],
    focus: ["Algorithms", "Architecture", "Databases", "Testing", "Cloud"],
    href: "https://lassonde.yorku.ca/academics/software-engineering",
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

      <Reveal className="journey-overview">
        <p className="journey-overview__story">
          From engineering fundamentals to evaluating AI and now leading
          platform delivery, each chapter sharpened the same instinct:
          <em> make complex systems dependable and understandable.</em>
        </p>
        <div className="journey-stats" aria-label="Career highlights">
          {impact.map((item) => (
            <div className="journey-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="timeline">
        {milestones.map((job, index) => (
          <Reveal key={job.company} delay={index * 0.08}>
            <article className="timeline-item">
              <div className="timeline-item__period">
                <span>{job.period}</span>
                <p>{job.location}</p>
                <small>{job.chapter}</small>
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
                <div
                  className="timeline-item__tags"
                  aria-label={`${job.company} focus areas`}
                >
                  {job.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
