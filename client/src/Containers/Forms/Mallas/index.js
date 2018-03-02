import React, {Component} from 'react'

import SelectField from 'material-ui/SelectField';
import Slider from 'material-ui/Slider';
import MenuItem from 'material-ui/MenuItem';

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
      file:null,
      filtros: {
        tipo: "",
        sssss: ""
      } 
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  handleChange = tipo => (event, index, value) => {
    console.log(tipo)
    const filtros = this.state.filtros
    filtros[tipo] = value
    this.setState({filtros})
  };

  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
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
              <h1>File Upload</h1>
              <input type="file" name="images" onChange={this.onChange} />
              <button type="submit">Upload</button>
              <SelectField
                floatingLabelText="Frequency"
                value={this.state.value}
                onChange={this.handleChange("tipo")}
              >
                <MenuItem value={"larga"} primaryText="Larga" />
                <MenuItem value={"corta"} primaryText="Corta" />
              </SelectField>
              <SelectField
                floatingLabelText="sssss"
                value={this.state.value}
                onChange={this.handleChange("sssss")}
              >
                <MenuItem value={"aa"} primaryText="aa" />
                <MenuItem value={"bb"} primaryText="bb" />
              </SelectField>
              <Slider min={10} max={30}/>
          </Col>
          </Col>
        </Row>
      </form>
   )
  }
}

export default SimpleReactFileUpload