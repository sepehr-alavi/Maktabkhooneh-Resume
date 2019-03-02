import React, { Component } from "react";
import Fullpage from "../Fullpage";
import data from "../../data.json";
import "../css/SkillsSection.css";
import SkillCard from "../SkillCard";

class SkillsSection extends Component {
  render() {
    return (
      <Fullpage className="skillsSection">
        <h3>{data.section[1].title}</h3>
        <div className="card-wrapper">
          {data.section[1].items.map(skill => {
            return <SkillCard skill={skill} />;
          })}
        </div>
      </Fullpage>
    );
  }
}

export default SkillsSection;
