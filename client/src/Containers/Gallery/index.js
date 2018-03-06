import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../core/cards/cardsActions'

import { compose, withProps, lifecycle } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'

//import { cardsSelected } from '../../core/cards/cardSelectors'
import CardMalla from '../../Components/Card/CardMalla'
import CardPila from '../../Components/Card/CardPila'
import { productTypes } from "../../core/constants"

import PageTitle from '../../Components/layout/PageTitle'

import { COLOR } from '../../common/colors'
import { Container, GalleryCont } from './style.js'


const Gallery = ({ ...props, products, fetching, getCards, productType }) => {
	console.info(products)
   return (
      <Container {...this.props}>

            <PageTitle title={'Productos'} />
            <GalleryCont >
            { renderProducts(products, productType) }
            </GalleryCont>

      </Container>
   )
}

//const renderCards = cards => cards.map(card => <Card card={card} key={card.cardId} animate/>)
const renderProducts = (products, productType) => products.map((product, key) => {
		switch (productType) {
			case productTypes.MALLAS:
				return <CardMalla key={key} product={product} animate /> 
				break;
			case productTypes.PILAS:
				return <CardPila key={key} product={product} animate /> 
				break;			
			default:
				break;
		}
})


const enchanced = compose(
      connect(
            state => ({
                  loading: state.products.fetching,
                  productType: state.products.productType,
                  products: state.products.products
            }),
            dispatch => ({
                  getProducts: productType => dispatch(getProducts(productType))
            })
      ),
      withProps({
        spinnerColor: COLOR.primaryColor,
        spinnerthickness: 15,
        spinnerSize: 100
      }),
      lifecycle({
            componentWillMount() {
                  const { getProducts, productType } = this.props
                  getProducts(productType);
            },
      }),
      withLoading, //spinner HOC
)

export default enchanced(Gallery);
