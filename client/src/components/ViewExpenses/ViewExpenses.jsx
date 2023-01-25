import React, { useState } from "react";
import AllExpensesModal from "../AllExpensesModal/AllExpensesModal";
import "./ViewExpenses.css";

function ViewExpenseModal(props) {
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="SmallModal nes-container">
        <h2 className="ModalHeader">{props.category} Expenses</h2>
        <div onClick={() => props.viewModalOpen(false)} className="modal-close">
          <span >x</span>
        </div>
        <div className="AllExpenseWrapper" id="ViewExpenseWrapper">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {props.expenses.map((expense) => {
                return (
                  <tr>
                    <td>{expense.detail}</td>
                    <td>{expense.createdAt.split('T')[0]}</td>
                    <td>{expense.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewExpenseModal;
