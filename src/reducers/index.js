import {combineReducers} from 'redux';
import fetchJobsReducer from './home';

const rootReducer = combineReducers({
    jobs : fetchJobsReducer
})

export default rootReducer;