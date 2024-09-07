"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Promo from "./components/Promo";
import About from "./components/About";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

export default function Home() {
  const [backToTop, setBackToTop] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
    window.addEventListener("scroll", () => {
      setActiveLinks();
    });
  }, []);

  useEffect(() => {
    const scrollUpBtn = document.getElementById("scroll-up");
    const headerNavBar = document.getElementById("header");
    if (backToTop) {
      if (scrollUpBtn) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
      }
      if (headerNavBar) {
        headerNavBar.classList.add("shadow-sm", "shadow-secondaryColor");
      }
    } else {
      if (scrollUpBtn) {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
      }
      if (headerNavBar) {
        headerNavBar.classList.remove("shadow-sm", "shadow-secondaryColor");
      }
    }
  }, [backToTop]);

  const setActiveLinks = () => {
    let all_sections = document.querySelectorAll("section");
    let all_navlinks = document.querySelectorAll(".nav__link");
    let current = "home";

    all_sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        current = section.getAttribute("id")!;
      }
    });

    all_navlinks.forEach((nav) => {
      nav.classList.remove("text-secondaryColor");
      if (nav.href.includes(current)) {
        nav.classList.add("text-secondaryColor");
      }
    });
  };

  const scroller = () => {
    let sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
    sr.reveal(".home__image");
    sr.reveal(".home__content", { origin: "bottom" });
    sr.reveal(".category_card", { interval: 300 });
    sr.reveal(".promo__card_1", { origin: "left" });
    sr.reveal(".promo__card_2", { origin: "right" });
    sr.reveal(".about_img", { origin: "bottom" });
    sr.reveal(".about_content", { origin: "top" });
    sr.reveal(".menu_content", { origin: "left" });
    sr.reveal(".review_content", { origin: "right" });
    sr.reveal(".footer");
  };
  useEffect(() => {
    scroller();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Promo />
      <About />
      <Menu />
      <Review />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  );
}
