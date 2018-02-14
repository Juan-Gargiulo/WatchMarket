import React from 'react';
import { branch } from 'recompose'
import CircularProgress from 'material-ui/CircularProgress';

import styled from 'styled-components';
import { COLOR } from '../../common/colors'

export const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR.backgroudColor};
`

const Loading = ({spinnerColor, spinnerthickness}) => (
   <Container>
      <CircularProgress size={60} thickness={spinnerthickness} color={spinnerColor} />
   </Container>
)


const withLoading = branch(
      props => props.loading,
      props => Loading,
   )

export default withLoading
