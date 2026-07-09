import { useMotionValue, useSpring } from "framer-motion";


export default function useMouseParallax(){


const mouseX =
useMotionValue(0);


const mouseY =
useMotionValue(0);



const x =
useSpring(mouseX,{
stiffness:100,
damping:20
});


const y =
useSpring(mouseY,{
stiffness:100,
damping:20
});



function move(e:MouseEvent){

mouseX.set(
(e.clientX/window.innerWidth -0.5)*20
);


mouseY.set(
(e.clientY/window.innerHeight -0.5)*20
);


}



return {
x,
y,
move
}

}