import React,{Component} from 'react';
import { Select } from 'antd';

const Option = Select.Option;

// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// ReactDOM.render(
//   <Select
//     mode="multiple"
//     style={{ width: '100%' }}
//     placeholder="Please select"
//     defaultValue={['a10', 'c12']}
//     onChange={handleChange}
//   >
//     {children}
//   </Select>,
//   mountNode);
// export default class SelectDropDown extends Component{
//   constructor(){
//     super();
//     this.state ={
//       value :""
//     }
//   }
//   render(){
//     const {option,placeholder,defaultValue,mode} = this.props;
//     const children = [];
//     for (let i = 0; i < option.length; i++) {
//       children.push(<Option key={i}>{option[i]}</Option>);
//     }
//     return(
//       <div>
//            <Select
//     mode={mode}
//     style={{ width: '100%' }}
//     placeholder={placeholder}
//     defaultValue={defaultValue}
//     onChange={(e)=>this.props.handleChange(children,option[e])}
//     // value = {props.selectedOption}
//   >
//     {children}
//   </Select>
//           </div>
//     )
//   }
// }

  export const SelectDropDown = (props) =>{
    //console.log(props.value);
    const {option,placeholder,defaultValue,mode} = props;
    const children = [];
    for (let i = 0; i < option.length; i++) {
      children.push(<Option key={i}>{option[i]}</Option>);
    }
      return(<div>
            <Select
     mode={mode}
     style={{ width: '100%' }}
     placeholder={placeholder}
     defaultValue={defaultValue}
     onChange={(e)=>props.handleChange(children,option[e],e)}
     value = {props.value}
   >
    {children}
  </Select>
          </div>)
  }
