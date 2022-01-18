import React, {useState} from "react";
import "./AllExpensesModal.css"

function AllExpensesModal(props) {
    
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg" }>
      <div className="BigModal">
        <form action="/" method="post" className="BigModalForm">
          <h2>All Expenses</h2>
          <label for="goal">Goal: </label>
          <input id="modal-input" type="text" name="activity" />
          <button className="submit" type="submit">
            Submit
          </button>

          <div className="modal-close">
            <span onClick={() => props.expenseModalOpen(false)}>x</span>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AllExpensesModal;
