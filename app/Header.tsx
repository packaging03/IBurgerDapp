"use client";
import React from "react";

const Header = () => {
  const showHamburgerMenu = () => {
    let burgermenu = document.getElementById("burgerMenu");
    if (burgermenu) {
      burgermenu.classList.remove("hidden");
    }
  };

  const hideHamburgerMenu = () => {
    let burgermenu = document.getElementById("burgerMenu");
    if (burgermenu) {
      burgermenu.classList.add("hidden");
    }
  };

  return (
    <header className="bg-primaryColor fixed top-0 left-0 w-full z-50">
      <nav className="container relative h-14 flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl uppercase font-oswald">
            Bur
            <span className="text-secondaryColor">ger</span>
          </a>
        </div>

        <div
          id="burgerMenu"
          className="absolute top-0 left-0 w-full py-14 bg-primaryColor border-b 
          border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto"
        >
          <ul className="flex flex-col text-center gap-5 md:flex-row">
            <li>
              <a
                href="#home"
                className="hover:text-secondaryColor ease-in duration-200"
                onClick={hideHamburgerMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-secondaryColor ease-in duration-200"
                onClick={hideHamburgerMenu}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-secondaryColor ease-in duration-200"
                onClick={hideHamburgerMenu}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#review"
                className="hover:text-secondaryColor ease-in duration-200"
                onClick={hideHamburgerMenu}
              >
                Review
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-secondaryColor ease-in duration-200"
                onClick={hideHamburgerMenu}
              >
                Contact
              </a>
            </li>
          </ul>

          <div
            className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer 
            hover:text-secondaryColor md:hidden"
            onClick={hideHamburgerMenu}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <i className="ri-moon-line cursor-pointer ml-4 text-xl"></i>

          <div id="hamburger" onClick={showHamburgerMenu} className="md:hidden">
            <i className="ri-menu-2-line cursor-pointer text-xl"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
