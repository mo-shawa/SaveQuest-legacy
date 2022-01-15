import React, { Component } from "react";
import "./Avatar.css"

class Avatar extends Component {
  render() {
    return (
      <div className="AvatarWrapper">
        <div className="Circle">
          <img className="Avatar"
            src="https://cdn.discordapp.com/attachments/180730909388046336/931579974845075526/female9.PNG"
            alt="gril"
          />
        </div>
      </div>
    );
  }
}

export default Avatar;
