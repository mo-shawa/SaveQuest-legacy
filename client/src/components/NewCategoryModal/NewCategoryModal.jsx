import React, { useState } from "react";


function NewCategoryModal(props) {

  const [newCatForm, setNewCatForm] = useState({
    name: '',
    max: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target

    setNewCatForm((state) => {
      return {
        ...state,
        [name]: value
      }
    })
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const jwt = localStorage.getItem('token')
    try {
      const fetchResponse = await fetch(`/api/users/${props.user._id}/categories`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + jwt
          },
          body: JSON.stringify({
            name: newCatForm.name,
            max: newCatForm.max,
            expenses: []
          })
        })
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");
      const token = await fetchResponse.json();
      localStorage.setItem('token', token)
      const userData = JSON.parse(atob(token.split(".")[1])).user
      // console.log(userData)
      props.setUserInState(userData)
      // let token = await fetchResponse.json();

      // localStorage.setItem("token", token);

      // const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      // props.setUserInState(userDoc);

    } catch (error) {
      console.log(error.message)
      setNewCatForm((state) => {
        return {
          ...state
        }
      })
    }
  }

  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="BigModal nes-container">
        <h2 className="ModalHeader">Add New Category</h2>
        <div className="modal-close">
          <span onClick={() => props.createModalOpen(false)}>X</span>
        </div>
        <form className="BigModalForm" onSubmit={handleSubmit}>
          <label>
            Category</label>
          <input id="modal-input" className="nes-input" type="text" value={newCatForm.name} name="name" onChange={handleChange} style={{ maxWidth: "500px" }} />

          <label>
            Budget</label>
          <input
            name="max"
            id="modal-input"
            className="nes-input"
            style={{ maxWidth: "500px" }}
            type="number"
            value={newCatForm.max}
            onChange={handleChange}
          />

          <button className="nes-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewCategoryModal;
