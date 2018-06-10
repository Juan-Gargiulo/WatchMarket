import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import Paper from 'material-ui/Paper';
import RaisedButton from "material-ui/RaisedButton";

const Container = styled.div`
    display: block;
    cursor: pointer;
    width: 325px;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 15px;
    background-color: white;

    ${props => props.animate ?
        `&:hover {
            transition: all .2s e<strong>Tipo</strong>ase-in-out;
            transform: scale(1.02);
        }` : ""}
`

const ProductImg = styled.img.attrs({
    src: props => props.product.imgurl
})`
		width: 100%;

`


const Desc = ({title, children}) => {

		const styles = {
			content: {
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				fontSize: "0.7em",
				color: 'black',
				margin: '5px 0px 5px 5px'
			},
            title: {marginLeft: 5, width: 80}
		}

    return <div style={styles.content}>
				<strong style={styles.title}>{`${title}:`}</strong>
                {children}
    </div>
}

const Card = ({...props, product, animate, history, isLoged}) => {

    const styles = {
        productCode: {color: 'gray'}
    }

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
            <span style={styles.productCode}>`{`Codigo: ${product.code}`}</span>
            <Link style={{textDecoration: 'none'}} to={`detail/${product.code}`}>
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
                    <RaisedButton label={"comprar"} primary style={styles.comprar} onClick={comprar}/>
            </Link>
            </Paper>
        </Container>
    )
}

Card.propTypes = {
    product: PropTypes.object,
};

export default withRouter(Card)
