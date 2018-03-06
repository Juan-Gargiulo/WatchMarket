import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';


import { Link } from 'react-router-dom'

//import { COLOR } from '../../common/colors'

import Paper from 'material-ui/Paper';

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
/* const Description = styled.div`
    color: ${COLOR.primaryFontColor};
` */

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
			title: {marginLeft: 5, width: 60}
		}

    return <div style={styles.content}>
        <ActionInfo style={{color: '#d3d3d3'}}/>
				<strong style={styles.title}>{`${title}:`}</strong>
        {children}
    </div>
}

const Card = ({...props, product, animate}) => {
    console.log(product)
    return (
        <Container animate={animate}>
        <Paper zDepth={3}>
								<span>{product.code}</span>
            <Link style={{textDecoration: 'none'}} to={`detail/${product.code}`}>
                <ProductImg {...props} />
                    <List>
                        <Desc title="desc">{`${product.description}`}</Desc>
                        <Desc title="tipo">{product.type}</Desc>
                        <Desc title="subtipo">{product.subtype}</Desc>
                        <Desc title="color">{product.color}</Desc>
                        <Desc title="largo">{`${product.length} cm`}</Desc>
                        <Desc title="origen">{product.origin}</Desc>
                        <Desc title="dolares">{`${product.price_dolar}`}</Desc>
                        <Desc title="pesos">{`${product.price_args}`}</Desc>
                    </List>
                   {/*  <p>{card.cardDescription}</p> */}
            </Link>
            </Paper>
        </Container>
    )
}

Card.propTypes = {
    product: PropTypes.object,
};

export default Card