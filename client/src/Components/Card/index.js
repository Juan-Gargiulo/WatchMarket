import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import { COLOR } from '../../common/colors'

const Container = styled.div`
    display: block;
    cursor: pointer;
    min-height: 408px;
    width: 325px;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 15px;
    background-color: white;

    ${props => props.animate ?
        `&:hover {
            transition: all .2s ease-in-out;
            transform: scale(1.02);
        }` : ""}
`
const Description = styled.div`
    padding: 15px 30px 15px 30px;
    color: ${COLOR.primaryFontColor};
`


const CardImg = styled.img.attrs({
    src: props => props.card.cardImageUrl
})`
    width: 100%;
`

const Card = ({...props, card, animate}) => {

    return (
        <Container animate={animate}>
            <Link style={{textDecoration: 'none'}} to={`detail/${card.cardId}`}>
                <CardImg {...props} />
                <Description>
                    <p>{card.cardDescription}</p>
                </Description>
            </Link>
        </Container>
    )
}

Card.propTypes = {
  card: PropTypes.object,
};

export default Card
