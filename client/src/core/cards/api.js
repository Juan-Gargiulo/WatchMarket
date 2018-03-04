export const fetchCardsApi = () => {
				return fetch('/')
				.then( cards =>  cards.json())	
}

export const fetchPrducts = (products = '') => {
	return fetch('/api/product')
	.then( cards =>  cards.json())	
}

export const fetchMallas = () => {
	return fetch('/api/mallas')
	.then( mallas =>  mallas.json())	
}

export const fetchPilas = () => {
	return fetch('/api/pilas')
	.then( mallas =>  mallas.json())	
}

