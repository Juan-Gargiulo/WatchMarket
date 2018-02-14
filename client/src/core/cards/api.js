export const fetchCardsApi = () => {
				return fetch('/')
				.then( cards =>  cards.json())	
}

export const fetchPrducts = () => {
	return fetch('/api/product')
	.then( cards =>  cards.json())	
}

