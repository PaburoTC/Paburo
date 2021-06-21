import {combineReducers, createStore} from 'redux';
import articlesReducer from './articles/reducer';


const reducer = combineReducers({
	articles: articlesReducer
});

const store = createStore(reducer);

export default store;