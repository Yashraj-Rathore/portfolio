import Reveal from "./Reveal";

const projects = [
  {
    title: "Vosyn Connect – Developer Platform",
    blurb:
      "Full-stack API portal enabling key mgmt, analytics, org structure & localization workflows. Supports JWT auth + RBAC.",
    tech: ["Next.js", "FastAPI", "GCP", "Firebase", "SQLModel"],
    live: "#",
    repo: "#",
    image: "/images/connect.png",
  },
  {
    title: "API Explorer",
    blurb:
      "Live API testing interface w/ secured proxy + generated examples for Python/TS + upload pipeline.",
    tech: ["React", "FastAPI", "PostgreSQL", "MUI"],
    live: "#",
    repo: "#",
    image: "/images/explorer.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:py-16">
      <Reveal>
        <h2 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Projects
        </h2>
      </Reveal>

      <div className="max-w-6xl mx-auto mt-12 grid gap-8 md:grid-cols-2 px-4">
        {projects.map((p) => (
          <Reveal key={p.title}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-1 transition">
              {p.image && (
                <img
                  src={p.image}
                  className="rounded-xl mb-4 h-40 w-full object-cover"
                />
              )}

              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{p.blurb}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    className="bg-teal-400 text-[#0b0f17] font-semibold px-3 py-2 rounded-lg hover:bg-teal-300"
                  >
                    Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    className="border border-white/10 bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
