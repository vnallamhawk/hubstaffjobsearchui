import {root} from '../../apiConfig';
import axios from 'axios';
import {FETCH_JOBS,TOP_JOBS} from '../types';

export function fetchJobs(args){
    let queryParams = undefined===args? 'jobs' : `jobs?${args}`;
    const request = axios.get(`${root}/${queryParams}`);
    return {
        type : FETCH_JOBS,
        payload : request
    }
}



export function topJobs(args){
    const request = axios.get(`${root}/topJobs`);
    return {
        type : TOP_JOBS,
        payload : request
    }
}
