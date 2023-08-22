import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Hey I'm Jake it's nice to meet you!</p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
