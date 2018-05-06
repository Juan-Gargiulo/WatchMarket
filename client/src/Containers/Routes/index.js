import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Gallery from "../Gallery";
import Detail from "../Detail";
import FormMallas from "../Forms/Mallas";
import FormsPilas from "../Forms/Pilas";
import Login from "../Login";
import Register from "../Login/register";

import { Container } from "./style.js";

export const paths = {
  GALLERY: "/",
  CARD_DETAIL: "/detail/:id",
  FORMMALLAS: "/mallas",
  FORMPILAS: "/pilas",
  LOGIN: "/login",
  REGISTER: "/register"
};

const routes = [
  {
    exact: true,
    path: paths.GALLERY,
    render: props => <Gallery title="Gallery" {...props} />
  },
  {
    path: paths.CARD_DETAIL,
    render: props => <Detail title="Detail" {...props} />
  },
  {
    path: paths.LOGIN,
    render: props => <Login title="Login" {...props} />
  },
  {
    path: paths.REGISTER,
    render: props => <Register title="Register" {...props} />
  },
  {
    path: paths.FORMMALLAS,
    render: props => <FormMallas title="Table" {...props} />
  },
  {
    path: paths.FORMPILAS,
    render: props => <FormsPilas title="Table" {...props} />
  },
  {
    component: () => <h3>No match for this route></h3>
  }
];

export const Routes = ({ ...props }) => (
  <Router>
    <Container>
      <Switch>{routes.map((route, key) => <Route key={key} {...route} />)}</Switch>
    </Container>
  </Router>
);
