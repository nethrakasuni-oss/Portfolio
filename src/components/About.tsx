import SectionTitle from "./SectionTitle";
import InfoCard from "./InfoCard";

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="About Me" subtitle="Who I am" />

      <div className="glass rounded-[2rem] p-8 md:p-10">
        <p className="text-lg leading-8 text-white/75">
          I am a motivated frontend developer currently improving my skills in
          React, TypeScript, and modern UI development. I enjoy building clean,
          responsive websites and learning how to create professional user
          interfaces.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <InfoCard title="Location" value="Your City, Country" />
          <InfoCard title="Education" value="Your Degree / Course" />
          <InfoCard title="Goal" value="Frontend Internship" />
        </div>
      </div>
    </section>
  );
}

export default About;