import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


function GalaxyStars() {

  const stars = useRef<THREE.Group>(null);


  useFrame((state) => {

    if (stars.current) {

      stars.current.rotation.y =
        state.mouse.x * 0.3;

      stars.current.rotation.x =
        state.mouse.y * 0.2;

    }

  });


  return (
    <group ref={stars}>
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
}



function GalaxyBackground() {

  return (

    <div
      className="
        fixed
        inset-0
        -z-10
        pointer-events-none
      "
    >

      <Canvas
        style={{
    pointerEvents: "none"
  }}
  camera={{
    position:[0,0,1]
  }}
      >

        <GalaxyStars />

      </Canvas>

    </div>

  );
}


export default GalaxyBackground;