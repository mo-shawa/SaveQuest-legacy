import React, { useState } from "react";
import "./LogExpense.css";

function LogExpenseModal(props) {
  const [newExpenseForm, setNewExpenseForm] = useState({
    amount: 0,
    detail: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setNewExpenseForm((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch(
        `/api/users/${props.user._id}/categories/${props.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: newExpenseForm.amount,
            detail: newExpenseForm.detail,
          }),
        }
      );
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      const token = await fetchResponse.json();
      localStorage.setItem("token", token);
      const userData = JSON.parse(atob(token.split(".")[1])).user;
      props.setUserInState(userData);
    } catch (error) {
      console.log(error.message);
      setNewExpenseForm((state) => {
        return {
          ...state,
        };
      });
    }
  };
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="SmallModal nes-container">
        <h2 className="ModalHeader">Log Expense</h2>
        <div
          onClick={() => props.modalOpen(false)}
          className="modal-close nes-btn"
        >
          <span className="xBox">
            <svg className="x"
              xmlns="http://www.w3.org/2000/svg"
              width="26px"
              height="26px"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </div>
        <form className="BigModalForm" onSubmit={handleSubmit}>
          <label>
            Detail:
            <input
              id="modal-input"
              className="ModalInput"
              type="text"
              onChange={handleChange}
              name="detail"
              value={newExpenseForm.detail}
            />
          </label>
          <label>
            Amount:
            <input
              id="modal-input"
              className="ModalInput"
              onChange={handleChange}
              name="amount"
              value={newExpenseForm.amount}
              type="number"
            />
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
