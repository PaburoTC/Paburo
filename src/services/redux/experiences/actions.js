export const FETCH_EXPERIENCES_PENDING = 'FETCH_EXPERIENCES_PENDING';
export const FETCH_EXPERIENCES_SUCCESS = 'FETCH_EXPERIENCES_SUCCESS';
export const FETCH_EXPERIENCES_ERROR = 'FETCH_EXPERIENCES_ERROR';

export function fetchExperiencesPending(){
	return{
		type: FETCH_EXPERIENCES_PENDING
	}
}

export function fetchExperiencesSuccess(data){
	return{
		type: FETCH_EXPERIENCES_SUCCESS,
		payload: data
	}
}

export function fetchExperiencesError(error){
    return{
        type: FETCH_EXPERIENCES_ERROR,
        payload: error
    }
}