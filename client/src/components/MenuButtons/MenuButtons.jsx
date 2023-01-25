import React, { Component } from "react";
import "./MenuButtons.css";
class MenuButtons extends Component {
  render() {
    return (
      <div className="MenuButtonWrapper">
        <div className="MenuButtonContainer">
          <button
            onClick={() => this.props.expenseModalOpen(true)}
            className="nes-btn btn"
          >
            Expenses
          </button>
          <button
            onClick={() => this.props.modalOpen(true)}
            className="nes-btn btn"
          >
            Budget
          </button>
        </div>
      </div>
    );
  }
}

export default MenuButtons;
