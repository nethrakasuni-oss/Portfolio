import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
}


function ScrollReveal({children, delay = 0}: Props) {

  return (
    <motion.div

      initial={{
        opacity:0,
        y:60,
        filter:"blur(10px)"
      }}

      whileInView={{
        opacity:1,
        y:0,
        filter:"blur(0px)"
      }}

      viewport={{
        once:true,
        amount:0.2
      }}

      transition={{
        duration:0.8,
        delay,
        ease:"easeOut"
      }}

    >

      {children}

    </motion.div>
  );
}


export default ScrollReveal;