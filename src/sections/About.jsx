import React from "react";
import Globe from "react-globe.gl";
import { color } from "three/webgpu";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pavan111222111@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full h-fit sm:h-[276px] object-contain"
            />
            <div>
              <p className="grid-headtext">Hi im pavan</p>
              <p className="grid-subtext">
                With 2 years of experience ,I have honored my skills and in
                frontend and backend development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech stack</p>
              <p className="grid-subtext">
                Started with Js, I have expertized in many frameworks focused on
                React and Nextjs mongodb for database
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                //   labelsData={[
                //     {
                //       lat: 40,
                //       lng: -100,
                //       text: "I'm here!",
                //       color: "white",
                //       size: 20,
                //     },
                //   ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most timezines
              </p>
              <p className="grid-subtext">
                I'm based in India with remote work available.
              </p>
              <Button
                name={"Contact Me"}
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full h-fit sm:h-[266px] object-contain"
            />
            <div>
              <p className="grid-headtext">My Pasion forCoding</p>
              <p className="grid-subtext">
                Coding isn't just my profession its my Passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] h-fit sm:h-[276px] object-contain sm:object-top"
            />

            <div className="spaxe-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container mt-2" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-lg text-white text-gray_gradient font-medium">
                  pavan111222111@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
