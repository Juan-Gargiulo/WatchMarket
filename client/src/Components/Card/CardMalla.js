import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import { withRouter } from 'react-router'
import { Container, ProductImg, ProductCode } from './styles'

import Paper from 'material-ui/Paper';
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from 'material-ui/Dialog';

import Desc from './Description'


const Card = ({...props, product, animate, isLoged, history, addToChart, openModal, closeModal, modal}) => {

    const actions = [
        <FlatButton
          label="Cancelar"
          primary={true}
          onClick={closeModal}
        />,
        <FlatButton
          label="Comprar"
          primary={true}
          onClick={() => aceptarCompra()}
        />
    ];

    const comprar = () => {
        if (isLoged) {
            openModal()
        }else{
            history.push('/register')
        }
    }

    const aceptarCompra = () => {
        addToChart(product);
        closeModal();
    }

    return (
        <Container animate={animate}>
            <Dialog
                title="Agregar a compras?"
                actions={actions}
                modal={true}
                open={modal}
            />
            <Paper zDepth={3}>
                <ProductCode>{`codigo: ${product.code}`}</ProductCode>
                <ProductImg {...props} />
                <List>
                    <Desc title="desc">{product.description}</Desc>
                    <Desc title="tipo">{product.type}</Desc>
                    <Desc title="subtipo">{product.subtype}</Desc>
                    <Desc title="color">{product.color}</Desc>
                    <Desc title="largo">{`${product.length} cm`}</Desc>
                    <Desc title="origen">{product.origin}</Desc>
                    <Desc title="dolares">{product.price_dolar}</Desc>
                    <Desc title="pesos">{product.price_args}</Desc>
                </List>
                {/*  <p>{card.cardDescription}</p> */}
                <RaisedButton label={"comprar"} primary onClick={() => comprar()}/>
            </Paper>
        </Container>
    )
}

Card.propTypes = {
    product: PropTypes.object,
};

export default withRouter(Card)
