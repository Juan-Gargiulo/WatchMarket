
export const fetchMallas = () => {
	return fetch('/api/mallas?active=true')
	.then( mallas =>  mallas.json())	
}

export const fetchPilas = () => {
	return fetch('/api/pilas?active=true')
	.then( mallas =>  mallas.json())	
}

