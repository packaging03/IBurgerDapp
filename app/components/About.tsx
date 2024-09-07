import Image from "next/image";
import React from "react";
import about from "../assets/img/about.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col gap-10 md:flex-row">
        <div className="flex-1 about_img">
          <Image
            className="rounded-lg"
            src={about}
            alt="About Image"
            priority
          />
        </div>

        <div className="flex-1 about_content">
          <h2 className="section__title">
            Find food and drinks, all-in-one place for your best taste.
          </h2>
          <div className="seperator mx-auto md:mx-0"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quae ipsa inventore pariatur cumque iste reprehenderit totam optio
            eos odit.
          </p>
          <ul className="grid grid-cols-2 py-5 space-y-1 ">
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i> Best
              Price
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Fresh Ingredient
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Best Service
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Health Protocol
            </li>
          </ul>
          <a href="" className="btn btn-primary">
            About us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
