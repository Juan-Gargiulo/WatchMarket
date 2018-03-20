import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Containers/App'
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { injectGlobal } from 'styled-components';
import Roboto from './Roboto.ttf';
import RobotoLight from './Roboto-Light.ttf'

import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import rootSagas from './core/rootSagas'
import rootReducer from './core/rootReducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
<<<<<<< HEAD
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
=======
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
>>>>>>> a4a2123ec8ce16df935eb523f93a5b580b4d8699
    )
)

sagaMiddleware.run(rootSagas)

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
`

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();


