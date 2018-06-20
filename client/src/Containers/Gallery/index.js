import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../core/cards/cardsActions'

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import { compose, withProps, lifecycle } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'

import { productSelected } from '../../core/cards/cardSelectors'
import CardMalla from '../../Components/Card/CardMalla'
import CardPila from '../../Components/Card/CardPila'
import { productTypes } from "../../core/constants"

import PageTitle from '../../Components/layout/PageTitle'

import { COLOR } from '../../common/colors'
import { Container, GalleryCont } from './style.js'

import { Link } from 'react-router-dom'



const Gallery = ({ products, productType, isLoged, isAdmin }) => {

console.log(isAdmin)

   return (
      <Container {...this.props}>
            {
              productType === productTypes.MALLAS ?
              isAdmin && <MallasNavBar /> :
              isAdmin && <PilasNavBar />
            }

            <GalleryCont >
            { renderProducts(products, productType, isLoged) }
            </GalleryCont>

      </Container>
   )
}

//const renderCards = cards => cards.map(card => <Card card={card} key={card.cardId} animate/>)
const renderProducts = (products, productType, isLoged) => products.map((product, key) => {
		switch (productType) {
			case productTypes.MALLAS:
				return <CardMalla key={key} product={product} isLoged={isLoged} animate />
				break;
			case productTypes.PILAS:
				return <CardPila key={key} product={product} isLoged={isLoged} animate />
				break;
			default:
				break;
		}
})

const MallasNavBar = props => (
  <div>
    <PageTitle title={'Mallas'} />
    <Link to={"/mallas"}>
      <RaisedButton label="Agregar / Editar" primary style={{marginLeft: "20px"}}/>
	</Link>
  </div>    
)

const PilasNavBar = props => (
  <div>
    <PageTitle title={'Pilas'} />
    <Link to={"/pilas"}>
      <RaisedButton label="Agregar / Editar" primary style={{marginLeft: "20px"}}/>
	</Link>
  </div>
)


const enchanced = compose(
      connect(
            state => ({
                  loading: state.products.fetching,
                  productType: state.products.productType,
                  productFilters: state.products.filters,
                  products: productSelected(state),
                  isLoged: state.user.isLoged,
                  isAdmin: state.user.isAdmin
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
