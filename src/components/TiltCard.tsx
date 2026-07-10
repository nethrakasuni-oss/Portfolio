import Tilt from "react-parallax-tilt";

interface Props {
  children: React.ReactNode;
}


function TiltCard({children}: Props){

return (

<Tilt

tiltMaxAngleX={12}
tiltMaxAngleY={12}

perspective={1000}

scale={1.05}

transitionSpeed={800}

className="
w-full
"

>

{children}

</Tilt>

)

}


export default TiltCard;