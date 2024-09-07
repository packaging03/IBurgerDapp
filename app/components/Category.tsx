import Image from "next/image";
import React from "react";
import burger1 from "../assets/img/burger-1.png";
import burger2 from "../assets/img/snack-1.png";
import burger3 from "../assets/img/beverage-2.png";

const Category = () => {
  return (
    <section id="category">
      <div className="container flex flex-col gap-5 md:flex-row">
        {/* Card 1 */}
        <div className="category_card bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <Image
              className="absolute w-28 -bottom-4 -left-4"
              src={burger1}
              alt="Category 1 Image"
              priority
            />
          </div>
          <div>
            <div className="mb-2">
              <h4 className="card__title">Food</h4>
              <p className="text-xs">Lorem ipsum dolor sit.</p>
            </div>

            <a href="#" className="text-black cursor-pointer">
              Buy Online
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="category_card bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <Image
              className="absolute w-28 -bottom-4 -left-4"
              src={burger2}
              alt="Category 2 Image"
              priority
            />
          </div>
          <div>
            <div className="mb-2">
              <h4 className="card__title">Food</h4>
              <p className="text-xs">Lorem ipsum dolor sit.</p>
            </div>

            <a href="#" className="text-secondaryColor cursor-pointer">
              Buy Online
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="category_card bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <Image
              className="absolute w-28 -bottom-4 -left-4"
              src={burger3}
              alt="Category 3 Image"
              priority
            />
          </div>
          <div>
            <div className="mb-2">
              <h4 className="card__title">Food</h4>
              <p className="text-xs">Lorem ipsum dolor sit.</p>
            </div>

            <a href="#" className="text-secondaryColor cursor-pointer">
              Buy Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
