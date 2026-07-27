import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Product surfaces",
    description: "Interfaces that make powerful systems feel calm.",
    items: ["React", "Next.js", "Nuxt", "Angular", "TypeScript", "Tailwind", "MUI"],
  },
  {
    number: "02",
    title: "Services & data",
    description: "APIs, models, and workflows built for real use.",
    items: ["FastAPI", "NestJS", "Node.js", "Django", "PostgreSQL", "SQL Server", "Redis"],
  },
  {
    number: "03",
    title: "Cloud & delivery",
    description: "The path from a local idea to a dependable product.",
    items: ["GCP", "AWS", "Cloud Run", "Docker", "Terraform", "GitHub Actions", "OpenTelemetry"],
  },
];

export default function Skills() {
  return (
    <section id="toolbox" className="section skills">
      <div className="section-kicker">
        <span>04</span>
        <p>Toolbox</p>
      </div>

      <div className="skills__intro">
        <Reveal>
          <h2>
            Broad enough to see the system.
            <br />
            <em>Focused enough to ship it.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p>
            Tools change. The habit stays the same: understand the problem,
            choose deliberately, and leave the codebase clearer than I found it.
          </p>
        </Reveal>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <article className="skill-card">
              <span className="skill-card__number">{group.number}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-card__items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
