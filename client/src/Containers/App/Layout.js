import React from "react";

import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  overflow: hidden;
  overflow-x: hidden;
`;

export const Body = styled.div`
  display: inline;
  overflow-y: hidden;
`;

const Shadow = styled.div`
  background-color: grey;
  position: absolute;
  left: 0;
  top: 0;
`;

const Layout = ({ component: Component, ...props }) => {
  return (
    <Container>
      <Header {...props} />
      <Body>
        <Sidebar {...props} />
        <Shadow />
        <Component {...props} />
      </Body>
    </Container>
  );
};

export default Layout;
