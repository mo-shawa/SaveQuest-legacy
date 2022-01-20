import React, { useState } from "react";
import "./ManageBudgetModal.css";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function ManageBudgetModal(props) {
  const handleDelete = async (cat_id) => {
    try {
      const fetchResponse = await fetch(
        `/api/users/${props.user._id}/categories/${cat_id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!fetchResponse.ok) throw new Error("Delete failed!");

      const userData = await fetchResponse.json();
      props.setUserInState(userData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="BigModal nes-container is-primary">
        <h2 className="ModalHeader">Manage Budget</h2>
        <div className="modal-close">
          <span onClick={() => props.modalOpen(false)}>x</span>
        </div>
        <div className="ModalDivider">
          <div className="ModaLinksWrapper">
            <ul className="ManageLeftWrapper">
              <button
                className="nes-btn"
                onClick={() => props.createModalOpen(true)}
              >
                New Item +
              </button>
              <li>Edit Budgets</li>
              <hr />
              <div className="ListWrapper">
              {props.user.budget.categories.map((cat) => {
                return (
                  <div className="listItems">
                    <span className="Trash" onClick={() => handleDelete(cat._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>{" "}
                    </span>
                    <li
                      onClick={() => props.editModalOpen(true, cat.name)}
                      catId={cat._id}
                      className="CatLinks"
                    >
                    {cat.name}
                    </li>
                  </div>
                );
              })}
              </div>
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
