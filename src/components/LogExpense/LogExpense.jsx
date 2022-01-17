import React, { useState } from "react";
import "./LogExpense.css";

function LogExpenseModal(props) {
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="modal">
        <form action="/" method="post">
          <h1>Log Expense</h1>
          <label>Item:</label>
          <input id="modal-input" type="text" />
          <label>Price:</label>
          <input id="modal-input" type="number" />
          <button className="submit" type="submit">
            Submit
          </button>
          <div className="modal-close">
            <span onClick={() => props.modalOpen(false)}>X</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogExpenseModal;
