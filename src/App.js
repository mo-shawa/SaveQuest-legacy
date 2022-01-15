import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header"
import AuthPage from "./pages/AuthPage/AuthPage";
import MainAppPage from "./pages/MainAppPage/MainAppPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route, Link } from "react-router-dom";



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

      <Routes>
        <Route path='auth' element={<AuthPage />} />
        <Route path='app' element={<MainAppPage />} />
        <Route path='landing' element={<LandingPage />} />
      </Routes>
    </div>
  );}
}

export default App;
