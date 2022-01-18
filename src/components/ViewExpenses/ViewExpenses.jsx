import React, { useState } from "react";
import "./ViewExpenses.css";

function ViewExpenseModal(props) {
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="SmallModal nes-container">
      <h2 className="ModalHeader">{props.category} Expenses</h2>
        <div className="modal-close">
          <span onClick={() => props.viewModalOpen(false)}>X</span>
        </div>
        <div className="AllExpenseWrapper" id="ViewExpenseWrapper">
        <table>
                  <tr>
                  <th>Item</th>
                  <th>Date</th>
                  <th>Amount</th>
                  </tr>
                  <tr>
                      <td>Anime Pillow</td>
                      <td>Yesterday</td>
                      <td>200$</td>
                  </tr>
                  <tr>
                      <td>Anime Pillow</td>
                      <td>Yesterday</td>
                      <td>200$</td>
                  </tr>
              </table>
          
        </div>

      </div>
    </div>
  );
}

export default ViewExpenseModal;
