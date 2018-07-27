import React from 'react';
import Skill from './skill';
import List from './list';
import Type from './type';
import {Icon} from 'antd'

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
        <div className="sectionText floatLeft">
            {props.jobs.rolename} 
        </div>
        <div className="padding-left-10">
            <Type jobType={props.jobs.type.join()}/>
        </div>
        <div className="clearBoth">
            <span className="companyIcon"/> {props.jobs.company}  <span className="locationIcon"/> {props.jobs.city} {props.jobs.state}
        </div>
        <div>
            {props.jobs.description}
        </div>
        <div className="skills">
            <List className="skills" skills={props.jobs.skills}/>
        </div>
        </div>
    );
}

export default cards;