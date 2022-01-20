import React, { useState, useEffect } from "react";
import "./ManageBudgetModal.css";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function ManageBudgetModal(props) {
  const data = props.user.budget.categories;

  const [chartData, setChartData] = useState({
    labels: data.map((cat) => cat.name),
    datasets: [
      {
        label: "Budget Allocation",
        data: data.map((c) => c.max),
        backgroundColor: [
          "#ffbb11",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });

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
            <ul>
              <button
                className="nes-btn"
                onClick={() => props.createModalOpen(true)}
              >
                New Item +
              </button>
              <li>Edit Budgets</li>
              <hr />

              {props.user.budget.categories.map((cat) => {
                return (
                  <>
                    <span onClick={() => handleDelete(cat._id)}>DELETE - </span>
                    <li
                      onClick={() => props.editModalOpen(true, cat.name)}
                      catId={cat._id}
                      className="CatLinks"
                    >
                      {cat.name}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="PiChart">
            <Doughnut
              data={chartData}
              options={{
                title: {
                  display: true,
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
