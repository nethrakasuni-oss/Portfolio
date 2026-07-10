import TextType from "./TextType";
import ScrollReveal from "../animation/ScrollReveal";
import BlurText from "./BlurText";

type SectionTitleProps = {
  title: string;
  subtitle: string;
};

function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">

      
        <BlurText
        text={title}
        animateBy="words"
        direction="top"
        delay={40}
        stepDuration={0.4}
        threshold={0.1}
        className="
          justify-center
          text-4xl
          font-black
          tracking-tight
          text-white
          md:text-5xl
        "
      />
      


      <ScrollReveal 
        direction="up"
        delay={200}
      >
        <TextType
          text={[
            subtitle,
            "Building modern digital experiences",
            "Creating clean user interfaces"
          ]}

          typingSpeed={70}
          deletingSpeed={35}
          pauseDuration={2500}
          showCursor={true}
          cursorCharacter="-"
          startOnVisible={true}
          className="
            mt-3
            text-sm
            text-white/60
            md:text-base
          "
        />
      </ScrollReveal>


    </div>
  );
}

export default SectionTitle;