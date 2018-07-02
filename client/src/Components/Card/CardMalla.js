import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import { withRouter } from 'react-router'
import { Container, ProductImg, ProductCode } from './styles'

import Paper from 'material-ui/Paper';
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import Desc from './Description'

const styles = {
    buyIcon: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		marginRight: 20,
		marginBottom: 20,	
    }
}

const Card = ({...props, product, animate, isLoged, history, addToChart, openModal, closeModal, modal,launchSnackbar}) => {

    const actions = product => ([
        <FlatButton
          label="Cancelar"
          primary={true}
          onClick={closeModal}
        />,
        <FlatButton
          label="Comprar"
          primary={true}
          onClick={() => aceptarCompra(product)}
        />
    ]);

    const comprar = () => {
        if (isLoged) {
            addToChart(product);
            launchSnackbar('Se agrego el producto al carrito de compras.')
        }else{
            history.push('/register')
        }
    }

    const aceptarCompra = product => {
        addToChart(product);
        closeModal();
    }

    return (
        <Container animate={animate}>
            <Dialog
                title="Agregar a compras?"
                actions={actions(product)}
                modal={true}
                open={modal}
            />
            <Paper zDepth={3}>
                <ProductCode>{`codigo: ${product.code}`}</ProductCode>
                <ProductImg {...props} />
                <List>
                    <Desc title="Desc">{product.description}</Desc>
                    <Desc title="Tipo">{product.type}</Desc>
                    <Desc title="Subtipo">{product.subtype}</Desc>
                    <Desc title="Color">{product.color}</Desc>
                    <Desc title="Largo">{`${product.length} cm`}</Desc>
                    <Desc title="Origen">{product.origin}</Desc>
                    <Desc title="u$s">{product.price_dolar}</Desc>
                    <Desc title="Pesos">{product.price_args}</Desc>
                </List>
                <FloatingActionButton style={styles.buyIcon} mini secondary={true} onClick={() => comprar()}>
					<FontIcon className="material-icons">add_shopping_cart</FontIcon>
				</FloatingActionButton>
            </Paper>
        </Container>
    )
}

Card.propTypes = {
    product: PropTypes.object,
};

export default withRouter(Card)
