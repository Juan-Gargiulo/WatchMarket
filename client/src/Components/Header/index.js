import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { COLOR } from "../../common/colors";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

import { Link } from "react-router-dom";

import { switchSidebar } from "../../core/app/actions";
import FontIcon from "material-ui/FontIcon";
import { red500 } from "material-ui/styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  height: 60px;
  width: 100%;
  background-color: ${COLOR.secondaryColor};
`;

export const Logo = styled.img.attrs({
  src: "../img/watch.png"
})`
  height: 39px;
  width: 35px;
`;

const Header = ({ switchSidebar, navVisible, user }) => {
  return (
    <Container primary>
      <FontIcon className="material-icons" onClick={switchSidebar} color={"white"}>
        {navVisible ? "close" : "menu"}
      </FontIcon>
      {
        <Link to="/">
          <FlatButton secondary>Galleria</FlatButton>
        </Link>
      }
      {user && user.admin && (
        <Link to="/pilas">
          <FlatButton secondary>Alta Pilas |</FlatButton>
        </Link>
      )}
      {user && user.admin && (
        <Link to="/mallas">
          <FlatButton secondary>Alta Mallas |</FlatButton>
        </Link>
      )}
      {user && user.admin && (
        <Link to="/compras">
          <FlatButton secondary>Compras</FlatButton>
        </Link>
      )}
      {user ? (
        <RaisedButton label="salir" primary style={{ marginLeft: "auto" }} />
      ) : (
        <Link to="/login" style={{ marginLeft: "auto" }}>
          <RaisedButton label="Login" primary />
        </Link>
      )}
    </Container>
  );
};

export default connect(
  state => ({
    user: state.user.user,
    purchases: state.purchases.products,
    navVisible: state.app.navVisible
  }),
  dispatch => ({
    switchSidebar: () => dispatch(switchSidebar())
  })
)(Header);
