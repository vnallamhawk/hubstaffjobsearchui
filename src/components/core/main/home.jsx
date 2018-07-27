import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Search } from '../common/search'
import { SelectDropDown } from '../common/select'
import Chkbox from '../common/checkbox';
import Drpdown from '../common/dropdown'
import { fetchJobs } from '../../../actions/home'
import { TextBox } from '../common/textbox';
import Button from '../common/button';
import { queryParams } from '../common/global'
import SliderC from '../common/Slider'
import { connect } from 'react-redux'
import Cards from '../cards/cards.js'
import Pagination from '../common/pagination'

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      filterParams: {
        "keywords": "",
        "skills": [],
        "availability": [],
        "jobType": "",
        "payRate": [40, 80],
        "experienceLevel": "",
        "country": [],
        "languages": []
      },
      currentPage: 1,
      pageSize : 5,
      total : props.jobs.length
      //keyword : "",
    }
    //this.filterParams = { "keyword": "" };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.jobs!==nextProps.jobs)
    this.setState({total: nextProps.jobs.length})
  }

  componentDidMount() {
    // this.props.fetchJobs("");  
  }

  btnSearch = () => {
    console.log(queryParams(this.state.filterParams));
    this.props.fetchJobs(queryParams(this.state.filterParams));
    this.setState({currentPage:1});
  }

  onChange = (event) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["keywords"] = event.target.value;
    this.setState({ filterParams });
  }

  onChkBoxChange = (value) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["availability"] = value;
    this.setState({ filterParams });
  }

  updateCurrentPage=(currentPage)=>{
    this.setState({currentPage});
  }

  handleChange = (event, value, tagsValue) => {
    //console.log(value); 
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["skills"] = tagsValue;
    //console.log(filterParams);
    this.setState({ filterParams });
  }
  handleChangeCountries = (event, value, tagsValue) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["country"] = tagsValue;
    //console.log(filterParams);
    this.setState({ filterParams })
  }

  handleChangeLanguages = (event, value, tagsValue) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["languages"] = tagsValue;
    //console.log(filterParams);
    this.setState({ filterParams })
  }

  handleChangeJobType = (event, value) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["jobType"] = value
    this.setState({ filterParams })
  }

  handleChangeExpLevel = (event, value) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["experienceLevel"] = value
    this.setState({ filterParams })
  }

  onInputChange = (index, value) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["payRate"][index] = value;
    this.setState({ filterParams });
  }

  onAfterChange = (input) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["payRate"] = input;
    this.setState({ filterParams });
    // let inputValue = [...this.state.inputValue];
    // inputValue = input;
    // this.setState({inputValue});
    //console.log('onAfterChange: ', value);
  }

  handleMenuClick = () => {

  }
  render() {
    const options = ["Hourly", "Part-time(20 hrs/wk)", "Full-Time(40 hrs/wk)"];
    const experienceOption = ["Junior", "Mid", "Senior"]
    const { jobs } = this.props;
    const {currentPage,pageSize,total} = this.state;
    const { skills, jobType, experienceLevel, languages, country, payRate } = this.state.filterParams;
    let cardList = [],topJobs=[],mostViewed=[];
    debugger;
    let upperLimit = currentPage*pageSize <jobs.length? currentPage*pageSize : jobs.length;
    if (jobs.length > 0) {
      for (let i = currentPage*pageSize -pageSize; i < upperLimit; i++) {
        cardList.push(<div> <Cards jobs={jobs[i]} hide={false}/> <hr/> </div>)
      }
      for(let i=0;i<2;i++){
        topJobs.push(<div> <Cards jobs={jobs[i]} hide={true} /> <hr/> </div>)
      }
      for(let i=0;i<2;i++){
        mostViewed.push(<div> <Cards jobs={jobs[i]} hide={true} /> <hr/> </div>)
      }
    }
    console.log(this.state.filterParams["skills"]);
    console.log(this.state.filterParams["jobType"]);
    console.log(this.state.filterParams["experienceLevel"])
    console.log(jobs.length);
    return (
        <div>
          <div className="searchSection">
          <Search name="keyword" onChange={this.onChange} placeHolder="Search by keywords(PHP,.NET,graphic design,etc.)" />
          <Button className="btnSearch" type="submit" btnSearch={this.btnSearch} btnSearchTxt="Search" />
        </div>
        <Row>
          <Col className="section1" span={6}>
            <Row>
            <div className="filters">
              FILTERS
        </div>
        <div>
              <a className="clear">Clear all filters </a>
          </div>
        
     
              </Row>
              <hr/>
            <Row>
              <div className="sectionText">
              Skills
              </div>
                <SelectDropDown value={skills} mode="tags" placeHolder="" option={[]} defaultValue={[]} handleChange={this.handleChange} />

            </Row>
            <Row>
              <div className="sectionText">
              Availability
              </div>
                  <Chkbox onChange={this.onChkBoxChange} option={options} />
            </Row>
            <Row>
              <div className="sectionText">
              Job Type
              </div>

               <SelectDropDown value={jobType} mode="" placeHolder="" option={options} defaultValue={[]} handleChange={this.handleChangeJobType} />
              {/* <Drpdown option={options} /> */}
            </Row>
            <Row>
              <div className="sectionText">
              Pay rate/hr($)
              </div>
                        <SliderC step={5} min={0} max={100} value={payRate} onInputChange={this.onInputChange} onAfterChange={this.onAfterChange} />
            </Row>
            <Row>
              <div className="sectionText">
              Experience Level
              </div>
              <SelectDropDown value={experienceLevel} mode="" placeHolder="" option={experienceOption} defaultValue={[]} handleChange={this.handleChangeExpLevel} />
              {/* <Drpdown option={options} /> */}
            </Row>
            <Row>
              <div className="sectionText">
              Countries
              </div>
                <SelectDropDown value={country} mode="tags" placeHolder="Enter state,provice or country" option={[]} defaultValue={[]} handleChange={this.handleChangeCountries} />
            </Row>
            <Row>
              <div className="sectionText">
              Languages
              </div>
                <SelectDropDown value={languages} mode="tags" placeHolder="Enter Language" option={[]} defaultValue={[]} handleChange={this.handleChangeLanguages} />
            </Row>
          </Col>


          <Col className="whiteBg" span={12}>
           {jobs.length>0 && 
            <div className="cardsSection ">
            <Row>
              <div className="sectionText">
              RESULTS ({jobs.length}) 
              </div>
              </Row>
              <Row>
            {cardList}
            </Row>
            < Pagination onChangePage={this.updateCurrentPage} currentPage={currentPage} pageSize={pageSize} total={total}/>
            </div> 
           }
          </Col>
          <Col span={6} className="padding-25">
           <div className="whiteBg centerAlign padding-30">
              <img src="images/hubStaff.PNG"/>
              <div className="sectionText"> 
                TRACK TIME ON HUBSTAFF
                </div>
                <p> 
                 Pay only for the hours worked
                </p>
                <Button className="signUp" type="submit" btnSearchTxt="SignUp" />
                <p>
                  <a>
                    Learn more...
                    </a>
                  </p>
                
           </div>
           <Row>
           <div className="sectionText"> 
           TOP JOBS
           </div>
           <hr/>
           {topJobs}

             </Row>

              <Row>
           <div className="sectionText"> 
           MOST VIEWED THIS WEEK
           </div>
           <hr/>
           {mostViewed}

             </Row>

          </Col>
        </Row>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: (args) => dispatch(fetchJobs(args))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)