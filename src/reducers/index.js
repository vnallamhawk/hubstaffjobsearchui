import {combineReducers} from 'redux';
import {fetchJobsReducer,topJobsReducer} from './home';

const rootReducer = combineReducers({
    jobs : fetchJobsReducer,
    topJobs : topJobsReducer
})

export default rootReducer;