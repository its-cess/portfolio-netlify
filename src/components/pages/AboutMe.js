import { Fragment } from "react";

import Header from "../base/Header";

import "./about-me.styles.scss";

export default function AboutMe() {
  return (
    <Fragment>
      <Header
        align="left"
        title="About Me"
        subTitle="Cecily Toro"
        span="Frontend Developer"
      />
      <p className="about-me-container">
        I served in the military from 2012-2015, where I was trained as a
        medical laboratory technician. After separating from the military, I
        continued to work as a laboratory technician until October 2021 when I
        switched careers into web development.
        <br />
        <br />I have found my passion in web development, and love to learn new
        things. I am constantly looking to better my skills or learn new ones.
        There is always something new to learn in web development, which is one
        of the things I love about it. I am naturally creative, with an eye for
        detail, and love buildings things. I am a quick learner, but most
        importantly I am hardworking. I will do what it takes to learn the
        skills necessary for any position. I am a dependable team player and
        believe I would make a great addition to any development team.
        <br />
        <br />
        When I'm not working, you can find me outside working on my 6 acre farm.
        I have three horses and love to ride whenever I get the chance. In the
        evenings, I either have my nose in a book or am cheering on my Columbus
        Blue Jackets!
      </p>
    </Fragment>
  );
}
