import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="CardBox">
      <div className="Card nes-container" id="NoPadding">
        <div className="CardTitle"> {props.title} </div>
        <div className="CardProgress">
          <div className="CardProgressValue">WIP/{props.max}</div>
          <div className="CardProgressBar">
            <progress
              class="nes-progress is-primary"
              id="BarHeight"
              value="80"
              max={props.max}
            ></progress>
          </div>
        </div>
        <div className="CardBtns" id="NoPadding">
          <button
            onClick={() => props.viewModalOpen(true, props.expenses)}
            className="nes-btn CardBtn"
          >
            View Expenses
          </button>
          <button
            onClick={() => props.modalOpen(true, props.id)}
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
