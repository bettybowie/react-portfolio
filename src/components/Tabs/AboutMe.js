import React from "react";
import Betty from "../../Assets/images/Betty.png";

export default function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>
      <img id='portrait' src={Betty} alt="portrait" width="280" height="310"></img>
      <h3>
        Hello there, my name is Betty Bowie Lu. I graduated from the University of
        Washington in 2017 with a Bachelor's degree in Psychology. Since then, I
        have worked as a server at a hotpot restaurant, a barista at a fruit tea
        shop, and a project coordinator at an IT company. Currently, I am a
        student taking a six-month full-stack web development course that will
        be completed in May 2023. I am thoroughly enjoying the process of
        learning web development and programming, and I am excited to apply
        these new skills to my future career. <br />
        <br />
        Apart from my professional endeavors, I have a passion for fashion and
        reading Chinese novels. Fashion has always been an important part of my
        life, and I love expressing myself through my clothing choices. In my
        free time, I indulge in reading Chinese novels, which take me on an
        immersive journey to places I have never been before. <br />
        <br />Thank you for taking the time to get to know a little bit about me.
      </h3>
    </section>
  );
}
