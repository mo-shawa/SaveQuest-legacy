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
          className="modal-close "
        >
          <span >
            x
          </span>
        </div>
        <form className="BigModalForm" onSubmit={handleSubmit}>
          <div className="nes-field">
            <label>
              Detail:
            </label>
            <input
              id="modal-input"
              className="nes-input"
              style={{ maxWidth: "500px" }}
              type="text"
              onChange={handleChange}
              name="detail"
              value={newExpenseForm.detail}
            />
          </div>
          <div className="nes-field">
            <label>
              Amount:
            </label>
            <input
              id="modal-input"
              className="nes-input"
              style={{ maxWidth: "500px" }}
              onChange={handleChange}
              name="amount"
              value={newExpenseForm.amount}
              type="number"
            />
          </div>
          <button className="submit nes-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogExpenseModal;
