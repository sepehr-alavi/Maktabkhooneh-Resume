import React, { Component } from "react";
import Fullpage from "../Fullpage";
import data from "../../data.json"
import "../css/AboutSection.css";

class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="aboutSection">
          <h3>{data.section[0].title}</h3>
          {data.section[0].items.map(p => {
            return <p>{p.content}</p>;
          })}
        </Fullpage>
    )
  }
}

export default AboutSection;