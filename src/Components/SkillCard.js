import React, { Component } from "react";
import "./css/SkillCard.css";

class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
        <h6>{skill.content.title}</h6>
        <img src={skill.content.img} alt={skill.content.title + " not loaded"} />
      </div>
    );
  }
}

export default SkillCard;
