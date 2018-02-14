import { 
  FETCHING_CARDS, 
  FILTER_CARD, 
  SET_PRODUCTS, 
  FILTER_CARD_TECH,
  FILTER_CARD_DETAIL
} from './cardsActions'

const initialState = {
    fetching: false,
    filter: "",
    tech: "Frontend",
    products: []
}

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCHING_CARDS:        
        return { ...state, fetching: true }

      case SET_PRODUCTS:
        return { ...state, ...{fetching: false, products: action.products} }

      case FILTER_CARD:
        return { ...state, filter: action.filter }

      case FILTER_CARD_TECH:
        return { ...state, tech: action.filter }

      case FILTER_CARD_DETAIL:
        
        return {
            ...state,
            ...{fetching: false,
            cards: state.cards.filter( card => card.cardId === action.payload )}
            
          }

      default:
        return state
    }
  }

  export default cardsReducer
