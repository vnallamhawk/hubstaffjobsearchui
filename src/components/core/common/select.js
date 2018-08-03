import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;
export const SelectDropDown = (props) => {
  const { option, placeholder, defaultValue, mode } = props;
  const children = [];
  for (let i = 0; i < option.length; i++) {
    children.push(<Option key={i}>{option[i]}</Option>);
  }
  return (<div>
    <Select
      mode={mode}
      style={{ width: '100%' }}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(e) => props.handleChange(children, option[e], e)}
      value={props.value}
    >
      {children}
    </Select>
  </div>)
}
