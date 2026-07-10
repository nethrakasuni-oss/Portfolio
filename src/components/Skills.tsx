import SectionTitle from "./SectionTitle";
import { skillCategories } from "../data/portfolioData";
import ScrollReveal from "../animation/ScrollReveal"; 
function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24">
      
      <ScrollReveal direction="up">
        <SectionTitle 
          title="Skills" 
          subtitle="Technologies I use" 
        />
      </ScrollReveal>


      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => (
          <ScrollReveal
            key={category.title}
            delay={index * 150}
            direction={index % 2 === 0 ? "up" : "right"}
          >
            <div
              className="
                glass rounded-2xl p-6 
                transition 
                hover:-translate-y-1 
                hover:bg-white/15
              "
            >
              <h3 className="mb-4 text-center text-xl font-bold text-white">
                {category.title}
              </h3>


              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <ScrollReveal
                    key={skill}
                    delay={index * 150 + skillIndex * 80}
                    direction="zoom"
                  >
                    <div
                      className="
                        rounded-xl 
                        bg-white/10 
                        px-4 py-3 
                        text-center 
                        font-semibold 
                        text-white
                        transition
                        hover:scale-105
                        hover:bg-white/20
                      "
                    >
                      {skill}
                    </div>
                  </ScrollReveal>
                ))}
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}

export default Skills;