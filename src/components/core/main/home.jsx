import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Search } from '../common/search'
import {SelectDropDown}  from '../common/select'
import Chkbox from '../common/checkbox';
import Drpdown from '../common/dropdown'
import { fetchJobs } from '../../../actions/home'
import { TextBox } from '../common/textbox';
import Button from '../common/button';
import { queryParams } from '../common/global'
import SliderC from '../common/Slider'
import { connect } from 'react-redux'

class Home extends Component {
  constructor() {
    super();
    this.state={
      filterParams :{
        "keyword":"",
        "skills" : [],
        "availability" : [],
        "jobType" : "",
        "payRate" : {"initial":  40, "final" : 80},
        "experienceLevel" : "",
        "countries" : [],
        "languages" : []
      }
      //keyword : "",
    }
    this.filterParams = { "keyword": "" };
  }

  componentDidMount() {
    // this.props.fetchJobs("");
  }

  btnSearch = () => {
    console.log(queryParams(this.state.filterParams));
    this.props.fetchJobs(queryParams(this.state.filterParams));
  }

  onChange = (event) => {
    const filterParams = Object.assign({},this.state.filterParams);
    filterParams["keywords"] = event.target.value;
    this.setState({filterParams});
  }

  onChkBoxChange = (value) => {
    const filterParams = Object.assign({},this.state.filterParams);
     filterParams["availability"] = value;
    this.setState({filterParams});
  }

  handleChange = (event,value,tagsValue) => {
    //console.log(value); 
    const filterParams = Object.assign({},this.state.filterParams);
    filterParams["skills"] = tagsValue;
    //console.log(filterParams);
    this.setState({filterParams});
  }
  handleChangeCountries = (event,value,tagsValue) => {
    const filterParams = Object.assign({},this.state.filterParams);
    filterParams["countries"] = tagsValue;
    //console.log(filterParams);
    this.setState({filterParams})
  }

  handleChangeLanguages =(event,value,tagsValue) =>{
    const filterParams = Object.assign({},this.state.filterParams);
    filterParams["languages"] = tagsValue;
    //console.log(filterParams);
    this.setState({filterParams}) 
  }

  handleChangeJobType=(event,value)=>{
    const filterParams = Object.assign({},this.state.filterParams);
    filterParams["jobType"] = value
    this.setState({filterParams})
  }

  handleChangeExpLevel =(event,value)=>{
    const filterParams = Object.assign({},this.state.filterParams);
    filterParams["experienceLevel"] = value
    this.setState({filterParams})
  }

  handleMenuClick = () => {

  }
  render() {
    const options = ["Hourly", "Part-time(20 hrs/wk)", "Full-Time(40 hrs/wk)"];
    const experienceOption = ["Junior","Mid","Senior"]
    const {skills,jobType,experienceLevel,languages,countries} = this.state.filterParams;
    console.log(this.state.filterParams["skills"]);
    console.log(this.state.filterParams["jobType"]);
    console.log(this.state.filterParams["experienceLevel"])

    return (
      <div>
        <Search name="keyword" onChange={this.onChange} placeHolder="Search by keywords(PHP,.NET,graphic design,etc.)" />
        <Button className="btnSearch" type="submit" btnSearch={this.btnSearch} btnSearchTxt="Search" />
        <Row>
          <Col span={7}>
            <Row>
              Skills
                <SelectDropDown value={skills} mode="tags" placeHolder="" option={[]} defaultValue={[]} handleChange={this.handleChange} />

            </Row>
            <Row>
              Availability
                  <Chkbox onChange={this.onChkBoxChange} option={options} />
            </Row>
            <Row>
              Job Type

               <SelectDropDown value={jobType} mode="" placeHolder="" option={options} defaultValue={[]} handleChange={this.handleChangeJobType} />
                        {/* <Drpdown option={options} /> */}
            </Row>
            <Row>
              Pay rate/hr($)
                        <SliderC step={5} min={0} max={100} defaultValues={[18,32]}/>
            </Row>
            <Row>
              Experience Level
              <SelectDropDown value={experienceLevel} mode="" placeHolder="" option={experienceOption} defaultValue={[]} handleChange={this.handleChangeExpLevel} />
                        {/* <Drpdown option={options} /> */}
            </Row>
            <Row>
              Countries
                <SelectDropDown value={countries} mode="tags" placeHolder="Enter state,provice or country" option={[]} defaultValue={[]} handleChange={this.handleChangeCountries} />
            </Row>
            <Row>
              Languages
                <SelectDropDown value={languages} mode="tags" placeHolder="Enter Language" option={[]} defaultValue={[]} handleChange={this.handleChangeLanguages} />
            </Row>
          </Col>

          <Col span={10}>col-4</Col>
          <Col span={7}>col-4</Col>
        </Row>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: (args) => dispatch(fetchJobs(args))
  }
}

export default connect(null, mapDispatchToProps)(Home)