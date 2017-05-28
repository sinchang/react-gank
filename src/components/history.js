import React, { Component } from 'react';
import axios from 'axios';
import constant from '../common/constant';

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: []
    }
  }

  componentDidMount() {
    axios.get(constant.APIURL + 'day/history')
      .then((res) => {
        this.setState({
          dates: res.data.results
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="history">
        <div className="container">
          <div className="list-group">
            {this.state.dates.map((date, index) =>
              <a href={'#day/' + date} className="list-group-item" key={index}>{date}</a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default History;
