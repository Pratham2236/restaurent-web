import React from "react";
import ScrollFadeIn from "./ScrollFadeIn";


const menuItems = [
  {
    imgSrc: "./src/assets/meat.png",
    title: "Meat",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus mollitia quas repellendus distinctio deserunt Lorem ipsum.",
  },
  {
    imgSrc: "./src/assets/fish.png",
    title: "Fish",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus mollitia quas repellendus distinctio deserunt Lorem ipsum.",
  },
  {
    imgSrc: "./src/assets/drink.png",
    title: "Drink",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus mollitia quas repellendus distinctio deserunt Lorem ipsum.",
  },
];

const Phase2 = () => {
  return (
    <>
    <div className="phase2-container d-flex text-center">
    <ScrollFadeIn className="scroll-fade-in w-full z-10">

    <div className="phase2 pt-24">
      <p className="text-2xl phase2 font-M">Delicious</p>
      <h2 className="text-black color-b text-4xl">Food Categories</h2>
    </div>
    </ScrollFadeIn>

  </div>
      <ScrollFadeIn className="scroll-fade-in w-full z-10">
    <div className="menu-con flex-wrap justify-between flex pt-20">
      {menuItems.map((item, index) => (

        <div key={index} className="items bg-[#faf8ef] flex-col p-2 d-flex rounded-3xl text-center">
          <img className="image-food" src={item.imgSrc} alt={item.title} />
          <h1 className="food-font text-4xl mt-2">{item.title}</h1>
          <p className="food-description font-M mt-4">{item.description}</p>
          <button className="food-button button-orange mt-6 ">
            Read More
          </button>
        </div>

))}
    </div>
</ScrollFadeIn>
    </>
  );
};

export default Phase2;
