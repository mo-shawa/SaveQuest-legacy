import React, {useState} from "react";
import "./ManageBudgetModal.css"

function ManageBudgetModal(props) {
    
  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg" }>
      <div className="modal nes-container is-primary">
        <form action="/" method="post">
          <h2>Enter Your New Goal</h2>
          <label for="goal">Goal: </label>
          <input id="modal-input" type="text" name="activity" />
          <button className="submit" type="submit">
            Submit
          </button>

          <div className="modal-close">
            <span onClick={() => props.modalOpen(false)}>x</span>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ManageBudgetModal;
