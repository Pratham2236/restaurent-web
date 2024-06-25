import React from 'react';
import ScrollFadeIn from './ScrollFadeIn'; 

function Phase3() {
  return (
    <>
      <div className='covid d-flex flex-col mt-24'>
        <ScrollFadeIn className="scroll-fade-in">
          <h1 className='covid-pro font-M text-[#6bb99c] text-2xl'>Covid-19 Protocol</h1>
        </ScrollFadeIn>
        <ScrollFadeIn className="scroll-fade-in">
          <h1 className='covid-care color-b text-4xl'>We Care About You</h1>
        </ScrollFadeIn>
        <ScrollFadeIn className="scroll-fade-in">
          <button className='butn1 covid-button mt-5 button-orange'>Read More</button>
        </ScrollFadeIn>
      </div>
      <ScrollFadeIn className="scroll-fade-in">
      <div className="table">
          <img className='table1' src="./src/assets/table.png" alt="Table" />
          <img className='table1' src="./src/assets/table.png" alt="Table" />
      </div>
      </ScrollFadeIn>
      <div className="waiter ">
        <ScrollFadeIn className="scroll-fade-in d-flex">
          <img className='w-5/6' src="./src/assets/waiter.png" alt="Waiter" />
        </ScrollFadeIn>
      </div>
    </>
  );
}

export default Phase3;
