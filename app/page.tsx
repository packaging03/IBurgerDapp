import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Promo from "./components/Promo";
import About from "./components/About";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Promo />
      <About />
      <Menu/>
    </>
  );
}
