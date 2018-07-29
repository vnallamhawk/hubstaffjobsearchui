import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class SliderC extends Component {
  constructor(props){
    super(props);
    this.state={
      inputValue: props.value,
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.value!==nextProps.value){
      this.setState({inputValue:nextProps.value});
    }
    // console.log(JSON.stringify(this.props.value)===JSON.stringify(nextProps.value));
    }

  onChange = (value) => {
    let inputValue = [...this.state.inputValue];
    inputValue = input;
    this.setState({inputValue},function(){
      this.props.on
    });
  }

  onInputChange (value,index){
    this.props.onInputChange(index,value);
  }
  

  render() {
    
    const { inputValue } = this.state;
    const {min,max,step,value} = this.props;
    console.log(value);
    //console.log(inputValue[0]);
    //console.log(inputValue[1]);
    return (
      <div>
        <Row>
        <Col span={24}>
            <InputNumber
              min={min}
              max={max}
              style={{ marginLeft: 16 }}
              value={inputValue[0]}
              onChange={(e)=>this.onInputChange(e,0)}
            />
            <div className="hyphen"> - </div>
              <InputNumber
              min={min}
              max={max}
              style={{ marginLeft: 16 }}
              value={inputValue[1]}
              onChange={(e)=>this.onInputChange(e,1)}
            />
          </Col>
          <Col span={24}>
          <Slider className="antSlider" range step={step} value={inputValue} min={min} max={max} onChange={this.onChange} onAfterChange={this.onChange} />

          {/* <Slider range defaultValue={[20, 50]} disabled={disabled} min={1} max={40} onChange={this.onChange} value={this.state.inputValue}/> */}
            {/* <Slider range defaultValue={[18, 32]} min={1} max={40} onChange={this.onChange} value={this.state.inputValue} /> */}
          </Col>
        </Row>
      </div>
    );
  }
}