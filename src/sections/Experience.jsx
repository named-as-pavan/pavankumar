import { Canvas } from "@react-three/fiber";
import React from "react";
import { workExperiences } from "../constants";
import { div } from "three/webgpu";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";
import { useState } from "react";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  return (
    <section className="c-space my-20">
      <div className="w-full h-full text-white-600" id="work">
        <h3 className="head-text">My Experience</h3>

        <div className="work-container">
          <div className="work-canvas sm:h-[80vh] h-[400px] bg-none">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                castShadow
              />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationsName={animationName}/>
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ name, pos, id, icon, duration, title, animation }) => (
                  <div
                    className="work-content_container group"
                    key={id}
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content-bar" />
                    </div>
                    <div className="sm:p-5 px-2 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5 ">
                        {pos} {duration}
                      </p>

                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
