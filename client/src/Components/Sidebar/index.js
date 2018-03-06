import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'recompose';

import { setProductFilter, setProductType, getProducts } from '../../core/cards/cardsActions';

import { Container } from './style'

//import Profile from '../Profile'
import Search from '../controls/Search'
import RadioGroup from '../controls/Filter'


const Sidebar = ({...props, filterFn, setProductType}) => {
  
  return (
    <Container {...props} >
      <Search
        hintText="buscar.."
        filterFn={filterFn}
      />
      <RadioGroup radioSelected={setProductType}/>
    </Container>
  )
}

const enchanced = compose(
  connect(
    null,
    dispatch => ({
      filterFn: filter => dispatch(setProductFilter(filter)),
      setProductType: (e, tech) => dispatch(getProducts(tech))
    })
  )
)

Sidebar.propTypes = {
  filterFn: PropTypes.func,
};

export default enchanced(Sidebar)
