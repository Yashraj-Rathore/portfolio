import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "MUI"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "SQLModel"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Supabase"],
  },
  {
    title: "Infrastructure",
    items: ["GCP", "Cloud Run", "Firebase Auth"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 md:py-16">
      <Reveal>
        <h2 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Skills
        </h2>
      </Reveal>

      <div className="max-w-5xl mx-auto mt-10 grid gap-6 md:grid-cols-2 px-4">
        {skillGroups.map((g) => (
          <Reveal key={g.title}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-white font-semibold">{g.title}</h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200"
                  >
                    {item}
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
