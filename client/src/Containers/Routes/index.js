import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Gallery from "../Gallery";
import FormMallas from "../Forms/Mallas";
import FormsPilas from "../Forms/Pilas";
import Login from "../Login";
import Register from "../Login/register";
import Compras from "../Forms/Compras";

import Layout from "../App/Layout";

import { Container } from "./style.js";

export const paths = {
  GALLERY: "/",
  CARD_DETAIL: "/detail/:id",
  FORMMALLAS: "/mallas",
  FORMPILAS: "/pilas",
  LOGIN: "/login",
  REGISTER: "/register",
  PURCHASES: "/compras"
};

const routes = [
  {
    exact: true,
    path: paths.GALLERY,
    render: props => <Layout component={Gallery} navVisible {...props} />
  },
  /*   {
    path: paths.CARD_DETAIL,
    render: props => <Detail title="Detail" {...props} />
  }, */
  {
    path: paths.LOGIN,
    render: props => <Layout component={Login} navVisible={false} {...props} />
  },
  {
    path: paths.REGISTER,
    render: props => <Layout component={Register} {...props} />
  },
  {
    path: paths.FORMMALLAS,
    render: props => <Layout component={FormMallas} {...props} />
  },
  {
    path: paths.FORMPILAS,
    render: props => <Layout component={FormsPilas} {...props} />
  },
  {
    path: paths.PURCHASES,
    render: props => <Layout component={Compras} {...props} />
  },
  {
    component: () => <h3>Esta ruta no existe></h3>
  }
];

export const Routes = ({ ...props }) => (
  <Router>
    <Switch>
      {routes.map((route, key) => (
        <Route key={key} {...route} />
      ))}
    </Switch>
  </Router>
);
