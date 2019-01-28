import React from "react";
import ReactDOM from "react-dom";

import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootSagas from "./core/rootSagas";
import rootReducer from "./core/rootReducer";

import { Routes } from "./Containers/Routes";

import registerServiceWorker from "./registerServiceWorker";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import { injectGlobal } from "styled-components";
import Roboto from "./Roboto.ttf";
import RobotoLight from "./Roboto-Light.ttf";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSagas);

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: "#02b875",
    accent2Color: "yellow",
    primary1Color: "#02b875"
  },
  appBar: {
    height: 50
  }
});

injectGlobal`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto});
    }

    @font-face {
        font-family: 'Roboto-Light';
        src: url(${RobotoLight});
    }

    body{
        font-family: Roboto;
    }
`;

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
