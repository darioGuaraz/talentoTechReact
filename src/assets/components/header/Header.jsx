import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <video
        src="img/heroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="video-header"
      ></video>
      <img src="img/headerlogo1.png" className="hero-logo" alt="" />
    </header>
  );
}

export default Header;
