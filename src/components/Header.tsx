import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const nav = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Journey" },
  { id: "toolbox", label: "Toolbox" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Yashraj Rathore — home">
        YR<span>.</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item, index) => (
          <a key={item.id} href={`#${item.id}`}>
            <span>0{index + 1}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">
        Let&apos;s talk <FiArrowUpRight />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-nav__links">
              {nav.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                <span>05</span>
                Say hello
              </a>
            </div>
            <p>Toronto, Canada · Available worldwide</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
