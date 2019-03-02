import React, { Component } from "react";
import "./App.css";
import ShowcaseSection from "./Components/Sections/ShowcaseSection";
import AboutSection from "./Components/Sections/AboutSection";
import SkillsSection from "./Components/Sections/SkillsSection.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <ShowcaseSection />
        <AboutSection />
        <SkillsSection />
      </div>
    );
  }
}

export default App;
