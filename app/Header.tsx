import React from "react";

const Header = () => {
  return (
    <header className="bg-primaryColor fixed top-0 left-0 w-full z-50">
      <nav>
        <div>
          <a href="#">
            Bur <span>ger</span>
          </a>
        </div>
        <div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#review">Review</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div>
          <i className="ri-moon-line"></i>
          <div>
            <i className="ri-menu-2-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
