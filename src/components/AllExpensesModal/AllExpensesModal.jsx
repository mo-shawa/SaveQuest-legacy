import React, {useState} from "react";
import "./AllExpensesModal.css"

function AllExpensesModal(props) {
    
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg " }>
      <div className="BigModal nes-container">
        <h2 className="ModalHeader">All Expenses</h2>
          <div onClick={() => props.expenseModalOpen(false)} className="modal-close">
            <span >x</span>
          </div>
          <div className="AllExpenseWrapper">
          
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
export default AllExpensesModal;
