import React, { useState } from "react";
import "./LogExpense.css";

function LogExpenseModal(props) {
  
  const [newExpenseForm, setNewExpenseForm] = useState({
    item: '',
    price: ''
  });
  const handleChange = (evt) => {
    const { name, value } = evt.target

    setNewExpenseForm((state) => {
      return {
        ...state,
        [name]: value
      }
    })
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch(`/api/users/:user_id/categories/:cat_id`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            item: newExpenseForm.item,
            price: newExpenseForm.price,
            
          })
        })
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json();

      localStorage.setItem("token", token);

      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      props.setUserInState(userDoc);

    } catch (error) {
      console.log(error.message)
      setNewExpenseForm((state) => {
        return {
          ...state
        }
      })
    }
  }
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="SmallModal nes-container">
       
          <h2 className="ModalHeader">Log Expense</h2>
          <div className="modal-close">
            <span onClick={() => props.modalOpen(false)}>X</span>
          </div> 
          <form className="BigModalForm" onSubmit={handleSubmit}>
          <label>Item: 
          <input id="modal-input" className="ModalInput" type="text" onChange={handleChange} name="item" value={newExpenseForm.item} />
          </label>
          <label>Price: 
          <input id="modal-input" className="ModalInput" onChange={handleChange} name="price" value= {newExpenseForm.price} type="number" />
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
