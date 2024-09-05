import Image from "next/image";
import React from "react";
import homeImage from "../assets/img/home-image.png";

const Hero = () => {
  return (
    <section id="home">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
          <Image
            className="w-60 md:w-full"
            src={homeImage}
            alt="Burger Logo"
            priority
          />
        </div>
        <div className="text-center md:basis-1/2 md:text-start lg:basis-3/5">
          <h1 className="home__title">Happy tummy with tasty burgers.</h1>
          <div className="seperator mx-auto md:mx-0"></div>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
            <div className="text-center">
              <i className="fa-solid fa-utensils text-secondaryColor text-4xl"></i>
              <br />
              Delicious
            </div>

            <div className="text-center">
              <i className="fa-solid fa-droplet text-secondaryColor text-4xl"></i>
              <br />
              Fresh
            </div>

            <div className="text-center">
              <i className="fa-brands fa-envira text-secondaryColor text-4xl"></i>
              <br />
              Organic
            </div>
          </div>

          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
