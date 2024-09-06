import React from "react";

const Footer = () => {
  let _year = new Date().getFullYear();
  return (
    <section id="footer">
      <div className="container">
        <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
          <li>
            <div className="space-y-3">
              <a href="" className="text-4xl font-oswald uppercase">
                Bur<span className="text-secondaryColor">ger</span>
              </a>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos iusto molestias quam beatae omnis saepe?
              </p>
            </div>
          </li>

          <li>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg uppercase font-oswald">Support</h3>
              <a href="" className="text-xs hover:text-secondaryColor">
                FAQ's
              </a>
              <a href="" className="text-xs hover:text-secondaryColor">
                Privacy
              </a>
              <a href="" className="text-xs hover:text-secondaryColor">
                Term & Condition
              </a>
              <a href="" className="text-xs hover:text-secondaryColor">
                Contact
              </a>
            </div>
          </li>
          <li className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-lg uppercase font-oswald">Phone</h3>

              <p className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-phone text-lg text-secondaryColor"></i>
                +1 402 587 4831
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg uppercase font-oswald">Email</h3>

              <p className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-envelope text-lg text-secondaryColor"></i>
                info@iburger.com
              </p>
            </div>
          </li>
          <li className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-lg uppercase font-oswald">Address</h3>

              <p className="flex items-center gap-2 text-xs">
                <i className="fa-solid fa-location-dot text-lg text-secondaryColor"></i>
                Abuja, Nigeria
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg uppercase font-oswald">Follow us</h3>

              <div className="space-x-3">
                <i className="fa-brands fa-facebook-f text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                <i className="fa-brands fa-twitter text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                <i className="fa-brands fa-square-instagram cursor-pointer text-lg text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
              </div>
            </div>
          </li>
        </ul>

        <div className="flex flex-col items-center border-t border-primaryColorLight py-5 md:flex-row md:justify-between">
          <p className="paragraph">IBurgerApp by Adeyemi Olaoye</p>
          <p className="paragraph">Copyright @ {_year}. All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
