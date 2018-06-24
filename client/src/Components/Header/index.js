import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { COLOR } from "../../common/colors";
import RaisedButton from "material-ui/RaisedButton";

import { switchSidebar } from '../../core/app/actions'
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const Header = ({ switchSidebar, user }) => {
  return (
    <Container primary>
      <FontIcon className="material-icons" onClick={switchSidebar} color={red500}>menu</FontIcon>
      {user && <RaisedButton label="salir" primary style={{ marginLeft: "auto" }} />}
    </Container>
  );
};

export default connect(
  state => ({
    user: state.user.user,
    purchases: state.purchases.products
  }),
  dispatch => ({
    switchSidebar: () => dispatch(switchSidebar())
  })
)(Header);
