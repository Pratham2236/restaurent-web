import React from "react";
import ScrollFadeIn from "./ScrollFadeIn";

function phase5() {
  return (
    <>
      <div className="chef-bg items-short flex-wrap rounded-3xl justify-between p-16 mt-24 bg-[#faf8ef]">
        <div className="chef-content">
          <ScrollFadeIn className="scroll-fade-in">
            <h1 className="font-M  text-[#34be8b] ">words from</h1>
            <h1 className="color-b text-4xl">the chef</h1>
          </ScrollFadeIn>
          <ScrollFadeIn className="scroll-fade-in">
            <p className="chef-dec font-M mt-8 text-1xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
              Dolorum quia doloremque sit sequi officia eius <br /> ut sint.
              Adipisci ut cum incidunt accusantium fugit <br /> pariatur libero
              voluptatem hic tempora, minus natus <br /> quod possimus, expedita
              animi magnam vel quos nulla <br />
              quisquam provident.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn className="scroll-fade-in">
            <button className="butn1 button-orange mt-5">Read More</button>
          </ScrollFadeIn>
        </div>
        <ScrollFadeIn className="scroll-fade-in">

        <div className="chef-image">
          <img src="./src/assets/chef.png" alt="" />
        </div>
        </ScrollFadeIn>

      </div>
    </>
  );
}

export default phase5;
