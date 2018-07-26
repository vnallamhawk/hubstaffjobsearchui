import React from 'react';
import Skill from './skill';
import List from './list';

const cards = (props) => {
    // let skills = [];
    // console.log(props);
    // debugger;
    // let skills = props.skills.map((skill) => {
    //     <Skill skill={skill}/>
    // })
    // for(let i= 0;i<props.skills.length;i++){
    //     skills.push(<Skill val={props.skills[i]}/>)
    // }
    return(
        <div>
        <div>
            {props.jobs.rolename} {props.jobs.type.join()}
        </div>
        <div>
            {props.jobs.company} {props.jobs.city} {props.jobs.state}
        </div>
        <div>
            {props.jobs.description}
        </div>
        <div>
            <List skills={props.jobs.skills}/>
        </div>
        </div>
    );
}

export default cards;