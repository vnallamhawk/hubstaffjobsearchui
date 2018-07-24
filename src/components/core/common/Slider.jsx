import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class SliderC extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue: props.defaultValues,
    }
  }

  onChange = (value) => {
    //console.log("inside onchange");
    //console.log(value);
    this.setState({
      inputValue: [value],
    });
  }

  onAfterChange=(input)=> {
    let inputValue = [...this.state.inputValue];
    inputValue = input;
    this.setState({inputValue});
    //console.log('onAfterChange: ', value);
  }

  onInputChange = (input) =>{
    // let inputValue = [...this.state.inputValue];
    // inputValue = input;
    // this.setState({inputValue});
    
  }
  

  render() {
    const { disabled,inputValue } = this.state;
    const {min,max,step} = this.props;
    //console.log(inputValue[0]);
    //console.log(inputValue[1]);
    return (
      <div>
        <Row>
        <Col span={6}>
            <InputNumber
              min={min}
              max={max}
              style={{ marginLeft: 16 }}
              value={this.state.inputValue[0]}
              onChange={this.onInputChange}
            />-
              <InputNumber
              min={min}
              max={max}
              style={{ marginLeft: 16 }}
              value={this.state.inputValue[1]}
              onChange={this.onInputChange}
            />
          </Col>
          <Col span={20}>
          <Slider range step={step} min={min} max={max} defaultValue={inputValue} onChange={this.onChange} onAfterChange={this.onAfterChange} />

          {/* <Slider range defaultValue={[20, 50]} disabled={disabled} min={1} max={40} onChange={this.onChange} value={this.state.inputValue}/> */}
            {/* <Slider range defaultValue={[18, 32]} min={1} max={40} onChange={this.onChange} value={this.state.inputValue} /> */}
          </Col>
        </Row>
      </div>
    );
  }
}