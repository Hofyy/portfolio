'use client';

import { JSX } from "react";
import MainPage from "./mainpage";
import About from "./about";
import Projects from "./projects";
import Footer from "./Footer";
import Lebenslauf from "./lebenslauf";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <MainPage />
      <About />
      <Lebenslauf />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
