import React, { Component } from "react";
import "./Avatar.css"

class Avatar extends Component {
  render() {
    return (
      <div className="AvatarWrapper">
        <div id="NoPadding"className="nes-container is-rounded AvatarContainer ">
          <div className="Circle">
        
          <img className="Avatar"
            src="Images/female5.png"
            alt="gril"
          />
          
          <h2>Level: 5 </h2>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
