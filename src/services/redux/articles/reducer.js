import {
	FETCH_ARTICLES_PENDING,
	FETCH_ARTICLES_SUCCESS,
	FETCH_ARTICLES_ERROR
} from './actions';

const initialState = {
	pending: false,
	articles: [],
	error: null
}

function reducer(state = initialState, action){
	switch(action.type){
		case FETCH_ARTICLES_PENDING:
			return {
				...state,
				pending: true
			}
		case FETCH_ARTICLES_SUCCESS:
			return{
				...state,
				pending: false,
				articles: action.payload
			}
		case FETCH_ARTICLES_ERROR:
			return{
				...state,
				error: action.payload
			}
		default:
			return state
	}
}

export default reducer;