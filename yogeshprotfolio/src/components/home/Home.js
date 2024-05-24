import React, { useContext, useEffect, useState } from "react";
import About from "../About/About";
import Project from "../projects/Project";
import Contact from "../contact/Contact";
import "./home.css";

import { mode } from "../Mode";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()

export default function Home() {
  const modecolor = useContext(mode);
  let homebackgound = "home_container_light";
  let animactiontext = "animaction_text_light";
  const [summary, setsummayr] = useState(false);

  useEffect(() => {
   
    setTimeout(() => {
      setsummayr(true);
    }, 2000);
  }, []);

  if (modecolor.colormode) {
    animactiontext = "animaction_text_light";
    homebackgound = "home_container_light";
  } else {
    animactiontext = "animaction_text_dark";
    homebackgound = "home_container_dark";
  }

  return (
    <div className={homebackgound}>
      <div className="intro_container">
        <div className={animactiontext}>
          <div className="animation">
            <TypeAnimation
              sequence={["HI I AM YOGESH", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          { summary &&
            <div className="summary_text">
              <TypeAnimation
                sequence={[
                  " Fullstack Developer proficient in both frontend and backend",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          }
        </div>

        <div className="profileimg_container">
          <img
            src="/pic/yogeshpic.jpg"
            className="profile_img"
            data-aos="fade-down-left"
            data-aos-duration="1000"
          ></img>
        </div>
        {/* <div></div> */}
      </div>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}
