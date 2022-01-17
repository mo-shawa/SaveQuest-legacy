import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
// import '../../App.css'
import ManageBudgetModal from "../../components/ManageBudgetModal/ManageBudgetModal";


export default class MainAppPage extends Component {
  state={
    ManageBudgetModalOpen:false,
  }
  OpenManageBudgetModal = (change) => {
    change === true ? this.setState({ManageBudgetModalOpen: true}) : this.setState({ManageBudgetModalOpen: false})
  }
  render() {
    return (
      <div className="MainContainer">
        <Sidebar modalOpen = {this.OpenManageBudgetModal}/>
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
              <Card title="Food"/>
              <Card title="Housing"/>
              <Card title="Entertainment"/>
              <Card title="Misc"/>
              <Card title="Self-Improvement"/>
              <Card title="Crack"/>
              <Card />
              <Card />
            </div>
          </div>
        </div>
        
        <ManageBudgetModal modalOpen = {this.OpenManageBudgetModal} isModalOpen = {this.state.ManageBudgetModalOpen} /> 
        
      </div>
    );
  }
}
