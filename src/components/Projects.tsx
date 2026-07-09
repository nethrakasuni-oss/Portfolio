import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="Projects" subtitle="What i build" />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass flex min-h-[360px] flex-col rounded-[2rem] p-6 transition hover:-translate-y-2"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-xl font-bold">{project.title}</h3>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">
                {project.status}
              </span>
            </div>

            <p className="flex-1 text-sm leading-6 text-white/65">
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

            <div className="mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold"
              >
                GitHub Repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;