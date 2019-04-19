import React from 'react';

const Type = ({jobType}) =>{
            switch (true) {
                case jobType==='Full-Time(40 hrs/wk)':
                    return <span className="fullTime" >{jobType} </span> 
                    break;
                case jobType==='Part-Time(20 hrs/wk)':
                    return <span className="partTime" > {jobType} </span> 
                    break;
                case jobType==='Hourly':
                    return <span className="hourly" >{jobType} </span> 
                    break
                default:
                    return null
            }
}

export default Type;