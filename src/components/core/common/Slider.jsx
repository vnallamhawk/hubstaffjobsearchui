import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class SliderC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({ inputValue: nextProps.value });
    }
  }

  onChange = (value) => {
    let inputValue = [...this.state.inputValue];
    inputValue = value;
    this.setState({ inputValue }, function () {
      this.props.onChange(inputValue);
    });
  }

  onInputChange = (value, index) => {
    let inputValue = [...this.state.inputValue];
    inputValue[index] = value
    this.setState({ inputValue }, function () {

      this.props.onChange(inputValue);
    })
  }


  render() {
    const { inputValue } = this.state;
    const { min, max, step, value } = this.props;
    return (
      <div>
        <Row>
          <Col span={24}>
            <InputNumber
              min={min}
              max={max}
              style={{ marginLeft: 16 }}
              value={inputValue[0]}
              onChange={(e) => this.onInputChange(e, 0)}
            />
            <div className="hyphen"> - </div>
            <InputNumber
              min={min}
              max={max}
              style={{ marginLeft: 16 }}
              value={inputValue[1]}
              onChange={(e) => this.onInputChange(e, 1)}
            />
          </Col>
          <Col span={24}>
            <Slider className="antSlider" range step={step} value={inputValue} min={min} max={max} onInputChange={this.props.onInputChange} onChange={this.onChange} onAfterChange={this.onChange} />
          </Col>
        </Row>
      </div>
    );
  }
}