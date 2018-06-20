import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import { withRouter } from 'react-router'
import { Container, ProductImg, ProductCode } from './styles'

import Paper from 'material-ui/Paper';
import RaisedButton from "material-ui/RaisedButton";

import Desc from './Description'


const Card = ({...props, product, animate, isLoged, history}) => {

    const comprar = (product) => {
        if (isLoged) {
            alert(product.description)
        }else{
            history.push('/register')
        }
    }

    return (
        <Container animate={animate}>
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
                <RaisedButton label={"comprar"} primary onClick={() => comprar(product)}/>
            </Paper>
        </Container>
    )
}

Card.propTypes = {
    product: PropTypes.object,
};

export default withRouter(Card)
