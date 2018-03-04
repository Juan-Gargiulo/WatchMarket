import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'recompose';

import { setProductFilter, setProductType } from '../../core/cards/cardsActions';

import { Container } from './style'

//import Profile from '../Profile'
import Search from '../controls/Search'
import RadioGroup from '../controls/Filter'


const Sidebar = ({...props, filterFn, setTech}) => {
  
  return (
    <Container {...props} >
      <Search
        hintText="search in cards"
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
      setProductType: (e, tech) => dispatch(setProductType(tech))
    })
  )
)

Sidebar.propTypes = {
  filterFn: PropTypes.func,
};

export default enchanced(Sidebar)
