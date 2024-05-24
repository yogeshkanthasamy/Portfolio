import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { mode } from "./Mode";
export default function Navbar() {
  const modecolor = useContext(mode);
  let classNamenav = "nav_container_light";
  let classNamelogo = "nav_logo_dark";
  let classNamenavitem = "nav_link_light";
  if (modecolor.colormode) {
    classNamenav = "nav_container_light";
    classNamelogo = "nav_logo_light";
    classNamenavitem = "nav_link_light";
  } else {
    classNamenav = "nav_container_dark";
    classNamelogo = "nav_logo_dark";
    classNamenavitem = "nav_link_dark";
  }

  const changemode = () => {
    console.log(modecolor.colormode);
    modecolor.setcolormode(!modecolor.colormode);
  };

  return (
    <div>
      <div className={classNamenav}>
        <div className={classNamelogo}>
          
          <NavLink to="/aboutme">Yogesh</NavLink>
        </div>
        <div className="navlink_container">
          <NavLink to="/" className={classNamenavitem}>
            Home
          </NavLink>
          <NavLink to="/aboutme" className={classNamenavitem}>
            About
          </NavLink>
          <NavLink to="/projects" className={classNamenavitem}>
            Project
          </NavLink>
          <NavLink to="/contact" className={classNamenavitem}>
            contact
          </NavLink>
          <div className="mode_icon" onClick={changemode}>
          {modecolor.colormode ? (
            <MdOutlineDarkMode className="dark_mode_i" />
          ) : (
            <MdLightMode className="light_mode_i" />
          )}
        </div>
        </div>
       
      </div>
    </div>
  );
}
