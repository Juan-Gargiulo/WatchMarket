import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'

import { Redirect } from "react-router";

import { userLogin } from "../../core/user/actions";


import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      }
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleTextChange = (event, newValue) => {
    const user = this.state.user;
    user[event.target.name] = newValue;
    this.setState({ user });
  };

  handleLogin = () => {
    this.props.login(this.state.user);
  };

  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      this.props.login(this.state.user);
    }
  }

  render() {
    //const isLoged = () => JSON.stringify(this.props.user) !== "{}";

    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 600
      },
      loginBox: { border: "1px solid grey", padding: "10px 10px 10px 10px", marginBottom: 20 },
      error: { color: "red" }
    };

    return (
      <div style={styles.container}>
        <div style={styles.loginBox}>
          <h4>Login</h4>
          {this.props.user && <Redirect to="/" />}
          <TextField name="email" hintText="usuario@email.com" onChange={this.handleTextChange} />
          <br />
          <TextField name="password" hintText="password" type="password" onChange={this.handleTextChange} onKeyPress={this.handleKeyPress}/>
          <br />
          <br />
          <RaisedButton label="Login" primary onClick={this.handleLogin} />
          <br />
          <br />
          <div>
          <p>No posees una cuenta?</p>
            <NavLink to={'/register'}><RaisedButton>Registrarse</RaisedButton></NavLink>  
          </div> 
          <span style={styles.error}>{this.props.error}</span>
        </div>

      </div>
    );
  }
}

/* const mapStateToProps = state => {
  return {
    errors: state.user.registerError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: payload => dispatch(userRegister(payload))
  };
}; */

export default connect(
  state => {
    return {
      user: state.user.user,
      error: state.user.loginError
    };
  },
  dispatch => {
    return {
      login: payload => dispatch(userLogin(payload))
    };
  }
)(Login);
