import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {

  const isMobile = useMediaQuery({maxWidth: '768px'});  //mobiles

  const isSmall = useMediaQuery({maxWidth: '440px'}); //small display mobiles

  const isTablet = useMediaQuery({minWidth: '768px', maxWidth: '1024px'}); //tablets and laptops

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


  // const x = useControls('HackerRoom', {
  //   rotationX: {
  //     value: 2.5,
  //     min: -10, //minimum slider 10
  //     max: 10,
  //     step: 0.1
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10, //minimum slider 10
  //     max: 10,
  //     step: 0.1
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10, //minimum slider 10
  //     max: 10,
  //     step: 0.1
  //   },
  //   scale:{
  //     value:1,
  //     min:0.1, //minimum slider 10
  //     max:10,
  //     step:0.1
  //   },
  //   positionX: {
  //     value: 2.5,
  //     min: -10, //minimum slider 10
  //     max: 10,
  //     step: 0.1
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10, //minimum slider 10
  //     max: 10,
  //     step: 0.1
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10, //minimum slider 10
  //     max: 10,
  //     step: 0.1
  //   },
  // })
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <div className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi,im pavan <span className="waving-hand">👋</span>
          <p className="text-gray_gradient hero_tag">
            Building Fullstack-products & Brands
          </p>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0">
            <Leva/>
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>

            <HackerRoom
              // scale={0.7}
              // scale={[x.scale, x.scale, x.scale]}
              // scale={isMobile ? [0.081,0.081,0.081] : [0.1, 0.1, 0.1]}
              // position={[0.8, -2.8, -10]}
              // rotation={[-9.28, -6.3, -9.45]}
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              />
              </HeroCamera>
            <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>

            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={0.2} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam cotainerClass="sm:w-fit w-fit sm:min-w-96">
          </Button>
        </a>
      </div>
    </section>
  );
};
export default Hero;
