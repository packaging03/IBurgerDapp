"use client";
import React, { useState } from "react";
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

const Menu = () => {
  const [itemCount, setItemCount] = useState(0);

  const processActiveMenu = (element: string) => {
    const all_items = document.querySelectorAll(".item_wrap");
    const foods = document.querySelectorAll(".food");
    const snacks = document.querySelectorAll(".snack");
    const beverages = document.querySelectorAll(".beverage");

    let item = document.getElementById(element);
    if (item) {
      let eventHtml = document.getElementById("menu_list");
      if (eventHtml) {
        const listItems = eventHtml.getElementsByTagName("li");
        for (let i = 0; i <= listItems.length - 1; i++) {
          listItems[i].classList.remove("active");
        }

        item.classList.add("active");
        const tadval = item.getAttribute("data-tabs");

        all_items.forEach((item) => {
          item.classList.add("hidden");
        });

        if (tadval == "food") {
          foods.forEach((item) => {
            item.classList.remove("hidden");
            item.classList.add("block");
          });
        } else if (tadval == "snack") {
          snacks.forEach((item) => {
            item.classList.remove("hidden");
            item.classList.add("block");
          });
        } else if (tadval == "beverage") {
          beverages.forEach((item) => {
            item.classList.remove("hidden");
            item.classList.add("block");
          });
        } else {
          all_items.forEach((item) => {
            item.classList.remove("hidden");
            item.classList.add("block");
          });
        }
      }
    }
  };

  return (
    <section id="menu">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="section__title">OUR BEST MENU</h2>
          <div className="seperator mx-auto"></div>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            dicta mollitia, eveniet repellendus magni voluptatum libero nisi
            quos porro iste rem, sapiente, sed dignissimos iusto. Nihil, maxime
            soluta! Corrupti, placeat!
          </p>
          <div className="tabs_wrap">
            <ul
              className="flex none flex-wrap justify-center gap-3 py-10"
              id="menu_list"
            >
              <li
                id="li_all"
                data-tabs="all"
                className="btn bg-primaryColorLight active dark:bg-darkColorLight"
                onClick={(e) => processActiveMenu("li_all")}
              >
                All
              </li>
              <li
                id="li_food"
                data-tabs="food"
                className="btn bg-primaryColorLight dark:bg-darkColorLight"
                onClick={(e) => processActiveMenu("li_food")}
              >
                Food
              </li>
              <li
                id="li_snack"
                data-tabs="snack"
                className="btn bg-primaryColorLight dark:bg-darkColorLight"
                onClick={(e) => processActiveMenu("li_snack")}
              >
                Snack
              </li>
              <li
                id="li_beverage"
                data-tabs="beverage"
                className="btn bg-primaryColorLight dark:bg-darkColorLight"
                onClick={(e) => processActiveMenu("li_beverage")}
              >
                Beverage
              </li>
            </ul>
          </div>
        </div>

        <div className="menu_content">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* food */}
            <li className="item_wrap food">
              <div
                className="h-56 grid grid-flow-col columns-2 place-items-center
              bg-primaryColorLight rounded-3xl cursor-pointer relative
              hover:bg-secondaryColor ease-linear duration-200 
              lg:h-40 dark:bg-darkColorLight dark:hover:bg-secondaryColor"
              >
                <Image
                  className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                  src={burger1}
                  alt="Food Image"
                  priority
                />
                {!itemCount ? (
                  <i
                    className="ri-add-line px-1 bg-secondaryColor rounded-full text-blackColor 
                    hover:bg-primaryColorLight hover:text-whiteColor font-oswald 
                    hover:text-whitefocus:outline-none w-6 absolute bottom-4 right-5"
                    onClick={() => setItemCount((prev) => prev + 1)}
                  />
                ) : (
                  <div className="absolute bottom-4 right-5 flex items-center gap-3 p-1 rounded-3xl bg-whiteColor">
                    <i
                      className="ri-subtract-line bg-red-500 rounded-full text-xl px-1"
                      onClick={() => setItemCount((prev) => prev - 1)}
                    />
                    <p className="text-blackColor">{itemCount}</p>
                    <i
                      className="ri-add-line bg-greenColor rounded-full text-xl px-1"
                      onClick={() => setItemCount((prev) => prev + 1)}
                    />
                  </div>
                )}
                
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

            <li className="item_wrap food">
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
                <i className="fa-solid fa-shopping-cart absolute translate-x-36  text-blackColor bg-secondaryColor translate-y-20 px-2 py-2 text-xs transition ease-in duration-200 uppercase rounded-full hover:bg-primaryColorLight hover:text-whiteColor font-oswald hover:text-whitefocus:outline-none"></i>
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
      </div>
    </section>
  );
};

export default Menu;
