import SectionTitle from "./SectionTitle";
import { journey } from "../data/portfolioData";
import ScrollReveal from "../animation/ScrollReveal";

function Journey() {
  return (
    <section
      id="journey"
      className="relative mx-auto max-w-6xl px-5 py-24"
    >
    <ScrollReveal direction="up">
      <SectionTitle
        title="My Journey"
        subtitle="My growth and development path"
        />
    </ScrollReveal>

      <div className="relative mt-12">

        {/* Timeline Line */}
        <div className="absolute left-5 top-0 h-full w-px bg-white/20 md:left-1/2" />

        <div className="space-y-12">
          {journey.map((item, index) => (
            <ScrollReveal
            key={item.title}
            delay={index * 150}
            direction={index % 2 === 0 ? "up" : "right"}
          >
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >

              {/* Dot */}
              <div
                className="
                absolute left-5 top-6
                h-4 w-4 
                rounded-full 
                bg-white
                md:left-1/2
                md:-translate-x-1/2
                "
              />

              {/* Card */}
              <div className="glass ml-12 w-full rounded-3xl p-6 md:ml-0 md:w-[45%]">

                <span className="text-sm text-white/50">
                  {item.year}
                </span>

                <h3 className="mt-2 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.description}
                </p>

                <div className="mt-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs">
                  {item.type}
                </div>

              </div>

              </div>
              </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Journey;