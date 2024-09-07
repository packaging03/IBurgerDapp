import React from "react";

const ScrollUp = () => {
  return (
    <a
      title="Scroll To Top"
      aria-label="Scroll To Top"
      id="scroll-up"
      href="#"
      className="fixed right-4 -bottom-1/2 bg-secondaryColor shadow-sm inline-block px-4 py-2 rounded-full text-lg text-blackColor z-50 hover:-translate-y-1 ease-in duration-200"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
};

export default ScrollUp;
