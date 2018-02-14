import styled from 'styled-components';
import {secondaryColor} from '../../common/colors'

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    height: 60px;
    background-color: ${secondaryColor};
`

export const Logo = styled.img.attrs({
    src: './img/avalith.png'
})`
    height: 39px;
    width: 35px;
`



