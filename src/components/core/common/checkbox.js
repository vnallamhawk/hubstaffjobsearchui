import React,{Component} from 'react';
import { Checkbox } from 'antd';

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

// ReactDOM.render(
//   <Checkbox onChange={onChange}>Checkbox</Checkbox>,
//   mountNode);

export default class Chkbox extends Component{
    constructor(){
        super();
        this.selected = [];
    }
    onChange = (selected,event)=>{
        if(event.target.checked===true)
        this.selected.push(selected)
        else
        {
            let index = this.selected.indexOf(selected);
            this.selected.splice(index,1)
        }
        this.props.onChange(this.selected);
    }
    render(){
        const {option} = this.props;
        return option.map(opt=>
            <div>
                <Checkbox onChange={(e)=>this.onChange(opt,e)}>{opt}</Checkbox>
            </div>)
        // return(
        //     <div>
        //           <Checkbox onChange={(e)=>props.onChange(opt,e)}>{opt}</Checkbox>
        //     </div>
        // )
    }
}

// export const Chkbox = (props) =>{    
//     return props.option.map(opt=>
//         <div>
//             <Checkbox onChange={(e)=>props.onChange(opt,e)}>{opt}</Checkbox>
//         </div>)
// }

