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
            <h3>
              {this.state.showLogin ? "LOG IN" : "SIGN UP"}
            </h3>
          </div>
          <div className="LoginForm">
            {this.state.showLogin ? (
              <LoginForm setUserInState={this.props.setUserInState} />
            ) : (
              <SignUpForm setUserInState={this.props.setUserInState} />
            )}
            <span onClick={() =>
              this.setState({ showLogin: !this.state.showLogin })
            }>{this.state.showLogin ? 'Click here to Sign Up' : 'Click here to Log in'}</span>
          </div>
        </div>
      </div>
    );
  }
}
