import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    margin-left: 5px;
    width: 80px;
    font-weight: bold;
`

const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.9em;
    color: black;
    margin: 5px 0px 5px 5px;
    border-radius: 50%;
`

export default ({title, children}) => (
    <Content>
        <Title>{title}</Title>
        {children}
    </Content>
);