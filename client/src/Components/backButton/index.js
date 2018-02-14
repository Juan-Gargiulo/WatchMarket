import React from 'react';
import styled from 'styled-components'
import { COLOR } from '../../common/colors'

export const Container = styled.div`
    position: absolute;
    margin-top: ${props => props.top ? props.top : "0px"};
    width: 109px;
    height: 36px;
    background-color: ${COLOR.secondaryColor};
    cursor: pointer;
    paddin
`

export const Text = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.9em;
    color: ${COLOR.primaryColorStrong}

`

export const BackButton = props => {
    console.log(props.history.goBack)
    return (
    <Container onCLick={props.history.goBack} {...props}>
        <Text onClick={props.history.goBack}>Go back</Text>
    </Container>
)}
