import { FETCH_JOBS_FULFILLED,FETCH_JOBS,TOP_JOBS_FULFILLED } from '../../actions/types';

export function fetchJobsReducer(state=[],action){
    //console.log(action);
    switch(action.type){
        case FETCH_JOBS_FULFILLED:
            state = [];
            return [...state,...action.payload.data];
    }
    return state;
}

export function topJobsReducer(state=[],action){
    switch(action.type){
        case TOP_JOBS_FULFILLED:
            state = [];
            return [...state,...action.payload.data];
    }
    return state;
}
