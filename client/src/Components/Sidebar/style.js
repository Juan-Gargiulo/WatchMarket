import styled from 'styled-components';
import { COLOR } from '../../common/colors.js'

//transform: translateX(${props => props.visible ? '0px' : '-300px'});
//transition: transform .2s ease-in;
//display: ${props => props.visible ? "block" : "none"};

export const Container = styled.div`
    /* transform: translateX(${props => props.navVisible ? '0px' : '-300px'});
    transition: transform .2s ease-in; */

    display: ${props => props.navVisible ? 'block' : 'none'} ;
    width: 300px;
    height: calc(100vh - 60px);
    background-color: ${COLOR.secondaryColor};
`
