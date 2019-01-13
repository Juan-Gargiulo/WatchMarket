import React, { Component } from "react";
import styled from "styled-components";

import ReactTable from "react-table";
import "react-table/react-table.css";

import { get } from "axios";

const Container = styled.div`
  height: calc(100vh - 100px);
  padding: 20px;
  overflow-y: scroll;
`;

const columns = [
  {
    Header: "Usuario",
    columns: [
      { Header: "Email", id: "email", accessor: d => (d.user ? d.user.email : "no existe usuario") },
      { Header: "Telefono", id: "telefono", accessor: d => (d.user ? d.user.phone : "no existe usuario") },
      { Header: "Nombre", id: "nombre", accessor: d => (d.user ? d.user.fullName : "no existe usuario") }
    ]
  },
  {
    Header: "Fecha de Compra",
    accessor: "createdAt",
    Cell: row => new Date(row.value).toLocaleString("es-ES", { timeZone: "UTC" })
  },
  {
    Header: "Productos",
    id: "productos",
    accessor: data => data.products.map(p => p.code).join(", ")
  },
  {
    Header: "Pesos",
    id: "pesos",
    accessor: data => {
      const total = data.products.reduce((acc, product) => acc + product.price_args, 0);
      console.log(total);
      return total;
    }
  }
];

const subTableColumns = [
  { Header: "Codigo", accessor: "code" },
  { Header: "Descripcion", accessor: "description" },
  { Header: "Pesos", accessor: "price_args" },
  { Header: "Dolares", accessor: "price_dolar" }
];

class Compras extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const { data } = await get("api/purchase");
    console.log(data);
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
        <ReactTable
          filterable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={row => {
            return (
              <div>
                Detalle de compra
                <ReactTable data={row.original.products} columns={subTableColumns} className="-striped -highlight" />
              </div>
            );
          }}
        />
      </Container>
    );
  }
}

export default Compras;
