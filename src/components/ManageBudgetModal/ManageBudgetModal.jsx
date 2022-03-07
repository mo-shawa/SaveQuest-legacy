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
        borderColor: "black",
        data: data.map((c) => c.max),
        borderWidth: "4",
        textStrokeWidth: '12',
        borderColor: "rgba(0, 0, 0, 1)",
        backgroundColor: [
          "#ff82fd",
          "#f7a334",
          "#5dde62",
          "#428def",
          "#424aef",
          "#efe742",
          "#073ab0",
          "#07b024",
          "#b00738",
          "#23fdec",
          "#f2f11b",
          "#fd5456",
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

      const token = await fetchResponse.json();
      localStorage.setItem("token", token);
      const userData = JSON.parse(atob(token.split(".")[1])).user;
      console.log(userData);
      props.setUserInState(userData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div onClick={() => props.modalOpen(false)} className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="BigModal nes-container is-primary">
        <h2 className="ModalHeader">Manage Budget</h2>
        <div onClick={() => props.modalOpen(false)} className="modal-close">
          <span >x</span>
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
                      <span
                        className="Trash"
                        onClick={() => handleDelete(cat._id)}
                      >
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
                        onClick={() => props.editModalOpen(true, cat)}
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
              data={chartData}

              options={{
                title: {
                  display: true,
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                  fontColor: "#000000",
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
