import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header"
import AuthPage from "./pages/AuthPage/AuthPage";
import MainAppPage from "./pages/MainAppPage/MainAppPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { token } from "morgan";



class App extends Component {
  state = {
    user: null,
  };
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  userLogout = () => {
    this.setState({ user: null })
    localStorage.removeItem('token')
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user;
      this.setState({ user: userDoc });
    }
  }

  render() {
    ;
    return (
      <div className="App">
        <Header user={this.state.user} />

        <Routes>
          <Route path='auth' element={<AuthPage userLogout={this.userLogout} setUserInState={this.setUserInState} />} />
          <Route path='app' element={<MainAppPage />} />
          <Route path='landing' element={<LandingPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
