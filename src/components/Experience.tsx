import Reveal from "./Reveal";

const jobs = [
  {
    role: "Full-Stack Developer",
    company: "Vosyn",
    period: "2024 – Present",
    bullets: [
      "Built developer portal with org/project management + API key handling",
      "Implemented FastAPI backend + SQLModel schema + RBAC",
      "Developed analytics dashboards for latency, usage & errors",
      "Integrated GCP Cloud Run + Supabase + Firebase auth",
    ],
    tech: ["FastAPI", "Next.js", "GCP", "PostgreSQL", "Firebase"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-16">
      <Reveal>
        <h2 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Experience
        </h2>
      </Reveal>

      <div className="max-w-4xl mx-auto mt-12 space-y-8 px-4">
        {jobs.map((job) => (
          <Reveal key={job.company}>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">
                  {job.role} — {job.company}
                </h3>
                <p className="text-sm text-slate-400">{job.period}</p>
              </div>

              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {job.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
