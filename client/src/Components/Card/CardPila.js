import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import { withRouter } from 'react-router'
import { Container, ProductImg, ProductCode } from './styles'
import Paper from 'material-ui/Paper';
import RaisedButton from "material-ui/RaisedButton";

import Desc from './Description'

const Card = ({...props, product, animate, history, isLoged}) => {

    const comprar = () => {
        if (isLoged) {
            alert('agrega al carrito')
        }else{
            history.push('/register')
        }
    }

    return (
        <Container animate={animate}>
        <Paper zDepth={3}>
            <ProductCode>`{`Codigo: ${product.code}`}</ProductCode>
            <ProductImg {...props} />
                <List>
                    <Desc title="Desc.">{product.description}</Desc>
                    <Desc title="Tipo">{product.type}</Desc>
                    <Desc title="Subtipo">{product.subtype}</Desc>
                    <Desc title="Marca">{product.brand}</Desc>
                    <Desc title="Modelo">{product.model}</Desc>
                    <Desc title="Origen">{product.origin}</Desc>
                    <Desc title="Dolares">{product.price_dolar}</Desc>
                    <Desc title="Pesos">{product.price_args}</Desc>
                </List>
                <RaisedButton label={"comprar"} primary onClick={comprar}/>
            </Paper>
        </Container>
    )
}

Card.propTypes = {
    product: PropTypes.object,
};

export default withRouter(Card)
