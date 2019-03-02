import React, { Component } from "react";
import Fullpage from "../Fullpage";
import data from "../../data.json"
import { SocialIcon } from "react-social-icons";
import "../css/ShowcaseSection.css";

class ShowcaseSection extends Component {
  render() {
    return (
      <Fullpage className="showcase">
          <div className="title">
            <h1>{data.title}</h1>
            <p>{data.subtitle}</p>
            <div className="icon-wrapper">
              {Object.keys(data.links).map(key => {
                return (
                  <div className="icon">
                    <SocialIcon
                      url={data.links[key]}
                      bgColor="#00AEE3"
                      fgColor="white"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Fullpage>
    )
  }
}

export default ShowcaseSection;