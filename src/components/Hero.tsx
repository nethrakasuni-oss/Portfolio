import { motion } from "framer-motion";
import { useEffect } from "react";
import ScrollReveal from "../animation/ScrollReveal";
import useMouseParallax from "../hooks/useMouseParallax";
import AnimatedText from "../animation/AnimatedText";
import BlurText from "./BlurText";
import TechStack from "./TechStack";
import StatusCard from "./StatusCard";


function Hero() {

  const { x, y, move } = useMouseParallax();


  useEffect(() => {

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, [move]);


  return (

    <section
 id="home"
 className="
 relative
 mx-auto
 flex
 min-h-[850px]
 max-w-6xl
 items-center
 px-5
 pt-20
 "
>

      <div className="grid items-center gap-10 md:grid-cols-2">


        {/* LEFT CONTENT */}

        <div>


          <ScrollReveal>

            <BlurText
              text="Full Stack Developer"
              animateBy="letters"
              delay={100}
              direction="top"
              className="
                text-6xl
                font-black
                text-white
                md:text-4xl"
/>

          </ScrollReveal>



          <ScrollReveal delay={0.15}>
  <AnimatedText>

    <div className="
    text-5xl 
    font-black 
    leading-tight 
    md:text-7xl
    ">

      Hi, I'm{" "}

      <span className="animate-gradient-text">
        Nethra Weerasingha
      </span>

    </div>
  </AnimatedText>
</ScrollReveal>




          <ScrollReveal delay={0.2}>

            <p
              className="
              mt-6 
              max-w-xl 
              text-lg 
              leading-8 
              text-white/70
              "
            >

              Data Science undergraduate at SLIIT with backend development
              experience, seeking an AI-focused internship to apply my skills
              in machine learning and intelligent system design.

            </p>

          </ScrollReveal>





          <ScrollReveal delay={0.35}>

            <div
className="
mt-6
grid
gap-5
md:grid-cols-2
"
>



              <a
                href="#projects"
                className="
                rounded-full
                bg-white
                px-6
                py-3
                font-semibold
                text-[#2b0824]
                transition
                hover:scale-105
                "
              >
                View Projects
              </a>



              <a
                href="#journey"
                className="
                rounded-full
                border
                border-white/20
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-white/10
                "
              >
                My Journey
              </a>



              <TechStack />

              <StatusCard />


            </div>

          </ScrollReveal>


        </div>





        {/* PROFILE CARD */}


        <ScrollReveal delay={0.2}>

          <motion.div

            style={{
              x,
              y
            }}

            animate={{
              y:[
                0,
                -15,
                0
              ]
            }}

            transition={{
              duration:4,
              repeat:Infinity,
              ease:"easeInOut"
            }}


            whileHover={{
              scale:1.05,
              rotateX:5,
              rotateY:-5
            }}


            className="
            glass
            relative
            mx-auto
            w-full
            max-w-sm
            rounded-[2rem]
            p-6
            "

          >
          

            <div
              className="
              card-gradient
              rounded-[1.5rem]
              p-8
              text-center
              "
            >


              <div
                className="
                mx-auto
                flex
                h-40
                w-40
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-black/20
                text-6xl
                font-black
                backdrop-blur-xl
                "
              >

                YN

              </div>




              <h2 className="mt-6 text-2xl font-bold">

                Full Stack Developer

              </h2>




              <p className="mt-2 text-white/75">

                Full stack developer aspiring to data science and AI.

              </p>



            </div>


          </motion.div>


        </ScrollReveal>



      </div>

    </section>

  );

}


export default Hero;