import Image from "next/image";
import React from "react";
import promo1 from "../assets/img/promo-1.png";
import promo2 from "../assets/img/promo-2.png";

const Promo = () => {
  return (
    <section id="promo">
      <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
        {/* Card 1 */}
        <div
          className="bg-primaryColorLight flex flex-col p-5 rounded-lg 
        md:flex-row md:items-center lg:flex-row-reverse lg:flex-1 dark:bg-darkColorLight"
        >
          <Image
            className="w-48 mx-auto hover:animate-movingY md:mx-5"
            src={promo1}
            alt="Promo Image"
            priority
          />
          <div className="space-y-2 pt-5 md:pt-0">
            <p className="text-xs text-secondaryColor">Payday promo</p>
            <h3 className="card__title">Get a 10% discount on payday week</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              officiis perspiciatis illum consequatur dignissimos eaque.
            </p>
            <a href="#" className="text-xs text-secondaryColor">
              Buy Online
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-primaryColorLight flex flex-col p-5 rounded-lg 
        md:flex-row md:items-center lg:flex-row-reverse lg:flex-1 dark:bg-darkColorLight"
        >
          <Image
            className="w-48 mx-auto hover:animate-movingY md:mx-5"
            src={promo2}
            alt="Promo Image"
            priority
          />
          <div className="space-y-2 pt-5 md:pt-0">
            <p className="text-xs text-secondaryColor">Payday promo</p>
            <h3 className="card__title">Get a 10% discount on payday week</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              officiis perspiciatis illum consequatur dignissimos eaque.
            </p>
            <a href="#" className="text-xs text-secondaryColor">
              Buy Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
