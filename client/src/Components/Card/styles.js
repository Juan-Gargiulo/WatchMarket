import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    cursor: pointer;
    width: 325px;
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 15px;
    background-color: white;

    ${props => props.animate ?
        `&:hover {
            transition: all .2s e<strong>Tipo</strong>ase-in-out;
            transform: scale(1.02);
        }` : ""}
`

export const ProductImg = styled.img.attrs({
    src: props => props.product.imgurl
})`
		width: 100%;

` 

export const ProductCode = styled.span`
    color: gray;
    margin-top: 10;
    margin-left: 10;
`
    