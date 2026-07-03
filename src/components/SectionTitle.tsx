type SectionTitleProps = {
  title: string;
  subtitle: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
        {subtitle}
      </p>
      <h2 className="text-4xl font-black md:text-5xl">{title}</h2>
    </div>
  );
}

export default SectionTitle;