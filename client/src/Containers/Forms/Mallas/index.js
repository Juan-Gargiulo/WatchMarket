import React, {Component} from 'react'

import SelectField from 'material-ui/SelectField';
import Slider from 'material-ui/Slider';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Row, Col } from 'react-grid-system';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import axios, { post, put } from 'axios';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: "80%"
  },

};

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file: null,
      code: "",
      description: "",
      price_dolar: 0,
      price_args: 0,
      filtros: {
        length: 0,
        origin: "",
        color: "",
        subtype: "",
        type: "",
      } 
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  handleChange = tipo => (event, index, value) => {
    const filtros = this.state.filtros
    filtros[tipo] = value
    if(this.state.filtros.type !== "cuero") filtros.subtype = ""
    this.setState({filtros})
  };

  handleTextChange = field => (event, newValue) => {
    this.setState({[field]: newValue})
  }

  onFormSubmit(e){
    e.preventDefault() // Stop form submit

    const formData = new FormData();

    formData.append('images',this.state.file)
    formData.append('code', this.state.code)
    formData.append('type', this.state.filtros.type)
    formData.append('subtype', this.state.filtros.subtype)
    formData.append('length', this.state.filtros.length)
    formData.append('color', this.state.filtros.color)
    formData.append('origin', this.state.filtros.origin)
    formData.append('description', this.state.description)    
    formData.append('price_dolar', this.state.price_dolar)
    formData.append('price_args', this.state.price_args)

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    return post('api/mallas', formData, config)
      .then(res => console.log(res ))

  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = 'api/mallas';
    const formData = new FormData();
    formData.append('images',file)

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return post(url, formData,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        
        <Row>
        <Col xs={12} debug align="center">
          <Col xs={4} debug align="center">
              <h1>Mallas</h1>
              <TextField
                floatingLabelText="Codigo"
                onChange={this.handleTextChange("code")}
              /><br />
              <TextField
                floatingLabelText="Precio Dolar"
                type="number"
                value={this.state.price_dolar}
                onChange={this.handleTextChange("price_dolar")}
              /><br />
              <TextField
                floatingLabelText="Precio Pesos"
                type="number"
                value={this.state.price_args}
                onChange={this.handleTextChange("price_args")}
              /><br />
              <TextField
                floatingLabelText="Descripcion"
                multiLine
                value={this.state.description}
                onChange={this.handleTextChange("description")}
              /><br />

              <SelectField
                floatingLabelText="Tipo"
                value={this.state.filtros.type}
                onChange={this.handleChange("type")}
              >
                <MenuItem value={"cuero"} primaryText="Cuero" />
                <MenuItem value={"casio"} primaryText="Casio" />
                <MenuItem value={"silicona"} primaryText="Silicona" />
                <MenuItem value={"acero"} primaryText="Acero" />
              </SelectField><br />

              {
                this.state.filtros.type === "cuero" && <SelectField
                floatingLabelText="Subtipo"
                value={this.state.filtros.subtype}
                onChange={this.handleChange("subtype")}
              >
                <MenuItem value={"planas"} primaryText="Planas" />
                <MenuItem value={"anchas"} primaryText="Anchas" />
                <MenuItem value={"extralargas"} primaryText="Extralargas" />
                <MenuItem value={"especial"} primaryText="Especiales Liquidacion" />
              </SelectField>

              }<br />

              <SelectField
                floatingLabelText="Largo"
                value={this.state.filtros.length}
                onChange={this.handleChange("length")}
              >
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={20} primaryText="20" />
              </SelectField><br />

              <SelectField
                floatingLabelText="Color"
                value={this.state.filtros.color}
                onChange={this.handleChange("color")}
              >
                <MenuItem value={"negro"} primaryText="Negro" />
                <MenuItem value={"blanco"} primaryText="Blanco" />
                <MenuItem value={"marron"} primaryText="Marron" />
              </SelectField><br />

              <SelectField
                floatingLabelText="Origen"
                value={this.state.filtros.origin}
                onChange={this.handleChange("origin")}
              >
                <MenuItem value={"china"} primaryText="China" />
                <MenuItem value={"usa"} primaryText="EEUU" />
                <MenuItem value={"brasil"} primaryText="Brasil" />
              </SelectField><br />


              <input type="file" name="images" onChange={this.onChange} />
              

              <RaisedButton label="Guardar" type="submit" primary={true}/>
             {/*  <button type="submit">subir</button> */}
          </Col>
          </Col>
        </Row>
      </form>
   )
  }
}

export default SimpleReactFileUpload