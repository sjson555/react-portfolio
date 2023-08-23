import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectList from "./components/Project/ProjectList";
import Skills from "./components/Skills";
import "./styles/global.css";


function App() {
  return (
    <div className="App">
          <Header />
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="project">
            <ProjectList />
          </div>
          <div id="contact">
            <Contact />
          </div>
    </div>
  );
}

export default App;
