import styled from 'styled-components';
import { COLOR } from '../../common/colors'

export const Container = styled.div`
    display: block;
    width: 100%;
    height: calc(100vh - 60px);
    background-color: ${COLOR.backgroudColor};
    overflow-y: auto;
`
