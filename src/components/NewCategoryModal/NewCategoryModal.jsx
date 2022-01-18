import React from "react";

function NewCategoryModal(props) {
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg"}>
      <div className="BigModal nes-container">
        <h2 className="ModalHeader">Add New Category</h2>
        <div className="modal-close">
          <span onClick={() => props.createModalOpen(false)}>X</span>
        </div>
        <form className="BigModalForm" action="/" method="post">
          <label>
            Category</label>
            <input id="modal-input" className="ModalInput" type="text" />
          
          <label>
            Budget</label>
            <input
              id="modal-input"
              className="ModalInput"
              value="$"
              type="number"
              placeholder="$"
            />
          
          <button className="submit nes-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewCategoryModal;
