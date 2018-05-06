import React from "react";

import { connect } from "react-redux";

import styled from "styled-components";
import { COLOR } from "../../common/colors";

import RaisedButton from "material-ui/RaisedButton";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
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
  console.log(props);

  //const isLoged = () => JSON.stringify(user) !== "{}";

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
