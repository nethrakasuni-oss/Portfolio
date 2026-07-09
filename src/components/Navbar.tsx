import { navItems } from "../data/portfolioData";

function Navbar() {
  return (
    <header  className="fixed top-0 w-full z-50 glass">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-xl font-black tracking-wide">
          My<span className="text-[var(--primary)]">Portfolio</span>
        </a>

        <div className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/75 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-950/40 transition hover:scale-105"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

export default Navbar;