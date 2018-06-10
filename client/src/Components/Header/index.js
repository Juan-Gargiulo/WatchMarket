import React from "react";

import { connect } from "react-redux";

import styled from "styled-components";
import { COLOR } from "../../common/colors";

import RaisedButton from "material-ui/RaisedButton";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: ${COLOR.secondaryColor};
`;

export const Logo = styled.img.attrs({
  src: "../img/avalith.png"
})`
  height: 39px;
  width: 35px;
`;

const Header = ({ toggleSidebar, user, ...props }) => {
  return (
    <Container primary>
      <Logo onClick={toggleSidebar} />
      {user && <RaisedButton label={user.email} primary style={{ marginLeft: "auto" }} />}
    </Container>
  );
};

export default connect(state => {
  return {
    user: state.user.user
  };
}, null)(Header);
