import React, { useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP library
import { TextPlugin } from "gsap/TextPlugin"; // Import GSAP TextPlugin
import "../styles/Hero.css";

// Register TextPlugin with GSAP
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Text animation for hero heading
    tl.fromTo(
      ".hero-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2 }
    )
      .fromTo(
        ".hero-btn",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5 },
        "-=1"
      ) // Button animation overlaps slightly
      .fromTo(
        ".hero-paragraph", // Target paragraph for typewriter effect
        { text: "" }, // Start with an empty text
        { text: "Interactive, responsive, and beautifully designed websites await!", duration: 4, ease: "none" }
      );
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-text">persist ventures</h1>
        <p className="hero-paragraph"></p> {/* Empty paragraph for typewriter effect */}
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
