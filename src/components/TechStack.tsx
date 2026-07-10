import { motion } from "framer-motion";
function TechStack() {

const technologies = [
"React.js",
"TypeScript",
"Python",
"AI / ML",
"PostgreSQL"
];


return (

    <motion.div
        
        initial={{
  opacity: 0,
  x: 40,
}}

whileInView={{
  opacity: 1,
  x: 0,
}}

transition={{
  duration: 0.7,
  ease: "easeOut",
}}

viewport={{
  once: true,
        }}
        
className="
rounded-3xl
border
border-white/10
bg-white/10
p-5
backdrop-blur-xl
transition
hover:-translate-y-2
hover:bg-white/15
"
        
        
        
>

<h3
className="
mb-4
text-sm
font-bold
text-white
"
>
Currently Building With
</h3>


<div
className="
flex
flex-wrap
gap-2
"
>

{
technologies.map((tech)=>(
<span
key={tech}
className="
rounded-full
bg-white/10
px-3
py-1
text-xs
text-white/80
transition
hover:scale-105
"
>
{tech}
</span>
))
}

</div>


</motion.div>

)

}


export default TechStack;