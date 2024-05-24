import React from "react";
import "./about.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function About() {
  
  return (
    <div className="about_continer">
      <div className="aboutme_content">
        <h3 className="about_tilte">About Me</h3>
        <ul className="items_aboutme">
          <li>
            Fullstack Stack Developer with a strong passion for crafting
            high-performance web applications using MongoDB, Express.js, React,
            and Node.js. My expertise lies in developing scalable, responsive,
            and user-friendly solutions from front-end interfaces to back-end
            databases. With a keen eye for detail and a commitment to clean,
            maintainable code, I thrive in dynamic environments and enjoy
            tackling complex challenges. I am always eager to learn new
            technologies and improve my skills to stay at the forefront of web
            development.
          </li>
        </ul>
      </div>
      <div>
      <h3 className="about_tilte">Skills</h3>
      <div className="aboutme_skills"> 
        <div className="lan_icons">
          <FaHtml5 className="html_icon icons_hover" data-aos="flip-left"  data-aos-duration="1000"/> 
           <h4>Html</h4>
        </div>
        <div className="lan_icons"> 
        <FaCss3Alt className="css_icon icons_hover"/>
        <h4>Css</h4>
        </div>
        <div className="lan_icons">
          <FaBootstrap className="bootstarp_icon icons_hover"/>
          <h4>Bootstarp</h4>
          </div>
        <div className="lan_icons">
          <RiJavascriptFill className="js_icon icons_hover"/>
          <h4>Javascript</h4>
          </div>
        <div className="lan_icons">
          <RiReactjsFill className="react_icon icons_hover"/>
          <h4>React</h4>
          </div>
        <div className="lan_icons">
          <SiMongodb className="mogodb_icon icons_hover"/>
          <h4>MongoDB</h4>
          </div>
        
      </div>
      </div>
    </div>
  );
}
