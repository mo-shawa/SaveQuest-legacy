import React, { useState } from "react";
import "./ViewExpenses.css";

function ViewExpenseModal(props) {
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="SmallModal">
        <table>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <button className="submit" type="submit">
          Submit
        </button>
        <div className="modal-close">
          <span onClick={() => props.viewModalOpen(false)}>X</span>
        </div>
      </div>
    </div>
  );
}

export default ViewExpenseModal;
