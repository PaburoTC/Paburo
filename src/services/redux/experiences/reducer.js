import {
	FETCH_EXPERIENCES_PENDING,
	FETCH_EXPERIENCES_SUCCESS,
	FETCH_EXPERIENCES_ERROR
} from './actions';

const initialState = {
	pending: false,
	experiences: [],
	error: null
}

function reducer(state = initialState, action){
	switch(action.type){
		case FETCH_EXPERIENCES_PENDING:
			return {
				...state,
				pending: true
			}
		case FETCH_EXPERIENCES_SUCCESS:
			return{
				...state,
				pending: false,
				experiences: action.payload
			}
		case FETCH_EXPERIENCES_ERROR:
			return{
				...state,
				error: action.payload
			}
		default:
			return state
	}
}

export default reducer;