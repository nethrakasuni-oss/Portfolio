import SectionTitle from "./SectionTitle";
import ScrollReveal from "../animation/ScrollReveal";

function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-5 py-24"
    >

      <ScrollReveal>
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />
      </ScrollReveal>


      <ScrollReveal>

        <article
          className="
          glass
          rounded-[2rem]
          p-8
          transition
          hover:-translate-y-2
          "
        >

          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

            <div>

              <h3 className="text-2xl font-bold">
                Software Engineering Intern
              </h3>

              <p className="mt-2 text-lg font-semibold text-[var(--primary)]">
                ZeroCode Software (Pvt) Ltd
              </p>

            </div>


            <span
              className="
              w-fit
              rounded-full
              bg-white/10
              px-4
              py-2
              text-sm
              text-white/70
              "
            >
              2026 - Present
            </span>

          </div>


          <p className="mt-6 leading-7 text-white/70">
            Currently working on backend development using Spring Boot,
            building RESTful APIs, implementing application logic, and
            improving my understanding of scalable software development
            practices.
          </p>


          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "Java",
              "Spring Boot",
              "REST APIs",
              "MySQL",
              "Backend Development",
              "Git"
            ].map((tech)=>(

              <span
                key={tech}
                className="
                rounded-full
                bg-white/10
                px-4
                py-2
                text-sm
                "
              >
                {tech}
              </span>

            ))}

          </div>


        </article>

      </ScrollReveal>

    </section>
  );
}

export default Experience;