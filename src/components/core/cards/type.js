import React from 'react';

const Type = ({jobType}) =>{
            switch (true) {
                case jobType==='Full-Time':
                    return <div className="fullTime" >{jobType} </div> 
                    break;
                case jobType==='Part-Time':
                    return <div className="parttime" > {jobType} </div> 
                    break;
                case jobType==='Hourly':
                    return <div className="hourly" >{jobType} </div> 
                    break
                default:
                    return null
            }
}

export default Type;