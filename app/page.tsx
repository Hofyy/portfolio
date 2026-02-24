'use client';

import { JSX } from "react";
import MainPage from "./mainpage";
import About from "./about";
import Projects from "./projects";

export default function Home() {
  return (
    <>
      <MainPage />
      <About />
      <Projects />
    </>
  );
}
