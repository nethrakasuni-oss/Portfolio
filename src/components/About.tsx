import SectionTitle from "./SectionTitle";
import InfoCard from "./InfoCard";

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="About Me" subtitle="Who I am" />

      <div className="glass rounded-[2rem] p-8 md:p-10">
        <p className="text-lg leading-8 text-white/75">
          I am an undergraduate student pursuing a degree in Data Science at the Sri Lanka Institute of Information Technology (SLIIT). 
          I am currently undertaking an internship as a Backend Developer, through which I have developed a solid foundation in building scalable systems
          and working with data-driven applications.
          This experience, combined with my academic background in data science, has strengthened my interest in the intersection of software engineering and artificial intelligence. 
          I am seeking an internship opportunity focused on artificial intelligence, where I can further develop my expertise in machine learning and intelligent system design while
          contributing meaningfully to impactful, real-world projects. 
          I am committed to continuous learning and am eager to apply my technical skills in a professional environment that values innovation and analytical problem-solving.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <InfoCard title="Location" value="Gampaha, Sri Lanka" />
          <InfoCard title="Undergraduate" value="Data Science / B.Sc.Information Technology" />
          <InfoCard title="Goal" value="Data Scientist ,AI Engineer and Full-Stack Developer" />
        </div>
      </div>
    </section>
  );
}

export default About;