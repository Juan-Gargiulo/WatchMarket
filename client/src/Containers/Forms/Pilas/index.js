import React, { Component } from "react";

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import { Row, Col } from "react-grid-system";

import Paper from "material-ui/Paper";

import { post, get, put } from "axios";

const styles = {
  paper: {
    padding: 30,
    margin: 15
  }
};

class FormPilas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false,
      code: "",
      file: null,
      description: "",
      price_dolar: 0,
      price_args: 0,
      active: true,
      filtros: {
        model: "",
        brand: "",
        origin: "",
        subtype: "",
        type: ""
      }
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.handleCode = this.handleCode.bind(this);
  }

  handleChangeSelect = from => (event, index, value) => {
    const filtros = this.state.filtros;
    filtros[from] = value;
    if (this.state.filtros.type !== "cuero") filtros.subtype = "";
    this.setState({ filtros });
  };

  handleTextChange = (event, newValue) => {
    this.setState({ [event.target.name]: newValue });
  };

  onChangeFile(e) {
    this.setState({ file: e.target.files[0] });
  }

  handleCode = event => {
    if (event.key === "Enter") {
      const { code } = this.state;

      get(`api/pilas/${code}`)
        .then(res => {
          if (res.data.length === 0) return;
          this.setState({
            isUpdate: true,
            description: res.data[0].description,
            price_dolar: res.data[0].price_dolar,
            brand: res.data[0].brand,
            price_args: res.data[0].price_args,
            filtros: {
              model: res.data[0].model,
              length: res.data[0].length,
              origin: res.data[0].origin,
              color: res.data[0].color,
              subtype: res.data[0].subtype,
              type: res.data[0].type
            }
          });
        })
        .catch(err => alert("no existe"));
    }
  };

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit

    const formData = new FormData();

    formData.append("images", this.state.file);
    formData.append("code", this.state.code);
    formData.append("type", this.state.filtros.type);
    formData.append("subtype", this.state.filtros.subtype);
    formData.append("model", this.state.filtros.model);
    formData.append("brand", this.state.filtros.brand);
    formData.append("origin", this.state.filtros.origin);
    formData.append("description", this.state.description);
    formData.append("price_dolar", this.state.price_dolar);
    formData.append("price_args", this.state.price_args);

    const config = {
      headers: { "content-type": "multipart/form-data" }
    };

    if (this.state.isUpdate) {
      put(`api/pilas/${this.state.code}`, formData, config).then(res => console.log(res));
    } else {
      post("api/pilas", formData, config).then(res => console.log(res));
    }
  }

  render() {
    return (
      <form>
        <Row>
          <Col sm={3} />
          <Col xs={12} sm={6}>
            <Paper style={styles.paper}>
              <h1>Formuilario Pilas</h1>
              <TextField
                name="code"
                hintText="Codigo"
                floatingLabelText="Codigo"
                floatingLabelFixed
                fullWidth
                onChange={this.handleTextChange}
                onKeyPress={this.handleCode}
              />
              <br />
              <TextField
                name="price_dolar"
                fullWidth
                floatingLabelText="Precio Dolar"
                hintText="Precio Dolar"
                floatingLabelFixed
                type="number"
                value={this.state.price_dolar}
                onChange={this.handleTextChange}
              />
              <br />
              <TextField
                name="price_args"
                fullWidth
                floatingLabelText="Precio Pesos"
                hintText="Precio Pesos"
                floatingLabelFixed
                type="number"
                value={this.state.price_args}
                onChange={this.handleTextChange}
              />
              <br />
              <TextField
                name="description"
                fullWidth
                floatingLabelText="Descripcion"
                hintText="Descripcion"
                floatingLabelFixed
                multiLine
                value={this.state.description}
                onChange={this.handleTextChange}
              />
              <br />

              <SelectField
                fullWidth
                floatingLabelText="Tipo"
                value={this.state.filtros.type}
                onChange={this.handleChangeSelect("type")}
              >
                <MenuItem value={"oxidoDePlata"} primaryText="oxido de plata" />
                <MenuItem value={"lithium"} primaryText="lithium" />
                <MenuItem value={"alkalinas"} primaryText="alkalinas" />
                <MenuItem value={"audifonos"} primaryText="audifonos" />
                <MenuItem value={"bateriaDeCosumo"} primaryText="bateriaDeCosumo" />
                <MenuItem value={"acumuladores"} primaryText="acumuladores" />
              </SelectField>
              <br />

              {this.state.filtros.type === "acumuladores" && (
                <SelectField
                  floatingLabelText="Subtipo"
                  value={this.state.filtros.subtype}
                  onChange={this.handleChangeSelect("subtype")}
                >
                  <MenuItem value={"citizen"} primaryText="citizen" />
                  <MenuItem value={"seiko"} primaryText="seiko" />
                  <MenuItem value={"casio"} primaryText="casio" />
                </SelectField>
              )}

                <SelectField
                fullWidth
                floatingLabelText="Modelo"
                value={this.state.filtros.model}
                onChange={this.handleChangeSelect("model")}
              >
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
              <br />

               <SelectField
                fullWidth
                floatingLabelText="Marca"
                value={this.state.filtros.brand}
                onChange={this.handleChangeSelect("brand")}
              >
                <MenuItem value={"renata"} primaryText="Renata" />
                <MenuItem value={"sony"} primaryText="Sony" />
                <MenuItem value={"mimic"} primaryText="Mimic" />
              </SelectField>
              <br />



              <SelectField
                fullWidth
                floatingLabelText="Origen"
                value={this.state.filtros.origin}
                onChange={this.handleChangeSelect("origin")}
              >
                <MenuItem value={"suiza"} primaryText="Suiza" />
                <MenuItem value={"japon"} primaryText="Japon" />
                <MenuItem value={"china"} primaryText="China" />
              </SelectField>
              <br />
              <br />

              <input type="file" name="images" onChange={this.onChangeFile} />

              <RaisedButton label="Guardar" onClick={this.onFormSubmit} primary={true} />
              {/*  <button type="submit">subir</button> */}
            </Paper>
          </Col>
          <Col sm={3} />
        </Row>
      </form>
    );
  }
}

export default FormPilas;
