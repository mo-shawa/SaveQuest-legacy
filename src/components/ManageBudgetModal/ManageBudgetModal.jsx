import React, { useState } from "react";
import "./ManageBudgetModal.css";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

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
              <button className="nes-btn" onClick={() => props.createModalOpen(true) }>New Item +</button>
              <li>Edit Budgets</li>
              <hr />
              
              {props.user.budget.categories.map(cat => {
                return <li onClick={() => props.editModalOpen(true, cat.name)} catId={cat._id} className="CatLinks">{cat.name}</li>
              })}
              
            </ul>
          </div>
          <div className="PiChart">
            <Doughnut
              data={props.test}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManageBudgetModal;
