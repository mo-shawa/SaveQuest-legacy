import React, { Component } from "react";
import "./Avatar.css"

class Avatar extends Component {
  render() {
    return (
      <div className="AvatarWrapperWrapper">
        <div className="AvatarWrapper">
          <div id="NoPadding" className="nes-container is-rounded AvatarContainer ">
            <div className="Circle">
              <h2>{this.props.user.name}</h2>
              <div className="innerCircle">
                <img className="Avatar"
                  src="Images/female5.png"
                  alt="gril"
                />
              </div>
              <div className="AvatarLevel">
                <h2 className="LevelValue">Level: 3 </h2>
              </div>
              <div className="AvatarProgressBar">
                <progress
                  class="nes-progress is-success AvatarProgress"
                  id="BarHeight"
                  value="1650"
                  max="2400"
                ></progress>
                <h5>1650/2400xp</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
