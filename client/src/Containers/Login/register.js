import React, { Component } from "react";
import { connect } from "react-redux";
import { userRegister } from "../../core/user/actions";
import { NavLink } from 'react-router-dom';

import { Col, Row, Container } from "react-grid-system";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      errors: {}
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleTextChange = (event, newValue) => {
    this.setState({ [event.target.name]: newValue });
  };

  handleRegister = () => {
    const { fullName, password, email, phone } = this.state;
    const errors = { ...this.state.errors };

    let withError = false;

    if (!fullName) {
      errors.fullName = "El nombre es obligatorio";
      withError = true;
    }
    if (!password) {
      errors.password = "El password es obligatorio";
      withError = true;
    }
    if (!email) {
      errors.email = "El email es obligatorio";
      withError = true;
    }
    if (!phone) {
      errors.phone = "El telefono es obligatorio";
      withError = true;
    }

    if (withError) {
      this.setState({ errors });
      return;
    } else {
      this.setState({ errors: {} });
      this.props.register(this.state);
    }
  };

  render() {
    const styles = {
      container: { display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", height: 600 },
      registerBox: { border: "1px solid grey", padding: "10px 10px 10px 10px" }
    };

    const { errors } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.registerBox}>
          <h3>Registrarme</h3>
          <TextField
            name="email"
            hintText="usuario@mail.com "
            onChange={this.handleTextChange}
            errorText={errors.email}
          />
          <br />
          <TextField
            name="password"
            hintText="password"
            type="password"
            onChange={this.handleTextChange}
            errorText={errors.password}
          />
          <br />
          <TextField
            name="fullName"
            hintText="nombre y apellido"
            onChange={this.handleTextChange}
            errorText={errors.fullName}
          />
          <br />
          <TextField
            name="phone"
            hintText="telefono"
            required
            type={"number"}
            onChange={this.handleTextChange}
            errorText={errors.phone}
          />
          <br />
          <br />
          <RaisedButton onClick={this.handleRegister} label="Registrarse" primary onChange={this.handleLogin} />
          <div>
            <br />
            <p>Ya posees una cuenta?</p>
          <NavLink to={'/login'}><RaisedButton>Ingresar</RaisedButton></NavLink>  
        </div> 
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.user.registerError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: payload => dispatch(userRegister(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
