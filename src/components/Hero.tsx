import { motion } from "framer-motion";
import { useEffect } from "react";
import ScrollReveal from "../animation/ScrollReveal";
import useMouseParallax from "../hooks/useMouseParallax";


function Hero() {
  const {x,y,move}=useMouseParallax();
    useEffect(()=>{
      window.addEventListener("mousemove",move);
    return()=>{window.removeEventListener("mousemove",move);
    }
  },[]);

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-24"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>

          <ScrollReveal>
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
              Full Stack Developer
            </p>
          </ScrollReveal>


          <ScrollReveal delay={0.15}>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Hi, I’m{" "}
              <span className="gradient-text">
                Nethra Weerasingha
              </span>
            </h1>
          </ScrollReveal>


          <ScrollReveal delay={0.25}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Data Science undergraduate at SLIIT with backend development
              experience, seeking an AI-focused internship to apply my skills
              in machine learning and intelligent system design.
            </p>
          </ScrollReveal>


          <ScrollReveal delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-4">

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
                href="/cv.pdf"
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
                Download CV
              </a>

            </div>
          </ScrollReveal>

        </div>



        {/* PROFILE CARD */}
        <ScrollReveal delay={0.2}>

          <div
            className="glass ">

            <motion.div

                style={{x,y}}
                className="glass
                relative
                mx-auto
                max-w-sm
                rounded-[2rem]
                p-6
                "

            ></motion.div>

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

          </div>

        </ScrollReveal>

        <motion.span
          layoutId="underline" className=" absolute bottom-0 h-[2px] w-full bg-pink-500"/>


      </div>
    </section>

  );
}

export default Hero;