import React, { useState, useEffect } from "react";

function EditModal(props) {
  const [editCatForm, setEditCatForm] = useState({
    name: props.cat.name,
    max: props.cat.max,
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setEditCatForm((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setEditCatForm((state) => {
      return {
        name: props.cat.name,
        max: props.cat.max
      }
    })
  }, [props.cat.name])


  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch(
        `/api/users/${props.user._id}/categories`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: editCatForm.name,
            max: editCatForm.max,
            expenses: [],
          }),
        }
      );
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json();

      localStorage.setItem("token", token);

      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      props.setUserInState(userDoc);
    } catch (error) {
      console.log(error.message);
      editCatForm((state) => {
        return {
          ...state,
        };
      });
    }
  };

  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="BigModal nes-container">
        <h2 className="ModalHeader">Edit Category</h2>
        <div onClick={() => props.modalOpen(false)} className="modal-close">
          <span >X</span>
        </div>
        <form className="BigModalForm" onSubmit={handleSubmit}>
          <label>Category</label>
          <input
            id="modal-input"
            className="ModalInput"
            type="text"
            value={editCatForm.name}
            name="name"
            onChange={handleChange}
          />

          <label>Budget</label>
          <input
            name="max"
            id="modal-input"
            className="ModalInput"
            type="number"
            value={editCatForm.max}
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

export default EditModal;
