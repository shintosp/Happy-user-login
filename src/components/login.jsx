import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import userList from "./userList";

class Login extends Component {
  constructor() {
    super();
    this.nameRef = React.createRef();
    this.passRef = React.createRef();
    this.state = {
      userName: "",
      password: "",
      errorMsg: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleInput = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };
  formValidator = () => {
    if (this.state.errorMsg != false) {
      return <p className="errorMsg">{this.state.errorMsg}</p>;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    // sessionStorage.setItem("userName", this.state.userName);
    // sessionStorage.setItem("password", this.state.password);
    let uName = this.nameRef.current.value;
    let uPass = this.passRef.current.value;
    if (uName !== "hruday@gmail.com" || uPass !== "hruday123") {
      this.setState({
        errorMsg:
          "UserName or password is not matching(uname: hruday@gmail.com, pass: hruday123)"
      });
    } else {
      this.props.history.push("/userList");
    }
    //return <Redirect to="/users" />
  };

  render() {
    return (
      <div className="align-center">
        <form>
          <h1>Login</h1>
          {this.formValidator()}
          <input
            name="userName"
            ref={this.nameRef}
            type="text"
            onChange={this.handleInput}
          />
          <input
            name="password"
            ref={this.passRef}
            type="password"
            onChange={this.handleInput}
          />
          <button onClick={this.handleSubmit}>Sign In</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
