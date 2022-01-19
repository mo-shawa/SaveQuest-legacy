import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import LogExpenseModal from "../../components/LogExpense/LogExpense";
import ViewExpenseModal from "../../components/ViewExpenses/ViewExpenses";
import ManageBudgetModal from "../../components/ManageBudgetModal/ManageBudgetModal";
import AllExpensesModal from "../../components/AllExpensesModal/AllExpensesModal";
import NewCategoryModal from "../../components/NewCategoryModal/NewCategoryModal";
import EditModal from "../../components/EditModal/EditModal";

export default class MainAppPage extends Component {
  state = {
    LogExpenseModalOpen: false,
    ViewExpenseModalOpen: false,
    AllExpenseModalOpen: false,
    ManageBudgetModalOpen: false,
    NewCategoryModalOpen: false,
    EditModalOpen: false,
    WhichModalOpen: "",
    expenses: [],

    test: {
      labels: ["Food", "Housing", "Entertainment", "Crack", "Misc"],
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: [
            "#B21F00",
            "#C9DE00",
            "#2FDE00",
            "#00A6B4",
            "#6800B4",
          ],
          hoverBackgroundColor: [
            "#501800",
            "#4B5000",
            "#175000",
            "#003350",
            "#35014F",
          ],
          data: [65, 59, 40, 81, 56],
        },
      ],
    },
  };

  OpenManageBudgetModal = (change) => {
    change === true
      ? this.setState({ ManageBudgetModalOpen: true })
      : this.setState({ ManageBudgetModalOpen: false });
  };

  triggerLogExpenseModalOpen = (change) => {
    change === true
      ? this.setState({ LogExpenseModalOpen: true })
      : this.setState({ LogExpenseModalOpen: false });
  };
  triggerEditModalOpen = (change, CatId) => {
    change === true
      ? this.setState({ EditModalOpen: true, WhichModalOpen: CatId })
      : this.setState({ EditModalOpen: false, WhichModalOpen: "" });
  };
  triggerViewExpenseModalOpen = (change, expenses) => {
    change === true
      ? this.setState({ ViewExpenseModalOpen: true, expenses: expenses })
      : this.setState({ ViewExpenseModalOpen: false, expenses: [] });
  };

  triggerAllExpenseModalOpen = (change) => {
    change === true
      ? this.setState({ AllExpenseModalOpen: true })
      : this.setState({ AllExpenseModalOpen: false });
  };
  triggerNewCategoryModalOpen = (change) => {
    change === true
      ? this.setState({ NewCategoryModalOpen: true })
      : this.setState({ NewCategoryModalOpen: false });
  };

  render() {
    return (
      <div className="MainContainer">
        <Sidebar
          expenseModalOpen={this.triggerAllExpenseModalOpen}
          modalOpen={this.OpenManageBudgetModal}
          user={this.props.user}
        />
        <div className="WindowWrapper">
          <div className="TotalBudgetWrapper">
            <div className="TotalBudgetContainer nes-container" id="NoPadding">
              <div className="TotalBudgetTitle ">Total Budget</div>
              <div className="TotalBudgetProgress">
                <div className="TotalBudgetValue">
                  24/{this.props.user.budget.total}
                </div>
                <div className="TotalBudgetBar">
                  <progress
                    class="nes-progress is-primary"
                    id="Margin"
                    value="80"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
          <div className="CardWrapper">
            <div className="CardContainer">
              {this.props.user.budget.categories.map((cat) => {
                return (
                  <Card
                    expenses={cat.expenses}
                    modalOpen={this.triggerLogExpenseModalOpen}
                    viewModalOpen={this.triggerViewExpenseModalOpen}
                    title={cat.name}
                    max={cat.max}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <LogExpenseModal
          modalOpen={this.triggerLogExpenseModalOpen}
          isModalOpen={this.state.LogExpenseModalOpen}
        />

        <ViewExpenseModal
          viewModalOpen={this.triggerViewExpenseModalOpen}
          isModalOpen={this.state.ViewExpenseModalOpen}
          expenses={this.state.expenses}
        />
        <ManageBudgetModal
          test={this.state.test}
          modalOpen={this.OpenManageBudgetModal}
          isModalOpen={this.state.ManageBudgetModalOpen}
          user={this.props.user}
          createModalOpen={this.triggerNewCategoryModalOpen}
          editModalOpen={this.triggerEditModalOpen}
        />
        <AllExpensesModal
          isModalOpen={this.state.AllExpenseModalOpen}
          expenseModalOpen={this.triggerAllExpenseModalOpen}
        />
        <EditModal
          modalOpen={this.triggerEditModalOpen}
          isModalOpen={this.state.EditModalOpen}
          user={this.props.user}
          catName={this.state.WhichModalOpen}
        />

        <NewCategoryModal
          createCat={this.props.createCat}
          isModalOpen={this.state.NewCategoryModalOpen}
          createModalOpen={this.triggerNewCategoryModalOpen}
          user={this.props.user}
          setUserInState={this.props.setUserInState}
        />
      </div>
    );
  }
}
