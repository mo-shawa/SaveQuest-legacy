import React, { useState } from "react";
import "./ManageBudgetModal.css";

function ManageBudgetModal(props) {
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="BigModal nes-container is-primary">
        <h2 className="ModalHeader">Manage Budget</h2>
        <div className="modal-close">
          <span onClick={() => props.modalOpen(false)}>x</span>
        </div>
        <div className="ModalDivider">
          <div className="ModaLinksWrapper">
              <ul>
                  <li>New Item</li>
                  <li>Edit Budgets</li>
                  <hr />
                  <ul>
                      <li></li>
                  </ul>
              </ul>
          </div>
          <div className="PiChart">Pi</div>
        </div>
      </div>
    </div>
  );
}
export default ManageBudgetModal;
