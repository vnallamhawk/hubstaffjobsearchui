import { FETCH_JOBS_FULFILLED,FETCH_JOBS } from '../../actions/types';

function fetchJobsReducer(state=[],action){
    //console.log(action);
    switch(action.type){
        case FETCH_JOBS_FULFILLED:
            return [...state,...action.payload.data];
    }
    return state;
}

export default fetchJobsReducer;