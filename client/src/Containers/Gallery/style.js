import styled from 'styled-components';
import { COLOR } from '../../common/colors'

export const Container = styled.div`
    width: ${props => props.navVisible ? "calc(100% - 300px)" : "100%"};
    height: calc(100vh - 60px);
    background-color: ${COLOR.backgroudColor};
`

export const GalleryCont = styled.div`
  display: flex;
  flex: 0 0 auto;
  background-color: ${COLOR.backgroudColor};
  flex-flow: row wrap;
  justify-content: center;
  align-items: start;
  align-content: start;

`

export const Content = styled.div`
  diplay: block;
  width: 80%;
`
