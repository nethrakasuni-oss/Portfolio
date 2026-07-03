import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionTitle title="Contact" subtitle="Let’s work together" />

      <div className="glass mx-auto max-w-3xl rounded-[2rem] p-8 text-center md:p-12">
        <h3 className="text-3xl font-bold">Interested in hiring me?</h3>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
          I’m looking for an internship opportunity where I can improve my
          frontend development skills and contribute to real projects.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your-email@example.com"
            className="rounded-full bg-white px-6 py-3 font-semibold text-[#2b0824] transition hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;