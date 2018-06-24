import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../core/cards/cardsActions'
import { addToChart, removeFromChart } from '../../core/purchases/actions'
import { openModal, closeModal } from '../../core/app/actions'
import { red500 } from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';

import { compose, withProps, lifecycle } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'

import { productSelected } from '../../core/cards/cardSelectors'
import CardMalla from '../../Components/Card/CardMalla'
import CardPila from '../../Components/Card/CardPila'
import { productTypes } from "../../core/constants"

import PageTitle from '../../Components/layout/PageTitle'
import ShoppingCart from '../../Components/ShoppingCart'

import { Container, GalleryCont } from './style.js'

import { Link } from 'react-router-dom'



const Gallery = ({
	products,
	purchases,
	productType,
	user,
	isLoged,
	isAdmin,
	addToChart,
	removeFromCart,
	openModal,
	closeModal,
	modal
}) => {

	return (
		<Container {...this.props}>
			{
				productType === productTypes.MALLAS ?
					<MallasNavBar /> :
					<PilasNavBar />
			}
			{
				purchases.length > 0 &&
				<ShoppingCart 
					purchases={purchases} 
					user={user}
					removeFromCart={removeFromCart}/>
			}

			<GalleryCont >
				{renderProducts(products, productType, user, isLoged, addToChart, openModal, closeModal, modal)}
			</GalleryCont>

		</Container>
	)
}


//const renderCards = cards => cards.map(card => <Card card={card} key={card.cardId} animate/>)
const renderProducts = (
	products, 
	productType, 
	user, 
	isLoged, 
	addToChart, 
	openModal, 
	closeModal, 
	modal
) => products.map((product, key) => {
	switch (productType) {
		case productTypes.MALLAS:
			return <CardMalla
				key={key}
				product={product}
				user={user}
				isLoged={isLoged}
				addToChart={addToChart}
				openModal={openModal}
				closeModal={closeModal}
				modal={modal}
				animate />
			break;
		case productTypes.PILAS:
			return <CardPila
				key={key}
				product={product}
				user={user}
				isLoged={isLoged}
				addToChart={addToChart}
				openModal={openModal}
				closeModal={closeModal}
				modal={modal}
				animate />
			break;
		default:
			break;
	}
})

const MallasNavBar = props => (
	<div>
		<PageTitle title={'Mallas'} />
		<Link to={"/mallas"}>
			<RaisedButton label="Agregar / Editar" primary style={{ marginLeft: "20px" }} />
		</Link>
	</div>
)

const PilasNavBar = props => (
	<div>
		<PageTitle title={'Pilas'} />
		<Link to={"/pilas"}>
			<RaisedButton label="Agregar / Editar" primary style={{ marginLeft: "20px" }} />
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
			purchases: state.purchases.products,
			user: state.user.user,
			isLoged: state.user.isLoged,
			isAdmin: state.user.isAdmin,
			modal: state.app.modal
		}),
		dispatch => ({
			getProducts: productType => dispatch(getProducts(productType)),
			removeFromCart: product => dispatch(removeFromChart(product)),
			openModal: () => dispatch(openModal()),
			closeModal: () => dispatch(closeModal()),
			addToChart: product => dispatch(addToChart(product)),
		})
	),
	withProps({
		spinnerColor: red500,
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
