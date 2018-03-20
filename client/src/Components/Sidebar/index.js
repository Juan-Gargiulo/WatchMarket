import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'recompose';

import { setProductFilter, getProducts } from '../../core/cards/cardsActions';

import { Container } from './style'

//import Profile from '../Profile'
import RadioGroup from '../controls/Filter'

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";


const PilasFilters = ({ handleChangeSelect, filters }, ...props) => {
  return <div>
    <SelectField
      labelStyle={{ color: 'white' }}
      floatingLabelStyle={{ color: 'white' }}
      floatingLabelText="Marca"
      value={filters.marca}
      onChange={handleChangeSelect("marca")}
    >
      <MenuItem value={0} primaryText="todas" />
      <MenuItem value={"renata"} primaryText="Renata" />
      <MenuItem value={"sony"} primaryText="Sony" />
      <MenuItem value={"mimic"} primaryText="Mimic" />
    </SelectField>

{/*     <SelectField
      labelStyle={{ color: 'white' }}
      floatingLabelStyle={{ color: 'white' }}
      floatingLabelText="Modelo"
      value={filters.modelo}
      onChange={handleChangeSelect("modelo")}
    >
      <MenuItem value={0} primaryText="todas" />
      <MenuItem value={10} primaryText="10 mm" />
      <MenuItem value={12} primaryText="12 mm" />
      <MenuItem value={14} primaryText="14 mm" />
    </SelectField> */}

    <SelectField
      labelStyle={{ color: 'white' }}
      floatingLabelStyle={{ color: 'white' }}
      floatingLabelText="Origen"
      value={filters.origen}
      onChange={handleChangeSelect("origen")}
    >
      <MenuItem value={0} primaryText="todas" />
      <MenuItem value={"suiza"} primaryText="Suiza" />
      <MenuItem value={"japon"} primaryText="Japon" />
      <MenuItem value={"china"} primaryText="China" />
    </SelectField>

  </div>
}

const MallasFilters = ({ handleChangeSelect, filters }, ...props) => {
  return <div>
    <SelectField
      labelStyle={{ color: 'white' }}
      floatingLabelStyle={{ color: 'white' }}
      floatingLabelText="Medida"
      value={filters.medida}
      onChange={handleChangeSelect("medida")}
    >
      <MenuItem value={0} primaryText="todas" />
      <MenuItem value={10} primaryText="10 mm" />
      <MenuItem value={12} primaryText="12 mm" />
      <MenuItem value={14} primaryText="14 mm" />
      <MenuItem value={16} primaryText="16 mm" />
      <MenuItem value={18} primaryText="18 mm" />
      <MenuItem value={20} primaryText="20 mm" />
      <MenuItem value={22} primaryText="22 mm" />
      <MenuItem value={24} primaryText="24 mm" />
      <MenuItem value={26} primaryText="26 mm" />
      <MenuItem value={28} primaryText="28 mm" />
      <MenuItem value={30} primaryText="30 mm" />
      <MenuItem value={32} primaryText="32 mm" />
      <MenuItem value={34} primaryText="34 mm" />
      <MenuItem value={38} primaryText="38 mm" />
    </SelectField>

    <SelectField
      labelStyle={{ color: 'white' }}
      floatingLabelStyle={{ color: 'white' }}
      floatingLabelText="color"
      value={filters.color}
      onChange={handleChangeSelect("color")}
    >
      <MenuItem value={0} primaryText="todos" />
      <MenuItem value={"negro"} primaryText="negro" />
      <MenuItem value={"gris"} primaryText="gris" />
      <MenuItem value={"marron oscuro"} primaryText="marron oscuro" />
      <MenuItem value={"marron claro"} primaryText="marron claro" />
      <MenuItem value={"marron tostado"} primaryText="marron tostado" />
      <MenuItem value={"blanco"} primaryText="blanco" />
      <MenuItem value={"blanco"} primaryText="blanco" />
      <MenuItem value={"rosa"} primaryText="rosa" />
    </SelectField>
  </div>
}

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      filtros: {
        medida: 0,
        color: 0,
        marca: 0,
        modelo: 0,
        origen: 0
      }
    }
  }

  handleChangeSelect = from => (event, index, value) => {
    const filtros = this.state.filtros;
    filtros[from] = value;
    this.setState({ filtros });
    let newFiltros = Object.assign({}, this.state.filtros)
    this.props.setProductFilters(newFiltros)
  };

  render() {

    const { setProductType, productType } = this.props
    const { filtros } = this.state

    return (
      <Container {...this.props} >

        <RadioGroup radioSelected={setProductType} />

        {
          productType === "mallas" ?
            <MallasFilters handleChangeSelect={this.handleChangeSelect.bind(this)} filters={filtros}/> :
            <PilasFilters handleChangeSelect={this.handleChangeSelect.bind(this)} filters={filtros}/>
        }


        <br />
      </Container>
    )
  }
}


const enchanced = compose(
  connect(
    state => ({
      productType: state.products.productType,
      filters: state.products.filter
    }),
    dispatch => ({
      filterFn: filter => dispatch(setProductFilter(filter)),
      setProductType: (e, type) => dispatch(getProducts(type)),
      setProductFilters: filters => dispatch(setProductFilter(filters))
    })
  )
)

Sidebar.propTypes = {
  filterFn: PropTypes.func,
};

export default enchanced(Sidebar)
