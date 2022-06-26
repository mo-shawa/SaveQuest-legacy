import React, { useEffect, useState } from "react";
import "./AllExpensesModal.css";

function AllExpensesModal(props) {
  const [allExpenses, setAllExpenses] = useState([]);

  useEffect(() => {
    console.log(props.user.budget.categories);
    const expenseArray = props.user.budget.categories.map((category) => {
      const tempArray = [];
      category.expenses.forEach((expense) => {
        tempArray.push(expense);
      });
      return tempArray;
    });
    const flatArray = expenseArray.flat();
    console.log(flatArray);
    setAllExpenses(flatArray);
  }, [props]);

  return (
    <div className={props.isModalOpen ? "modal-bg bg-active" : "modal-bg "}>
      <div className="BigModal nes-container">
        <h2 className="ModalHeader">All Expenses</h2>
        <div onClick={() => props.expenseModalOpen(false)} className="modal-close">
          <span >x</span>
        </div>
        <div className="AllExpenseWrapper">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {allExpenses.map((exp) => {
                return (
                  <tr key={exp.detail}>
                    <td>{exp.detail}</td>
                    <td>{exp.createdAt.split('T')[0]}</td>
                    <td>{exp.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default AllExpensesModal;
