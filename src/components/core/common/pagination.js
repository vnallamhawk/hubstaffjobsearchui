import { Pagination } from 'antd';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.currentPage
    }
  }

  onChange = (page) => {
    this.setState({
      current: page
    });
  }

  render() {
    const { total, currentPage, pageSize } = this.props;
    return <Pagination current={currentPage} pageSize={pageSize} onChange={this.props.onChangePage} total={total} />;
  }
}
