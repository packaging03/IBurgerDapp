"use client";
import React from "react";

const Menu = () => {
  const processActiveMenu = (element: string) => {
    let item = document.getElementById(element);
    if (item) {
      let eventHtml = document.getElementById("menu_list");
      if (eventHtml) {
        const listItems = eventHtml.getElementsByTagName("li");
        // Loop through the NodeList object.
        for (let i = 0; i <= listItems.length - 1; i++) {
          listItems[i].classList.remove("active");
        }
        item.classList.add("active");
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
              className="flex flex-wrap justify-center gap-3 py-10"
              id="menu_list"
            >
              <li
                id="li_all"
                className="btn bg-primaryColorLight active"
                onClick={(e) => processActiveMenu("li_all")}
              >
                All
              </li>
              <li
                id="li_food"
                className="btn bg-primaryColorLight"
                onClick={(e) => processActiveMenu("li_food")}
              >
                Food
              </li>
              <li
                id="li_snack"
                className="btn bg-primaryColorLight"
                onClick={(e) => processActiveMenu("li_snack")}
              >
                Snack
              </li>
              <li
                id="li_beverage"
                className="btn bg-primaryColorLight"
                onClick={(e) => processActiveMenu("li_beverage")}
              >
                Beverage
              </li>
              <li
                id="li_drinks"
                className="btn bg-primaryColorLight"
                onClick={(e) => processActiveMenu("li_drinks")}
              >
                Drinks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
