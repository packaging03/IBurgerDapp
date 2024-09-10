import React from "react";
import burger1 from "../assets/img/burger-1.png";
import burger2 from "../assets/img/burger-2.png";
import burger3 from "../assets/img/burger-3.png";
import burger4 from "../assets/img/burger-4.png";
import burger5 from "../assets/img/burger-5.png";
import snack1 from "../assets/img/snack-1.png";
import snack2 from "../assets/img/snack-2.png";
import snack3 from "../assets/img/snack-3.png";
import snack4 from "../assets/img/snack-4.png";
import snack5 from "../assets/img/snack-5.png";
import snack6 from "../assets/img/snack-6.png";
import beverage1 from "../assets/img/beverage-1.png";
import beverage2 from "../assets/img/beverage-2.png";
import beverage3 from "../assets/img/beverage-3.png";
import beverage4 from "../assets/img/beverage-4.png";
import beverage5 from "../assets/img/beverage-5.png";
import Image from "next/image";

const MenuContent = () => {
  let quantity: number = 0;
  return (
    <div className="menu_content">
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {/* food */}
        <li className="item_wrap food">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={burger1}
              alt="Food Image"
              priority
            />
            <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
            {/* <div className="p-4 flex flex-col items-center justify-center absolute translate-x-28 translate-y-10rem]">
                  <div className="cursor-pointer">
                    <button className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-xs transition duration-300 ease-out border-2 border-white text-secondaryColor hover:bg-primaryColorLight hover:text-whiteColor rounded-full shadow-md group">
                      <span className="absolute flex text-xs items-center justify-center w-full h-full text-whiteColor transition-all duration-300 transform group-hover:translate-x-full ease">
                        <i className="fa-solid fa-shopping-cart" />
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-500 hover:bg-primaryColorLight hover:text-whiteColor group-hover:translate-x-0 ease">
                        Add to cart
                      </span>
                      <span className="relative invisible text-xs">
                        Add to cart
                      </span>
                    </button>
                  </div>
                </div> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$35.00</p>
          </div>
        </li>

        <li className="item_wrap food h-full">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={burger2}
              alt="Food Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>
          {/* <div className="mt-auto">
            {quantity === 0 ? (
              <button
                type="button"
                className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2"
              >
                Add To Cart
              </button>
            ) : null}
          </div> */}

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>
            <p className="text-secondaryColor">$25.00</p>
          </div>
        </li>

        <li className="item_wrap food">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={burger3}
              alt="Food Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$30.00</p>
          </div>
        </li>

        <li className="item_wrap food">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={burger4}
              alt="Food Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$24.00</p>
          </div>
        </li>

        <li className="item_wrap food">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={burger5}
              alt="Food Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        {/* Snack */}

        <li className="item_wrap snack">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={snack1}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        <li className="item_wrap snack">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={snack2}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        <li className="item_wrap snack">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={snack3}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        <li className="item_wrap snack">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={snack4}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        <li className="item_wrap snack">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={snack5}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        <li className="item_wrap snack">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={snack6}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        {/* Beverage */}

        <li className="item_wrap beverage">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={beverage1}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        <li className="item_wrap beverage">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={beverage2}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        <li className="item_wrap beverage">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={beverage3}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        <li className="item_wrap beverage">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={beverage4}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>

        <li className="item_wrap beverage">
          <div
            className="h-56 grid place-items-center 
              bg-primaryColorLight rounded-3xl 
              hover:bg-secondaryColor ease-linear duration-200 lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
          >
            <Image
              className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              src={beverage5}
              alt="Snack Image"
              priority
            />
            {/* <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i> */}
          </div>

          <div className="pt-5">
            <div className="mb-2">
              <h4 className="card__title">Regular beef burger</h4>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </p>
            </div>

            <p className="text-secondaryColor">$42.00</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuContent;
