import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Gallery from '../Gallery'
import Detail from '../Detail'
import FormMallas from '../Forms/Mallas'

import { Container } from './style.js'

export const paths = {
  GALLERY: '/',
  CARD_DETAIL: '/detail/:id',
  FORM_MALLAS: '/mallas'
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
    path: paths.FORM,
    render: props => <FormMallas title="Table" {...props} />
  },
  {
    component: () => <h3>No match for this route></h3>
  }
];



export const Routes = ({...props}) => (
    <Router>
        <Container>
          <Switch>
            { routes.map( (route, key) => <Route key={key} {...route} /> ) }
          </Switch>
        </Container>
    </Router>
)
