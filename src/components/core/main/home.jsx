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
import Cards from '../cards/cards.js'

class Home extends Component {
  constructor() {
    super();
    this.state={
      filterParams :{
        "keywords":"",
        "skills" : [],
        "availability" : [],
        "jobType" : "",
        "payRate" : [40, 80],
        "experienceLevel" : "",
        "country" : [],
        "languages" : []
      }
      //keyword : "",
    }
    //this.filterParams = { "keyword": "" };
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
    filterParams["country"] = tagsValue;
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

  onInputChange=(index,value) =>{
    const filterParams = Object.assign({},this.state.filterParams);
    filterParams["payRate"][index] = value;
    this.setState({filterParams});
  }

  onAfterChange=(input)=> {
    const filterParams = Object.assign({},this.state.filterParams);
    filterParams["payRate"] = input;
    this.setState({filterParams});
    // let inputValue = [...this.state.inputValue];
    // inputValue = input;
    // this.setState({inputValue});
    //console.log('onAfterChange: ', value);
  }

  handleMenuClick = () => {

  }
  render() {
    const options = ["Hourly", "Part-time(20 hrs/wk)", "Full-Time(40 hrs/wk)"];
    const experienceOption = ["Junior","Mid","Senior"]
    const {jobs} = this.props;
    const {skills,jobType,experienceLevel,languages,country,payRate} = this.state.filterParams;
    let cardList = [];
    if(jobs.length>0){
      for(let i=0;i<jobs.length;i++){
        cardList.push(<div> <Cards jobs={jobs[i]}/> </div>)
      }
    }
    console.log(this.state.filterParams["skills"]);
    console.log(this.state.filterParams["jobType"]);
    console.log(this.state.filterParams["experienceLevel"])
    console.log(jobs.length);
    return (
      <div>
        <div>
        <Search name="keyword" onChange={this.onChange} placeHolder="Search by keywords(PHP,.NET,graphic design,etc.)" />
        <Button className="btnSearch" type="submit" btnSearch={this.btnSearch} btnSearchTxt="Search" />
        </div>
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
                        <SliderC step={5} min={0} max={100} value={payRate} onInputChange={this.onInputChange} onAfterChange={this.onAfterChange}/>
            </Row>
            <Row>
              Experience Level
              <SelectDropDown value={experienceLevel} mode="" placeHolder="" option={experienceOption} defaultValue={[]} handleChange={this.handleChangeExpLevel} />
                        {/* <Drpdown option={options} /> */}
            </Row>
            <Row>
              Countries
                <SelectDropDown value={country} mode="tags" placeHolder="Enter state,provice or country" option={[]} defaultValue={[]} handleChange={this.handleChangeCountries} />
            </Row>
            <Row>
              Languages
                <SelectDropDown value={languages} mode="tags" placeHolder="Enter Language" option={[]} defaultValue={[]} handleChange={this.handleChangeLanguages} />
            </Row>
          </Col>

          
          <Col span={10}>
          {cardList}
          </Col>
          <Col span={7}></Col>
        </Row>
      </div>

    );
  }
}

const mapStateToProps = (state) =>{
  return{
    jobs : state.jobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: (args) => dispatch(fetchJobs(args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)