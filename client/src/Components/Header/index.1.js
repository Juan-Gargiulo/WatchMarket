import React from "react";

import styled from "styled-components";
import { COLOR } from "../../common/colors";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import NavigationClose from "material-ui/svg-icons/navigation/close";

import FontIcon from "material-ui/FontIcon";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  height: 60px;
  background-color: ${COLOR.secondaryColor};
`;

export const Logo = styled.img.attrs({
  src: "../img/avalith.png"
})`
  height: 39px;
  width: 35px;
`;

const leftButtonMenu = props => {
  <div>
    hola
    <FontIcon className="fas fa-shopping-cart" color="white" hoverColor="pink" />
  </div>;
};

const Logged = props => (
  <IconMenu
    {...props}
    iconButtonElement={<FontIcon className="fas fa-shopping-cart" color="white" hoverColor="pink" />}
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

const Header = ({ toggleSidebar, ...props }) => (
  <AppBar title="Title" iconElementLeft={<Logo onClick={toggleSidebar} />} iconElementRight={<Logged />} />
);

export default Header;
