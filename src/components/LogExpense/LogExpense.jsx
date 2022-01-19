import React, { useState } from "react";
import "./LogExpense.css";

function LogExpenseModal(props) {
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="SmallModal nes-container">
       
          <h2 className="ModalHeader">Log Expense</h2>
          <div className="modal-close">
            <span onClick={() => props.modalOpen(false)}>X</span>
          </div> 
          <form className="BigModalForm" action="/" method="post">
          <label>Item: 
          <input id="modal-input" className="ModalInput" type="text" />
          </label>
          <label>Price: 
          <input id="modal-input" className="ModalInput" value= "$" type="number" placeholder="$"/>
          </label>
          <button className="submit nes-btn" type="submit">
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default LogExpenseModal;
