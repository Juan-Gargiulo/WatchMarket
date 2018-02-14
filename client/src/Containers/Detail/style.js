import styled from 'styled-components';
import { COLOR } from '../../common/colors'

export const Container = styled.div`
    width: ${props => props.navVisible ? "calc(100% - 300px)" : "100%"};
    height: calc(100vh - 60px);
    background-color: ${COLOR.backgroudColor};
`

export const HeaderContainer = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    position: relative;
    width: 100%;
    height: 200px;
`

export const DescriptionContainer = styled.div`
    display: flex;
    width: 100%;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
`

export const Graph = styled.div`
    padding: 40px;
    width: 500px;
`

export const Description = styled.p`
    flex-grow: 1;
    width: 500px;
    padding: 15px 30px 15px 30px;
    color: ${COLOR.primaryFontColor};
`

export const HeaderTitle = styled.p`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
    color: ${COLOR.primaryColorStrong};
    text-shadow: 3px 3px 3px black

`
