import React,{Component} from 'react';
import { Row, Col } from 'antd';
import {Search} from '../common/search'
import {SelectDropDown} from '../common/select'

export default class Home extends Component{
    constructor(){
        super();
    }

    btnSearch =()=>{

    }

    handleChange =() =>{
        
    }

    render(){
        const options  = ["Rakesh","Nallam","Ajay"];
        return(
            <div>
            <Search btnSearch={this.btnSearch} placeHolder="Search by keywords(PHP,.NET,graphic design,etc.)" btnSearchTxt="Search"/>
            <Row>
              <Col span={7}>
              <Row>
                Skills
                <SelectDropDown mode="multiple" placeHolder="" option={options} defaultValue={[]} handleChange={this.handleChange}/>
                  </Row>
              </Col>

              <Col span={10}>col-4</Col>
              <Col span={7}>col-4</Col>
            </Row>
          </div>

        );
    }
}