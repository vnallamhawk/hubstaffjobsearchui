import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Search } from '../common/search'
import { SelectDropDown } from '../common/select'
import Chkbox from '../common/checkbox';
import { fetchJobs, topJobs } from '../../../actions/home'
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
        "payRate": [0, 40],
        "experienceLevel": "",
        "country": [],
        "languages": [],
        "includePayrate" : true
      },
      currentPage: 1,
      pageSize: 5,
      total: props.jobs.length
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.jobs !== nextProps.jobs)
      this.setState({ total: nextProps.jobs.length })
  }

  componentDidMount() {
    this.props.topJobs();
  }

  btnSearch = () => {
    this.props.fetchJobs(queryParams(this.state.filterParams));
    this.setState({ currentPage: 1 });
  }

  onChange = (event) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["keywords"] = event.target.value;
    this.setState({ filterParams });
  }

  onChkBoxChange = (value) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["availability"] = value;
    this.props.fetchJobs(queryParams(filterParams));
    this.setState({ filterParams });
  }

  updateCurrentPage = (currentPage) => {
    this.setState({ currentPage });
  }

  handleChange = (event, value, tagsValue) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["skills"] = tagsValue;
    this.setState({ filterParams });
    this.props.fetchJobs(queryParams(filterParams));
  }
  handleChangeCountries = (event, value, tagsValue) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["country"] = tagsValue;
    this.setState({ filterParams })
    this.props.fetchJobs(queryParams(filterParams));
  }

  handleChangeLanguages = (event, value, tagsValue) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["languages"] = tagsValue;
    this.setState({ filterParams })
    this.props.fetchJobs(queryParams(filterParams));
  }

  handleChangeJobType = (event, value) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["jobType"] = value
    this.setState({ filterParams })
    this.props.fetchJobs(queryParams(filterParams));
  }

  handleChangeExpLevel = (event, value) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["experienceLevel"] = value
    this.setState({ filterParams })
    this.props.fetchJobs(queryParams(filterParams));
  }

  onSliderChange = (value) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["payRate"] = value;
    this.setState({ filterParams });
    this.props.fetchJobs(queryParams(filterParams));
  }

  onAfterChange = (input) => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["payRate"] = input;
    this.setState({ filterParams });
  }

  clearAllFilters = () => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["keywords"] = "";
    filterParams["skills"] = [];
    filterParams["availability"] = [];
    filterParams["jobType"] = "";
    filterParams["payRate"] = [0, 40];
    filterParams["experienceLevel"] = "";
    filterParams["country"] = [];
    filterParams["languages"] = [];
    this.setState({ filterParams });
  }

  clearSkills = () => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["skills"] = [];
    this.setState({ filterParams });
    this.props.fetchJobs(queryParams(filterParams));
  }

  clearAvailability = () => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["availability"] = [];
    this.setState({ filterParams });
    this.props.fetchJobs(queryParams(filterParams));
  }

  clearJobType = () => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["jobType"] = "";
    this.setState({ filterParams });
    this.props.fetchJobs(queryParams(filterParams));
  }

  clearSlider = () => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["payRate"] = [0, 0];
    this.setState({ filterParams });
    this.props.fetchJobs(queryParams(filterParams));
  }

  clearExperience = () => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["experienceLevel"] = "";
    this.setState({ filterParams });
    this.props.fetchJobs(queryParams(filterParams));
  }

  clearCountries = () => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["country"] = []
    this.setState({ filterParams });
    this.props.fetchJobs(queryParams(filterParams));
  }

  clearLanguages = () => {
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["languages"] = []
    this.setState({ filterParams });
    this.props.fetchJobs(queryParams(filterParams));
  }

  onChkBoxChangePayRate=(includePayrate)=>{
    const filterParams = Object.assign({}, this.state.filterParams);
    filterParams["includePayrate"] = includePayrate;
    this.setState({filterParams});
  }

  render() {
    const options = ["Hourly", "Part-time(20 hrs/wk)", "Full-Time(40 hrs/wk)"];
    const experienceOption = ["Junior", "Mid", "Senior"];
    const payRateOptions = ["Include profile without pay rates"];
    const { jobs, topViewed } = this.props;
    const { currentPage, pageSize, total } = this.state;
    const { skills, jobType, experienceLevel, languages, country, payRate, availability,includePayrate } = this.state.filterParams;
    let cardList = [], topJob = [], mostViewed = [];
    let upperLimit = currentPage * pageSize < jobs.length ? currentPage * pageSize : jobs.length;
    if (jobs.length > 0) {
      for (let i = currentPage * pageSize - pageSize; i < upperLimit; i++) {
        cardList.push(<div> <Cards jobs={jobs[i]} hide={false} /> <hr /> </div>)
      }
    }
    if (topViewed.length > 0) {
      for (let i = 0; i < topViewed.length; i++) {
        topJob.push(<div> <Cards jobs={topViewed[i]} hide={true} /> <br/> </div>)
      }
      for (let i = 0; i < topViewed.length; i++) {
        mostViewed.push(<div> <Cards jobs={topViewed[i]} hide={true} />  <br/></div>)
      }

    }
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
                <a className="clear" onClick={this.clearAllFilters.bind(this)}>Clear all filters</a>
              </div>


            </Row>
            <hr />
            <Row>
              <div className="sectionText setWidth floatLeft">
                Skills
              </div>
              <div>
                <a className="clear" onClick={this.clearSkills.bind(this)}>Clear</a>
              </div>
              <SelectDropDown value={skills} mode="tags" placeHolder="" option={[]} defaultValue={[]} handleChange={this.handleChange} />

            </Row>
            <Row>
              <div>
                <div className="sectionText setWidth floatLeft">
                  Availability
              </div>
                <div>
                  <a className="clear" onClick={this.clearAvailability.bind(this)}>Clear</a>
                </div>
              </div>
              <div className="clearBoth">
                <Chkbox value={availability} onChange={this.onChkBoxChange} option={options} />
              </div>
            </Row>
            <Row>
              <div className="sectionText setWidth floatLeft">
                Job Type
              </div>
              <div>
                <a className="clear" onClick={this.clearJobType.bind(this)}>Clear</a>
              </div>

              <SelectDropDown value={jobType} mode="" placeHolder="" option={options} defaultValue={[]} handleChange={this.handleChangeJobType} />
            </Row>
            <Row>
              <div className="sectionText setWidth floatLeft">
                Pay rate/hr($)
              </div>
              <div>
                <a className="clear" onClick={this.clearSlider.bind(this)}>Clear</a>
              </div>
              <SliderC step={5} min={0} max={100} value={payRate} onChange={this.onSliderChange} />
              <div>
              <Chkbox value={payRateOptions} onChange={this.onChkBoxChangePayRate} option={payRateOptions} />
              </div>
            </Row>
            <Row>
              <div className="sectionText setWidth floatLeft">
                Experience Level
              </div>
              <div>
                <a className="clear" onClick={this.clearExperience.bind(this)}>Clear</a>
              </div>
              <SelectDropDown value={experienceLevel} mode="" placeHolder="" option={experienceOption} defaultValue={[]} handleChange={this.handleChangeExpLevel} />
            </Row>
            <Row>
              <div className="sectionText setWidth floatLeft">
                Countries
              </div>
              <div>
                <a className="clear" onClick={this.clearCountries.bind(this)}>Clear</a>
              </div>
              <SelectDropDown value={country} mode="tags" placeHolder="Enter state,provice or country" option={[]} defaultValue={[]} handleChange={this.handleChangeCountries} />
            </Row>
            <Row>
              <div className="sectionText setWidth floatLeft">
                Languages
              </div>
              <div>
                <a className="clear" onClick={this.clearLanguages.bind(this)}>Clear</a>
              </div>
              <SelectDropDown value={languages} mode="tags" placeHolder="Enter Language" option={[]} defaultValue={[]} handleChange={this.handleChangeLanguages} />
            </Row>
          </Col>


          <Col className="whiteBg" span={12}>
            {jobs.length > 0 &&
              <div className="cardsSection ">
                <Row>
                  <div className="sectionText">
                    RESULTS ({jobs.length})
                  </div>
                </Row>
                <Row>
                  {cardList}
                </Row>
                < Pagination onChangePage={this.updateCurrentPage} currentPage={currentPage} pageSize={pageSize} total={total} />
              </div>
            }
          </Col>
          <Col span={6} className="padding-25">
            <div className="whiteBg centerAlign padding-30">
              <img src="images/hubStaff.PNG" />
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
              <hr />
              {topJob}

            </Row>

            <Row>
              <div className="sectionText">
                MOST VIEWED THIS WEEK
           </div>
              <hr />
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
    jobs: state.jobs,
    topViewed: state.topJobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: (args) => dispatch(fetchJobs(args)),
    topJobs: () => dispatch(topJobs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)