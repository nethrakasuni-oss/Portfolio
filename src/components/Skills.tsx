import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="Skills" subtitle="Technologies I use" />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="glass rounded-2xl p-5 text-center font-semibold transition hover:-translate-y-1 hover:bg-white/15"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;