export default function Header() {
  const nav = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0b0f17]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
        
        <a
          href="#about"
          className="text-xl font-semibold tracking-tight bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent"
        >
          YR
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-slate-300 hover:text-white transition pb-1
              relative after:absolute after:left-0 after:-bottom-0.5 after:w-0
              after:h-[2px] after:bg-teal-300 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          className="rounded-md px-3 py-2 text-sm font-medium bg-white/10 text-white border border-white/10 hover:bg-white/20"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
