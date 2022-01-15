import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header"
import ThreeCanvas from "./components/ThreeCanvas/ThreeCanvas";


class App extends Component {
  state = {
    user: null,
  };
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user;
      this.setState({ user: userDoc });
    }
  }
  render(){;
  return (
    <div className="App">
      
      <Header />
      <div className="MainContainer">
        <Sidebar />
          <div className="WindowWrapper"></div>
      </div>
    </div>
  );}
}

export default App;
