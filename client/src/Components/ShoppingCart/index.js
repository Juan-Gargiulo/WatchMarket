import React, { Component } from "react";
import styled from "styled-components";

import Popover from "material-ui/Popover";
import { List, ListItem } from "material-ui/List";
import FontIcon from "material-ui/FontIcon";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";
import RaisedButton from "material-ui/RaisedButton";

import { postPurchase } from "../../core/purchases/api";

const StyledFloatedButton = styled(FloatingActionButton)`
  position: absolute;
  z-index: 9999;
  right: 0;
  bottom: 0;
  margin-right: 0px;
  margin-bottom: 20px;
`;

const styledList = styled(List)``;

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  confirmPurchase = comment => {
    const purchase = {
      products: this.props.purchases,
      user: this.props.user,
      comment: ""
    };
    this.props.launchSnackbar("su compra se finalizo con existo");
    postPurchase(purchase);
  };

  handleClick = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { purchases, removeFromCart } = this.props;

    const renderPurchases = () => (
      <List>
        <Subheader inset={true}>Compras</Subheader>
        {purchases.map(product => (
          <ListItem
            leftAvatar={<Avatar src={product.imgurl} />}
            rightIcon={
              <FontIcon
                onClick={() => removeFromCart(product)}
                className="material-icons"
                color="black"
                hoverColor="red"
              >
                delete
              </FontIcon>
            }
            primaryText={product.description}
            secondaryText={`$${product.price_args}`}
          />
        ))}
      </List>
    );

    return (
      <StyledFloatedButton secondary={true} onClick={this.handleClick}>
        <FontIcon className="material-icons" color="white">
          shopping_cart
        </FontIcon>
        <Popover
          style={{ height: 500, width: 300 }}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
          targetOrigin={{ horizontal: "right", vertical: "bottom" }}
          onRequestClose={this.handleRequestClose}
        >
          {renderPurchases()}
          <RaisedButton label="CONFIRMAR COMPRA" primary={true} onClick={this.confirmPurchase} />
        </Popover>
      </StyledFloatedButton>
    );
  }
}
