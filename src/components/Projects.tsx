import { FiArrowUpRight, FiGithub, FiLock, FiPlay } from "react-icons/fi";
import Reveal from "./Reveal";

type Project = {
  number: string;
  title: string;
  kind: string;
  summary: string;
  detail: string;
  tech: string[];
  source?: string;
  demo?: string;
  visual: "payments" | "budget" | "leads" | "auction";
  featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "PaymentOps Orchestrator",
    kind: "Fintech systems platform",
    summary:
      "A production-minded payment operations simulator built for the messy realities behind moving money.",
    detail:
      "Idempotent payouts, an append-only ledger, approval workflows, merchant webhooks, reconciliation, observability, and a responsive operator dashboard.",
    tech: ["NestJS", "Nuxt", "SQL Server", "Redis", "AWS"],
    source: "https://github.com/Yashraj-Rathore/paymentops-orchestrator",
    visual: "payments",
    featured: true,
  },
  {
    number: "02",
    title: "Spending Analysis",
    kind: "Personal finance dashboard",
    summary:
      "A full-stack dashboard that turns raw spending into a clear picture of financial health.",
    detail:
      "Category breakdowns, income-versus-expense visualizations, trends, and actionable budgeting recommendations.",
    tech: ["Angular", "Django", "PostgreSQL", "Docker"],
    source: "https://github.com/Yashraj-Rathore/Spending-Analysis-Budget",
    visual: "budget",
  },
  {
    number: "03",
    title: "Lead Recovery",
    kind: "AI-assisted lead operations",
    summary:
      "A missed-call recovery platform that turns unanswered service calls into qualified, bookable leads.",
    detail:
      "Signed Twilio webhooks, deterministic SMS workflows, staff handoff, optional AI analysis, tenant isolation, and auditable operations.",
    tech: [".NET 10", "Next.js", "PostgreSQL", "Hangfire", "Twilio"],
    visual: "leads",
  },
  {
    number: "04",
    title: "Auction Commerce",
    kind: "Multi-tier e-commerce",
    summary:
      "An auction marketplace exploring real-time bidding through forward and Dutch auction models.",
    detail:
      "A Maven-based Java web application with user flows, auction logic, bidding history, and a Dockerized demo.",
    tech: ["Java", "Maven", "SQLite", "Docker"],
    source: "https://github.com/Yashraj-Rathore/EcommerceApp",
    demo: "https://www.youtube.com/watch?v=cfCOQieQubs",
    visual: "auction",
  },
];

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "payments") {
    return (
      <div className="project-visual payment-ui" aria-hidden="true">
        <div className="mock-window__bar">
          <span />
          <span />
          <span />
          <p>ops / overview</p>
        </div>
        <div className="payment-ui__grid">
          <div className="payment-ui__metric">
            <span>Volume today</span>
            <strong>$248,390</strong>
            <small>↗ 12.4%</small>
          </div>
          <div className="payment-ui__chart">
            {[42, 62, 48, 75, 58, 88, 71, 96].map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="payment-ui__list">
            {["Paid", "Processing", "Review"].map((label, index) => (
              <div key={label}>
                <span className={`payment-status status-${index}`} />
                <p>{label}</p>
                <strong>{["$12,480", "$8,210", "$4,600"][index]}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "budget") {
    return (
      <div className="project-visual budget-ui" aria-hidden="true">
        <div className="budget-ui__header">
          <span>Monthly overview</span>
          <strong>$4,280</strong>
        </div>
        <div className="budget-ui__ring">
          <div>
            <strong>68%</strong>
            <span>on track</span>
          </div>
        </div>
        <div className="budget-ui__legend">
          <span><i /> Home</span>
          <span><i /> Life</span>
          <span><i /> Future</span>
        </div>
      </div>
    );
  }

  if (type === "leads") {
    return (
      <div className="project-visual lead-ui" aria-hidden="true">
        <div className="lead-ui__phone">
          <span>Missed call</span>
          <strong>+1 · 416 · 555 · 0182</strong>
          <i>Recovery started</i>
        </div>
        <div className="lead-ui__thread">
          <p>Sorry we missed you. What can we help with?</p>
          <p>Kitchen pipe leak — need someone today.</p>
        </div>
        <div className="lead-ui__score">
          <span>Qualified lead</span>
          <strong>High intent</strong>
          <i>Ready to book</i>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual auction-ui" aria-hidden="true">
      <div className="auction-ui__tag">LIVE BID</div>
      <div className="auction-ui__object">
        <span>01</span>
        <span>02</span>
        <span>03</span>
      </div>
      <div className="auction-ui__price">
        <span>Current bid</span>
        <strong>$1,240</strong>
      </div>
      <div className="auction-ui__button">Place bid</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section projects">
      <div className="section-heading">
        <div className="section-kicker">
          <span>02</span>
          <p>Selected work</p>
        </div>
        <Reveal>
          <h2>
            Things I&apos;ve made
            <br />
            <em>and learned from.</em>
          </h2>
        </Reveal>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            className={project.featured ? "project-wrap project-wrap--featured" : "project-wrap"}
            delay={index * 0.04}
          >
            <article className={`project-card project-card--${project.visual}`}>
              {project.source ? (
                <a
                  className="project-card__visual-link"
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                >
                  <ProjectVisual type={project.visual} />
                </a>
              ) : (
                <div className="project-card__visual-link">
                  <ProjectVisual type={project.visual} />
                </div>
              )}

              <div className="project-card__content">
                <div className="project-card__meta">
                  <span>{project.number}</span>
                  <p>{project.kind}</p>
                </div>
                <h3>
                  {project.source ? (
                    <a href={project.source} target="_blank" rel="noreferrer">
                      {project.title}
                      <FiArrowUpRight />
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>
                <p className="project-card__summary">{project.summary}</p>
                <p className="project-card__detail">{project.detail}</p>
                <div className="tag-list" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.source ? (
                    <a href={project.source} target="_blank" rel="noreferrer">
                      <FiGithub /> Source
                    </a>
                  ) : (
                    <span className="project-card__private">
                      <FiLock /> Private product build
                    </span>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <FiPlay /> Watch demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="projects__more">
        <p>There&apos;s more where those came from.</p>
        <a
          className="button button--outline"
          href="https://github.com/Yashraj-Rathore?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Explore all repositories <FiArrowUpRight />
        </a>
      </Reveal>
    </section>
  );
}
