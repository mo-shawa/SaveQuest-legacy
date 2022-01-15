import React, { Component } from "react";
import "./App.css";

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

  render() {
    return (
      <main className="App">
        <h1>hello</h1>
      </main>
    );
  }
}

export default App;
