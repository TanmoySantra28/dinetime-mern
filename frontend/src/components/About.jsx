import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            At DineTime, we believe great food is more than a meal, it is an
            experience. Every dish we serve is thoughtfully prepared using fresh
            ingredients, bold flavours, and a deep respect for culinary craft.
            From our kitchen to your table, we focus on quality, consistency,
            and care in every bite. Whether you're joining us for a quick
            reservation or a relaxed evening, our goal is simple: serve food
            you'll remember and moments you'll return for.
          </p>
          <a href="/DineTime.pdf" target="_blank" rel="noreferrer">
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </a>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
