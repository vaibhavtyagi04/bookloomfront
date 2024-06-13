import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-quote">
          <h2>Beware the man who faces you unarmed.</h2>
          <h2>If in his eyes you are not the target, </h2>
          <h2>then you can be sure you are the weapon.</h2>
        </div>
        <h2>~ The Atlas Six</h2>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
