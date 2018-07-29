import React from 'react';
import Skill from './skill';
import List from './list';
import Type from './type';
import {Icon} from 'antd'

const cards = ({jobs,hide}) => {
    // let skills = [];
    // console.log(props);
    // debugger;
    // let skills = props.skills.map((skill) => {
    //     <Skill skill={skill}/>
    // })
    // for(let i= 0;i<props.skills.length;i++){
    //     skills.push(<Skill val={props.skills[i]}/>)
    // }
    return(<div>
        <div className="sectionText floatLeft">
            {jobs.rolename} 
        </div>
        {!hide&&
        <div>
        <div className="padding-left-10">
            <Type jobType={jobs.type.join()}/>
        </div>
        
        <div className="clearBoth">
            <img src="images/company.png"/> {jobs.company}  <img src="images/location.png"/>{jobs.city} {jobs.state}
        </div>
        </div>
        }
        <div className="clearBoth">
            {jobs.description}
        </div>
        {!hide&&
        <div className="skills">
            <List className="skills" skills={jobs.skills}/>
        </div>
        }
        </div>
    );
}

export default cards;