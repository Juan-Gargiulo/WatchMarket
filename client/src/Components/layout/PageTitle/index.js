import React from 'react';
import styled from 'styled-components';

import { COLOR } from '../../../common/colors'

const Container = styled.div`
    width: 100%;
    margin: 5px 2px 2px 5px;
`

const Title = styled.h2`
    color: ${COLOR.primaryFontColor};
`

const pageTitle = ({title}) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}

export default pageTitle
