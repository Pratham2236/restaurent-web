import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import ScrollFadeIn from "./ScrollFadeIn";

function Phase8() {
  return (
    <div className="footer-container p-3 items-short justify-around w-full h-fit bg-[#fa9d30]">
      <ScrollFadeIn className="scroll-fade-in">
        <div className="about flex gap-4 flex-col">
          <h1 className="foot-head text-3xl text-white mb-4">about</h1>
          <a href="#" className="footer-page text-[#393939] font-M">
            history
          </a>
          <a href="#" className="footer-page text-[#393939] font-M">
            our team
          </a>
          <a href="#" className="footer-page text-[#393939] font-M">
            mission statement
          </a>
          <a href="#" className="footer-page text-[#393939] font-M">
            terms & condition
          </a>
          <a href="#" className="footer-page text-[#393939] font-M">
            privacy policy
          </a>
        </div>
      </ScrollFadeIn>
      <ScrollFadeIn className="scroll-fade-in">
        <div className="about flex gap-4 flex-col">
          <h1 className="foot-head text-3xl text-white mb-4">what we do</h1>
          <a href="#" className="footer-page text-[#393939] font-M">
            news and stories
          </a>
          <a href="#" className="footer-page text-[#393939] font-M">
            publications
          </a>
          <a href="#" className="footer-page text-[#393939] font-M">
            take action
          </a>
          <a href="#" className="footer-page text-[#393939] font-M">
            recommendation
          </a>
          <a href="#" className="footer-page text-[#393939] font-M">
            help
          </a>
        </div>
      </ScrollFadeIn>
      <ScrollFadeIn className="scroll-fade-in">
        <div className="about flex text-right gap-4 flex-col">
          <h1 className="foot-head text-3xl mb-10 text-white">
            sign-up to receive <br /> our newsletter
          </h1>
          <input
            className="input-foot mb-5 font-M w-80 h-10 rounded-full bg-transparent border-2 border-[#393939]"
            type="text"
          />
          <div className="footer-last flex justify-between items-short">
            <span className="follow ml-12 font-M">follow us!</span>
            <div className="face d-flex rounded-full bg-white w-6 h-6">
              <FontAwesomeIcon icon={faFacebookF} size="xs" />
            </div>
            <div className="face d-flex rounded-full bg-white w-6 h-6"> 
              <FontAwesomeIcon icon={faInstagram} size="xs" />
            </div>
            <div className="face d-flex rounded-full bg-white w-6 h-6">
              <FontAwesomeIcon icon={faYoutube} size="xs" />
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
}

export default Phase8;
