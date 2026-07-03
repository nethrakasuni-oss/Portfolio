import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="Projects" subtitle="Things I have built" />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass flex min-h-[330px] flex-col rounded-[2rem] p-6 transition hover:-translate-y-2"
          >
            <div className="mb-6 h-40 rounded-3xl bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)]" />

            <h3 className="text-xl font-bold">{project.title}</h3>

            <p className="mt-3 flex-1 text-sm leading-6 text-white/65">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={project.demo}
                className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold"
              >
                Live Demo
              </a>

              <a
                href={project.code}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold"
              >
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;