import React from "react";
import ScrollFadeIn from "./ScrollFadeIn"; // Adjust the path based on your project structure

function Phase7() {
  return (
    <>
      <div className="semi-footer flex justify-between mt-24">
        <ScrollFadeIn className="scroll-fade-in">
          <img className="foot-image" src="./src/assets/leav.png" alt="" />
        </ScrollFadeIn>

        <div className="content-form text-center">
          <ScrollFadeIn className="scroll-fade-in">
            <h1 className="font-M text-[#ff4d00]">Subscribe</h1>
            <h1 className="color-b text-4xl">to our newsletter</h1>
          </ScrollFadeIn>
          <ScrollFadeIn className="scroll-fade-in">
            <div className="input-form gap-5 font-M text-sm mt-12 flex-col flex">
              <input
                className="input-footer bg-[#ccc1a3] rounded-full w-3/5"
                type="text"
                placeholder="Name"
              />
              <input
                className="input-footer bg-[#ccc1a3] rounded-full w-3/5"
                type="mail"
                placeholder="mail"
              />
              <input
                className="input-footer foot bg-[#ccc1a3] rounded-3xl w-3/5"
                type="text"
                placeholder="message"
              />
            </div>
            <button className="button-con p-3 mt-5 font-M text-white rounded-full ">
              Send Message
            </button>
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn className="scroll-fade-in">
          <img className="foot-image" src="./src/assets/leamom.png" alt="" />
        </ScrollFadeIn>
      </div>
    </>
  );
}

export default Phase7;
