import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./AuthPage.css";

export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <div id="AuthPage">
        <div className="LoginContainer">
          <div className="LoginHeader">
            {/* <Logo /> */}
            <h3
              onClick={() =>
                this.setState({ showLogin: !this.state.showLogin })
              }
            >
              {this.state.showLogin ? "SIGN UP" : "LOG IN"}
            </h3>
          </div>
          <div className="LoginForm">
            {this.state.showLogin ? (
              <LoginForm setUserInState={this.props.setUserInState} />
            ) : (
              <SignUpForm setUserInState={this.props.setUserInState} />
            )}
          </div>
          <button className="nes-btn" onClick={() => this.props.userLogout()}>LOGOUT</button>
        </div>
      </div>
    );
  }
}
