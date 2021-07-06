export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR   = 'FETCH_ARTICLES_ERROR';

export function fetchArticlesPending(){
	return{
		type: FETCH_ARTICLES_PENDING
	}
}

export function fetchArticlesSuccess(data){
	return{
		type: FETCH_ARTICLES_SUCCESS,
		payload: data
	}
}

export function fetchArticlesError(error){
	return{
		type: FETCH_ARTICLES_ERROR,
		payload: error
    }
}