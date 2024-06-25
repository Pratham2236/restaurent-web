import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faTimes,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import Phase4 from "./Phase4";
import Phase5 from "./Phase5";
import Phase6 from "./Phase6";
import Phase7 from "./Phase7";
import Phase8 from "./Phase8";
import ScrollFadeIn from "./ScrollFadeIn";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [text1, setText1] = useState("");
  const [person, setPerson] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validateTime = (timeInput) => {
    const time = new Date(`1970-01-01T${timeInput}:00Z`);
    const startTime = new Date("1970-01-01T10:00:00Z");
    const endTime = new Date("1970-01-01T22:00:00Z");

    return time >= startTime && time <= endTime;
  };

  const submit = async (event) => {
    event.preventDefault();

    if (!validateTime(time)) {
      alert("Please select a time between 10:00 AM and 10:00 PM.");
      return;
    }

    const data = { email, person, date, time };

    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      console.log("Email sent successfully");
      setText1("Email has been sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      setText1("Failed to send email");
    }
  };

  return (
    <>
      <div className="containerr p-5 relative flex-col items-short">
        <div className="nav h-16 relative z-50 justify-between items-short mt-8 rounded-full w-11/12 text-white text-lg bg-black p-4">
          <h4 className="pl-6">
            <FontAwesomeIcon
              icon={faUtensils}
              size="2xl"
              style={{ color: "#34be8b" }}
            />
          </h4>

          <div className={`pages ${isNavOpen ? "open" : ""}`}>
            <a href="#" className="nav-hover px-4 font-M p-5">
              Home
            </a>
            <a href="#" className="nav-hover px-4 font-M p-5">
              Menu
            </a>
            <a href="#" className="nav-hover px-4 font-M p-5">
              About us
            </a>
            <a href="#" className="nav-hover px-4 font-M p-5">
              Contact
            </a>
          </div>

          <h4 className="sign font-M text-[#6bb99c] pr-6">Sign in</h4>

          <button
            className="hamburger text-2xl text-white cursor-pointer hidden"
            onClick={toggleNav}
          >
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
          </button>
        </div>

        <div className="content-container mt-14 w-11/12">
          <div className="content text-left flex-1">
            <ScrollFadeIn className="scroll-fade-in">
              <div className="image-box gap-32 flex flex-row">
                <h1 className="heading color-b flex-wrap text-7xl text-black font-bold">
                  eat, drink and <br /> enjoy.
                </h1>
                <img
                  className="table-per flex absolute pt-16 right-0 pr-28"
                  src="./src/assets/untitled-1.png"
                  alt=""
                />
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn className="scroll-fade-in">
              <p id="cap" className="caption color-b font-M mt-4 text-2xl">
                Your Restaurant is Waiting For You.
              </p>
              <p
                id="cap1"
                className="caption color-b font-M mt-2 text-sm leading-normal"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn className="scroll-fade-in">
              <div className="buttons pt-12">
                <button className="butn1 mt-5 button-orange">Explore</button>
                <button className="ml-6 font-M p-3 mt-6 rounded-full">
                  See Menu
                </button>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn className="scroll-fade-in">
              <div className="book flex pt-32">
                <a className="table font-M" href="#">
                  Book a Table
                </a>
                <FontAwesomeIcon icon={faArrowRight} className="ml-5 mt-1" />
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn className="scroll-fade-in">
              <form
                onSubmit={submit}
                id="timeForm"
                className="book-container relative p-8 items-short justify-around font-M mt-5 bg-white rounded-xl"
              >
                <div className="date">
                  <p className="pb-1">Date:</p>
                  <div className="date-con bg-[#ebe3cd] same text-center rounded-xl bg-gray-100">
                    <input
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      type="date"
                      required
                    />
                  </div>
                </div>
                <div className="date">
                  <p className="pb-1">Time:</p>
                  <div className="date-con same d-flex text-center rounded-xl">
                    <input
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      name="timeInput"
                      type="time"
                      id="timeInput"
                      required
                    />
                  </div>
                </div>
                <div className="date">
                  <p className="pb-1">Number Of Person:</p>
                  <div className="date-con same d-flex text-center rounded-xl">
                    <input
                      onChange={(e) => setPerson(e.target.value)}
                      value={person}
                      name=""
                      type="number"
                      className="w-12"
                      required
                    />
                  </div>
                </div>
                <div className="date">
                  <p className="pb-1">Email:</p>
                  <div className="date-con same text-center rounded-xl">
                    <input
                      className="rounded-lg"
                      type="email"
                      placeholder="Type Your Email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                </div>
                <div className="time">
                  <p className="invisible">jgfd</p>
                  <div className="button-con same text-white w-fit h-fit rounded-xl">
                    <button type="submit" className="Submit">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </ScrollFadeIn>
            <div className="booke-conta d-flex">
              <h1 className="booked mt-8 font-M text-[#ff4d00] text-2xl">
                {text1}
              </h1>
            </div>
            <Phase2 />
            <Phase3 />
            <Phase4 />
            <Phase5 />
            <Phase6 />
            <Phase7 />
          </div>
        </div>
      </div>
      <Phase8 />
    </>
  );
}

export default App;
