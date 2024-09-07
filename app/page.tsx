"use client";
import Image from "next/image";
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
