import SectionTitle from "./SectionTitle";
import { skillCategories } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="Skills" subtitle="Technologies I use" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/15"
          >
            <h3 className="mb-4 text-center text-xl font-bold text-white">
              {category.title}
            </h3>

            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl bg-white/10 px-4 py-3 text-center font-semibold text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;