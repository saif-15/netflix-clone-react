import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function NavBar() {

    const[isBlack,toggleBlack]=useState(false);

    const toggleBackground=()=>{
        if(window.scrollY > 100)
            toggleBlack(true);
        else
            toggleBlack(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll",toggleBackground);
        return ()=>{ window.removeEventListener("scroll",toggleBackground);}
    },[]);

  return (
    <div className={`navbar ${isBlack && "navbar_black"}`}>
      <div className="navbar_content">
        <img
          className="nav_logo"
          src="http://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image"
        ></img>

        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        ></img>
      </div>
    </div>
  );
}
