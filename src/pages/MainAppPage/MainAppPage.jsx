import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import LogExpenseModal from "../../components/LogExpense/LogExpense";
import ViewExpenseModal from "../../components/ViewExpenses/ViewExpenses";
import ManageBudgetModal from "../../components/ManageBudgetModal/ManageBudgetModal";
import AllExpensesModal from "../../components/AllExpensesModal/AllExpensesModal";
export default class MainAppPage extends Component {
  state = {
    LogExpenseModalOpen: false,
    ViewExpenseModalOpen: false,
    AllExpenseModalOpen: false,
    ManageBudgetModalOpen: false,
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

  triggerViewExpenseModalOpen = (change) => {
    change === true
      ? this.setState({ ViewExpenseModalOpen: true })
      : this.setState({ ViewExpenseModalOpen: false });
  };

  triggerAllExpenseModalOpen = (change) => {
    change === true
      ? this.setState({ AllExpenseModalOpen: true })
      : this.setState({ AllExpenseModalOpen: false });
  };

  render() {
    return (
      <div className="MainContainer">
        <Sidebar
          expenseModalOpen={this.triggerAllExpenseModalOpen}
          modalOpen={this.OpenManageBudgetModal}
        />
        <div className="WindowWrapper">
          <div className="TotalBudgetWrapper">
            <div className="TotalBudgetContainer nes-container" id="NoPadding">
              <div className="TotalBudgetTitle ">Total Budget</div>
              <div className="TotalBudgetProgress">
                <div className="TotalBudgetValue">24/25</div>
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
              <Card
                modalOpen={this.triggerLogExpenseModalOpen}
                viewModalOpen={this.triggerViewExpenseModalOpen}
                title="Food"
              />
              <Card title="Housing" />
              <Card title="Entertainment" />
              <Card title="Misc" />
              <Card title="Self-Improvement" />
              <Card title="Crack" />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="log-expense">
          <LogExpenseModal
            modalOpen={this.triggerLogExpenseModalOpen}
            isModalOpen={this.state.LogExpenseModalOpen}
          />
        </div>

        <ViewExpenseModal
          viewModalOpen={this.triggerViewExpenseModalOpen}
          isModalOpen={this.state.ViewExpenseModalOpen}
        />
        <ManageBudgetModal
          modalOpen={this.OpenManageBudgetModal}
          isModalOpen={this.state.ManageBudgetModalOpen}
        />
        <AllExpensesModal
          isModalOpen={this.state.AllExpenseModalOpen}
          expenseModalOpen={this.triggerAllExpenseModalOpen}
        />
      </div>
    );
  }
}