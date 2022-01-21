import React, { Component } from "react";
import "./Avatar.css"

class Avatar extends Component {
  state = {
    experience: this.props.exp,
    level: 1,
    nextLevelExp: 100,
    img: 'Images/female5.png'
  }

  componentDidMount() {
    if (this.state.experience > this.state.nextLevelExp) {

      this.setState((state) => {
        return {
          ...state,
          experience: (this.state.experience - this.state.nextLevelExp),
          level: state.level + 1,
          nextLevelExp: state.nextLevelExp * 2,
          img: 'Images/female7.png'
        }
      })
    }
    if (this.props.exp < 100) {
      this.setState((state) => {
        return {
          ...state,
          level: 1,
          nextLevelExp: 100,
          img: 'Images/female5.png'
        }
      })
    }


  }
  render() {
    return (
      <div className="AvatarWrapperWrapper">
        <div className="AvatarWrapper">
          <div id="NoPadding" className="nes-container is-rounded AvatarContainer ">
            <div className="Circle">
              <h2>{this.props.user.name}</h2>
              <div className="innerCircle">
                <img className="Avatar"
                  src={this.state.img}
                  alt="gril"
                />
              </div>
              <div className="AvatarLevel">
                <h2 className="LevelValue">Level: {this.state.level}</h2>
              </div>
              <div className="AvatarProgressBar">
                <progress
                  class="nes-progress is-success AvatarProgress"
                  id="BarHeight"
                  value={this.state.experience}
                  max={this.state.nextLevelExp}
                ></progress>
                <h5>{this.state.experience}/{this.state.nextLevelExp}xp</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
