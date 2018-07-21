import React from 'react';
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


  export const SelectDropDown = (props) =>{
      const children = [];
for (let i = 0; i < props.option.length; i++) {
  children.push(<Option key={i}>{props.option[i]}</Option>);
}
      return(<div>
           <Select
    mode={props.mode}
    style={{ width: '100%' }}
    placeholder={props.placeholder}
    defaultValue={props.defaultValue}
    onChange={props.handleChange}
  >
    {children}
  </Select>
          </div>)
  }
