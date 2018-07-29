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
        this.state={
            selected : []
        }
    }
    onChange = (selectedVal,event)=>{
        debugger;
        const selected = [...this.state.selected];
        if(event.target.checked===true)
        {
        if(selected.indexOf(selectedVal)==-1)  
        {  
        selected.push(selectedVal)
        }
        }
        else
        {
            let index = selected.indexOf(selectedVal);
            selected.splice(index,1)
        }
        this.setState({selected}, function(){
            this.props.onChange(selected)
        })
    }
    
    render(){
        const {option,value} = this.props;
        return option.map(opt=>
            <div>
                <Checkbox value={value} onChange={(e)=>this.onChange(opt,e)}>{opt}</Checkbox>
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

