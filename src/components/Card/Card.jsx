import React, { useState, useEffect } from "react";
import "./Card.css";

function Card(props) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (props.expenses) {
      let expenseAmounts = props.expenses.map((expense) => expense.amount);
      let cardTotal = expenseAmounts.reduce((num1, num2) => num1 + num2, 0);
      setTotal(cardTotal);
    }
  }, []);

  return (
    <div className="CardBox">
      <div className="Card nes-container" id="NoPadding">
        <div className="CardTitle"> {props.title} </div>
        <div className="CardProgress">
          <div className="CardProgressValue">
            {total}/{props.max}
          </div>
          <div className="CardProgressBar">
            <progress
              className={total <= props.max ? "nes-progress is-primary ProgressBar" : "nes-progress is-error ProgressBar"}
              id="BarHeight"
              value={total}
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
