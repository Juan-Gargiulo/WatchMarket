import React from "react";

import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: block;
  flex-direction: column;
  overflow: hidden;
`;

export const Body = styled.div`
  flex: 1 1 auto;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
`;

const Layout = ({ component: Component, ...props }) => (
  <Container>
    <Header {...props} />
    <Body>
      <Sidebar navVisible={true} {...props} />
      <div style={{ flex: 1 }}>
        <Component {...props} />
      </div>
    </Body>
  </Container>
);

export default Layout;
