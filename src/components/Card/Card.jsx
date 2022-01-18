import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="CardBox">
      <div className="Card nes-container" id="NoPadding">
        <div className="CardTitle"> {props.title} </div>
        <div className="CardProgress">
          <div className="CardProgressValue">24/25</div>
          <div className="CardProgressBar">
            <progress
              class="nes-progress is-primary"
              id="BarHeight"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="CardBtns" id="NoPadding">
          <button
            onClick={() => props.viewModalOpen(true)}
            className="nes-btn CardBtn"
          >
            View Expenses
          </button>
          <button
            onClick={() => props.modalOpen(true)}
            className="nes-btn CardBtn"
          >
            Log Expense
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;