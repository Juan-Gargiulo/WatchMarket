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
<<<<<<< HEAD
      <MenuItem value={10} primaryText="10 mm" />
      <MenuItem value={12} primaryText="12 mm" />
      <MenuItem value={14} primaryText="14 mm" />
    </SelectField> */}
=======
      <MenuItem value={"301"} primaryText="301" />
      <MenuItem value={"303"} primaryText="303" />
      <MenuItem value={"309"} primaryText="309" />
      <MenuItem value={"315"} primaryText="315" />
      <MenuItem value={"317"} primaryText="317" />
      <MenuItem value={"319"} primaryText="319" />
      <MenuItem value={"321"} primaryText="321" />
      <MenuItem value={"329"} primaryText="329" />
      <MenuItem value={"335"} primaryText="335" />
      <MenuItem value={"337"} primaryText="337" />
      <MenuItem value={"339"} primaryText="339" />
      <MenuItem value={"341"} primaryText="341" />
      <MenuItem value={"344"} primaryText="344" />
      <MenuItem value={"346"} primaryText="346" />
      <MenuItem value={"350"} primaryText="350" />
      <MenuItem value={"357"} primaryText="357" />
      <MenuItem value={"361"} primaryText="361" />
      <MenuItem value={"362"} primaryText="362" />
      <MenuItem value={"364"} primaryText="364" />
      <MenuItem value={"365"} primaryText="365" />
      <MenuItem value={"366"} primaryText="366" />
      <MenuItem value={"370"} primaryText="370" />
      <MenuItem value={"371"} primaryText="371" />
      <MenuItem value={"373"} primaryText="373" />
      <MenuItem value={"376"} primaryText="376" />
      <MenuItem value={"377"} primaryText="377" />
      <MenuItem value={"379"} primaryText="379" />
      <MenuItem value={"380"} primaryText="380" />
      <MenuItem value={"381"} primaryText="381" />
      <MenuItem value={"384"} primaryText="384" />
      <MenuItem value={"386"} primaryText="386" />
      <MenuItem value={"389"} primaryText="389" />
      <MenuItem value={"390"} primaryText="390" />
      <MenuItem value={"391"} primaryText="391" />
      <MenuItem value={"392"} primaryText="392" />
      <MenuItem value={"393"} primaryText="393" />
      <MenuItem value={"394"} primaryText="394" />
      <MenuItem value={"395"} primaryText="395" />
      <MenuItem value={"396"} primaryText="396" />
      <MenuItem value={"397"} primaryText="397" />
      <MenuItem value={"399"} primaryText="399" />
      <MenuItem value={"LR44"} primaryText="LR44" />
      <MenuItem value={"CR1025"} primaryText="CR1025" />
      <MenuItem value={"CR1216"} primaryText="CR1216" />
      <MenuItem value={"CR1220"} primaryText="CR1220" />
      <MenuItem value={"CR1225"} primaryText="CR1225" />
      <MenuItem value={"CR1616"} primaryText="CR1616" />
      <MenuItem value={"CR1620"} primaryText="CR1620" />
      <MenuItem value={"CR1632"} primaryText="CR1632" />
      <MenuItem value={"CR2016"} primaryText="CR2016" />
      <MenuItem value={"CR2025"} primaryText="CR2025" />
      <MenuItem value={"CR2032"} primaryText="CR2032" />
      <MenuItem value={"CR2320"} primaryText="CR2320" />
      <MenuItem value={"CR2325"} primaryText="CR2325" />
      <MenuItem value={"CR2430"} primaryText="CR2430" />
      <MenuItem value={"CR2450N"} primaryText="CR2450N" />
    </SelectField>
>>>>>>> a4a2123ec8ce16df935eb523f93a5b580b4d8699

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
