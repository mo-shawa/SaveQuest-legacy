import React, { Component } from "react";
import "./Sidebar.css";
import Avatar from "../Avatar/Avatar";
import MenuButtons from "../MenuButtons/MenuButtons";
import Stats from "../Stats/Stats";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar " id="NoPadding">
        <Avatar user={this.props.user} />
        <Stats />
        <MenuButtons expenseModalOpen={this.props.expenseModalOpen} modalOpen={this.props.modalOpen} />
      </div>
    );
  }
}

export default Sidebar;
