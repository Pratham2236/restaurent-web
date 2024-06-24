import React from "react";
import ScrollFadeIn from './ScrollFadeIn'; // Adjust the path based on your project structure


function Phase4() {
  return (
    <>
      <div className="bartender-container flex-wrap justify-between flex flex-row">
      <ScrollFadeIn className="scroll-fade-in">

        <div className="phase4-con leading-7 pt-24">
          <h1 className="bar-story font-M phase2 text-2xl ">Story</h1>
          <h1 className="bar-title color-b text-4xl">Our Restaurant</h1>
          <p className="bar-dec font-M color-b pt-2 ">
            Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
            Enim explicabo voluptas <br /> excepturi laborum, nisi recusandae
            non <br /> sit quia eos hic illum corrupti minima <br /> eveniet
            cumque mollitia nobis! Dicta non <br />
            consectetur nostrum maxime,
          </p>
          <button className="bar-butn butn1 font-M text-white mt-6 bg-[#ffff] p-3 rounded-full">
            Read More
          </button>
        </div>
        </ScrollFadeIn>

        <ScrollFadeIn className="scroll-fade-in">

        <img
          className="bartender-img"
          src="./src/assets/bartender.png"
          alt=""
        />
        </ScrollFadeIn>

      </div>
    </>
  );
}

export default Phase4;
