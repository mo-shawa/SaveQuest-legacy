import React, {useState} from "react";
import "./AllExpensesModal.css"

function AllExpensesModal(props) {
    
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg" }>
      <div className="modal">
        <form action="/" method="post">
          <h2>Enter Your New Goal</h2>
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
