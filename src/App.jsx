import React from "react";
import Header from "./components/Header/header";
import AboutMe from "./components/aboutme/aboutme";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
