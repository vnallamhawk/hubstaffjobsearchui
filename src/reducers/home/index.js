import { FETCH_JOBS_PENDING,FETCH_JOBS_FULFILLED,FETCH_JOBS,TOP_JOBS_FULFILLED } from '../../actions/types';

export function fetchJobsReducer(state={fetching:false,fetched:false,error:null,response:[]},action){
    switch(action.type){
        case FETCH_JOBS_PENDING:
            return {...state,fetching:true};
        case FETCH_JOBS_FULFILLED:
            return {...state,fetching:false,fetched:true,response:action.payload.data}
            // state = [];
            // return [...state,...action.payload.data];
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
