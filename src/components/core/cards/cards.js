import React from 'react';
import Skill from './skill';

const cards = (props) => {
    let skills = [];
    for(let i= 0;i<props.skills.length;i++){
        skills.push(<Skill val={props.skills[i]}/>)
    }
    return(
        <div>
            {props.rolename} {props.type.join()}
        </div>
        <div>
            {props.description}
        </div>
        <div>
            {skills}
        </div>
    );
}