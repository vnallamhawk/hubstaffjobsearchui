import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class SliderC extends Component {
  constructor(props){
    super(props);
    // this.state={
    //   inputValue: props.value,
    // }
    this.onInputChange = this.onInputChange.bind(this);
  }

  // componentWillReceiveProps(nextProps){
  //   console.log(JSON.stringify(this.props.value)===JSON.stringify(nextProps.value));
  //   }

  onChange = (value) => {
    //console.log("inside onchange");
    //console.log(value);
    // this.setState({
    //   inputValue: [value]
    // });
  }

  onAfterChange=(input)=> {
    // let inputValue = [...this.state.inputValue];
    // inputValue = input;
    // this.setState({inputValue});
    //console.log('onAfterChange: ', value);
  }

  onInputChange (value,index){
    debugger;
    this.props.onInputChange(index,value);
    // let inputValue = [...this.state.inputValue];
    // inputValue = input;
    // this.setState({inputValue});
    
  }
  

  render() {
    
    //const { inputValue } = this.state;
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
              value={value[0]}
              onChange={(e)=>this.onInputChange(e,0)}
            />
            <div className="hyphen"> - </div>
              <InputNumber
              min={min}
              max={max}
              style={{ marginLeft: 16 }}
              value={value[1]}
              onChange={(e)=>this.onInputChange(e,1)}
            />
          </Col>
          <Col span={24}>
          <Slider className="antSlider" range step={step} value={value} min={min} max={max} onChange={this.props.onAfterChange} onAfterChange={this.props.onAfterChange} />

          {/* <Slider range defaultValue={[20, 50]} disabled={disabled} min={1} max={40} onChange={this.onChange} value={this.state.inputValue}/> */}
            {/* <Slider range defaultValue={[18, 32]} min={1} max={40} onChange={this.onChange} value={this.state.inputValue} /> */}
          </Col>
        </Row>
      </div>
    );
  }
}