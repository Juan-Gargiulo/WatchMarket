import React, { Component } from "react";

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Toggle from 'material-ui/Toggle';

import { Row, Col } from "react-grid-system";

import Paper from "material-ui/Paper";

import { post, get, put } from "axios";

const styles = {
  paper: {
    padding: 30,
    margin: 15
  },
  toggleContainer: {
    width: 50,
    marginTop: 20
  }
};

class FormMallas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false,
      file: null,
      code: "",
      description: "",
      price_dolar: 0,
      price_args: 0,
      active: true,
      filtros: {
        length: 0,
        origin: "",
        color: "",
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

      get(`api/mallas/${code}`).then(res => {
        if (res.data.length === 0) return;

        this.setState({
          isUpdate: true,
          description: res.data[0].description,
          price_dolar: res.data[0].price_dolar,
          price_args: res.data[0].price_args,
          filtros: {
            length: res.data[0].length,
            origin: res.data[0].origin,
            color: res.data[0].color,
            subtype: res.data[0].subtype,
            type: res.data[0].type
          }
        });
      });
    }
  };

  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit

    const formData = new FormData();

    formData.append("images", this.state.file);
    formData.append("code", this.state.code);
    formData.append("type", this.state.filtros.type);
    formData.append("subtype", this.state.filtros.subtype);
    formData.append("length", this.state.filtros.length);
    formData.append("color", this.state.filtros.color);
    formData.append("origin", this.state.filtros.origin);
    formData.append("description", this.state.description);
    formData.append("price_dolar", this.state.price_dolar);
    formData.append("price_args", this.state.price_args);

    const config = {
      headers: { "content-type": "multipart/form-data" }
    };

    if (this.state.isUpdate) {
      console.log("PUT");
      put(`api/mallas/${this.state.code}`, formData, config).then(res => console.log(res));
    } else {
      console.log("POST");
      post("api/mallas", formData, config).then(res => console.log(res));
    }
  }

  render() {
    return (
      <form>
        <Row>
          <Col sm={3} />
          <Col xs={12} sm={6}>
            <Paper style={styles.paper}>
              <h1>Mallas</h1>
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
                <MenuItem value={"cuero"} primaryText="Cuero" />
                <MenuItem value={"casio"} primaryText="Casio" />
                <MenuItem value={"silicona"} primaryText="Silicona" />
                <MenuItem value={"acero"} primaryText="Acero" />
              </SelectField>
              <br />

              {this.state.filtros.type === "cuero" && (
                <SelectField
                  floatingLabelText="Subtipo"
                  value={this.state.filtros.subtype}
                  onChange={this.handleChangeSelect("subtype")}
                >
                  <MenuItem value={"planas"} primaryText="Planas" />
                  <MenuItem value={"anchas"} primaryText="Anchas" />
                  <MenuItem value={"extralargas"} primaryText="Extralargas" />
                  <MenuItem value={"especial"} primaryText="Especiales Liquidacion" />
                </SelectField>
              )}

              <SelectField
                fullWidth
                floatingLabelText="Medida"
                value={this.state.filtros.length}
                onChange={this.handleChangeSelect("length")}
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
              <br />

              <SelectField
                fullWidth
                floatingLabelText="Color"
                value={this.state.filtros.color}
                onChange={this.handleChangeSelect("color")}
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
              <br />

              <SelectField
                fullWidth
                floatingLabelText="Origen"
                value={this.state.filtros.origin}
                onChange={this.handleChangeSelect("origin")}
              >
                <MenuItem value={0} primaryText="todas" />
                <MenuItem value={"suiza"} primaryText="Suiza" />
                <MenuItem value={"japon"} primaryText="Japon" />
                <MenuItem value={"china"} primaryText="China" />
              </SelectField>

              <div style={styles.toggleContainer}>
                <Toggle
                  label="Activo"
                  toggled={this.state.active}
                  disabled={!this.state.isUpdate}
                  onToggle={(e,c) => this.setState({active: c}) }
                />
              </div>
              <br />

              <input type="file" name="images" onChange={this.onChangeFile} /><br />

              <div>
              <RaisedButton
                style={{left: 0}}
                label="Guardar"
                primary={true}
                onClick={this.onFormSubmit}
              />
              </div>


            </Paper>
          </Col>
          <Col sm={3} />
        </Row>
      </form>
    );
  }
}

export default FormMallas;
