import {combineReducers, createStore} from 'redux';
import articlesReducer from './articles/reducer';
import experiencesReducer from './experiences/reducer';


const reducer = combineReducers({
	articles: articlesReducer,
	experiences: experiencesReducer
});

const store = createStore(reducer);

export default store;