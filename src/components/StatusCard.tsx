import { motion } from "framer-motion";
function StatusCard() {

return(

<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.7,
ease:"easeOut"
}}

viewport={{
once:true
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


<div
className="
flex
items-center
gap-3
"
>

<span
className="
h-3
w-3
rounded-full
bg-green-400
animate-pulse
"
/>


<h3
className="
text-sm
font-bold
text-white
"
>
Open for Internship Opportunities
</h3>


</div>


<p
className="
mt-3
text-xs
text-white/60
"
>
Full Stack Development • AI • Machine Learning
</p>


</motion.div>


)

}


export default StatusCard;