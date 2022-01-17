import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
// import '../../App.css'

export default class MainAppPage extends Component {
  render() {
    return (
      <div className="MainContainer">
        <Sidebar />
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
      </div>
    );
  }
}
