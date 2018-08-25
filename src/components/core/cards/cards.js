import React from 'react';
import Skill from './skill';
import List from './list';
import Type from './type';
import { Icon } from 'antd';

const cards = ({ jobs, hide }) => {
    return (
        <div>
            <div className={"sectionText" + (!hide ? 'float' : '')}>
                {jobs.rolename}
                {!hide &&
                    <Type jobType={jobs.type.join()} />
                }
            </div>
            <div className="rate">
                $ {jobs.rate} / hr
            </div>
            {!hide &&
                <div>

                    <div className="clearBoth">
                        <img src="images/company.png" /> {jobs.company}  <img src="images/location.png" />{jobs.city} {jobs.state}
                    </div>
                </div>
            }
            <div>
                {jobs.description}
            </div>
            {!hide &&
                <div className="skills">
                    <List className="skills" skills={jobs.skills} />
                </div>
            }
        </div>
    );
}

export default cards;