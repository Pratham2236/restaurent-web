import React from "react";
import ScrollFadeIn from "./ScrollFadeIn";

function Phase6() {
  return (
    <>
      <div className="phase6-content d-flex flex-col mt-24">
        <ScrollFadeIn className="scroll-fade-in">
          <h1 className="text-[#ff4d00] d-flex font-M">what our</h1>
          <h1 className="text-4xl color-b">coustmer says</h1>
        </ScrollFadeIn>
      </div>
      <div className="review-container flex-wrap items-short justify-between mt-16 ">
        <div className="again mb-11 p-8 rounded-3xl flex flex-row bg-[#faf8ef]">

          <img className="men-image" src="./src/assets/men.png" alt="" />

          <div className="review-1 pl-6">
        <ScrollFadeIn className="scroll-fade-in">

            <h1 className="review1-head text-2xl">john smith</h1>
            <p className="review1-dec font-M text-sm mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Minus id sit consequuntur. Lorem ipsum dolor sit <br /> amet
              consectetur adipisicing elit.
            </p>
            <img
              className="review1-star mt-3"
              src="./src/assets/star.png"
              alt=""
            />
        </ScrollFadeIn>

          </div>
        </div>

        <div className="again mb-11 p-8 rounded-3xl flex flex-row bg-[#faf8ef]">

          <img className="men-image" src="./src/assets/men.png" alt="" />

          <div className="review-1 pl-6">
        <ScrollFadeIn className="scroll-fade-in">

            <h1 className="review1-head text-2xl">sara johnson</h1>
            <p className="review1-dec font-M text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
              Rem consequatur quidem modi officia vero Lorem <br /> ipsum dolor
              sit amet consectetur.
            </p>
            <img
              className="review1-star mt-3"
              src="./src/assets/star.png"
              alt=""
            />
        </ScrollFadeIn>
          </div>

        </div>
      </div>

      <div className=" d-flex">
        <div className="again p-8 rounded-3xl flex flex-row bg-[#faf8ef]">

          <img className="men-image" src="./src/assets/men.png" alt="" />

          <div className="review-1 pl-6">
        <ScrollFadeIn className="scroll-fade-in">

            <h1 className="review1-head text-2xl">sara johnson</h1>
            <p className="review1-dec font-M text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
              Rem consequatur quidem modi officia vero Lorem <br /> ipsum dolor
              sit amet consectetur.
            </p>
            <img
              className="review1-star mt-3"
              src="./src/assets/star.png"
              alt=""
            />
        </ScrollFadeIn>

          </div>
        </div>
      </div>
    </>
  );
}

export default Phase6;
