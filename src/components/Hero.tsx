function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-24"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
            React • TypeScript • Tailwind Developer
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Hi, I’m <span className="gradient-text">Your Name</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            I’m an intern-level frontend developer focused on creating modern,
            responsive, and user-friendly websites using React, TypeScript, and
            Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#2b0824] transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="glass relative mx-auto w-full max-w-sm rounded-[2rem] p-6">
          <div className="card-gradient rounded-[1.5rem] p-8 text-center">
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-white/25 bg-black/20 text-6xl font-black backdrop-blur-xl">
              YN
            </div>

            <h2 className="mt-6 text-2xl font-bold">Frontend Developer</h2>

            <p className="mt-2 text-white/75">
              Passionate about UI, clean code, and user experience.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/15 p-3">
                <p className="text-xl font-bold">3+</p>
                <p className="text-xs text-white/70">Projects</p>
              </div>

              <div className="rounded-2xl bg-white/15 p-3">
                <p className="text-xl font-bold">8+</p>
                <p className="text-xs text-white/70">Skills</p>
              </div>

              <div className="rounded-2xl bg-white/15 p-3">
                <p className="text-xl font-bold">1</p>
                <p className="text-xs text-white/70">Internship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;