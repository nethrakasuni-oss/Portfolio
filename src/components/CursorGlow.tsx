import {motion,useMotionValue,useSpring} from "framer-motion";


function CursorGlow(){

const x =
useMotionValue(0);

const y =
useMotionValue(0);



const springX =
useSpring(x,{
stiffness:200,
damping:30
});


const springY =
useSpring(y,{
stiffness:200,
damping:30
});



window.onmousemove=(e)=>{

x.set(e.clientX-150);
y.set(e.clientY-150);

}



return(

<motion.div

style={{
x:springX,
y:springY
}}

className="
pointer-events-none
fixed
z-50
h-[300px]
w-[300px]
rounded-full
bg-pink-500/20
blur-[100px]
"

/>

)

}


export default CursorGlow;