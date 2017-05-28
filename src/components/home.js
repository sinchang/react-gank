import React, { Component } from 'react';
import { Link } from 'react-router'
import axios from 'axios';
import constant from '../common/constant';
import util from '../common/util'

class Home extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      isEmpty: false,
      day: '',
      content: {}
    }
  }

  fetchData() {
    const paramsDay = this.props.params.day;
    if (!util.isDate(paramsDay)) {
      this.props.router.push({
        pathname: '/day/' + util.formatDate(new Date()).replace(/\//g, '-')
      })
      return;
    }
    this.setState({
      loading: true,
      day: paramsDay
    });

    axios.get(constant.APIURL + 'history/content/day/' + paramsDay.replace(/-/g, '/'))
      .then((res) => {
        let content = res.data.results[0];
        if (!content) {
          this.setState({
            isEmpty: true,
            content: ''
          })
          return;
        }

        this.setState({
          content: content,
          isEmpty: false
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentWillMount() {
    this.fetchData();
  }

  createMarkup() {
    return <div className="index-content" dangerouslySetInnerHTML={{ __html: this.state.content.content }}></div>;
  }

  prev() {
    this.props.router.push({
      pathname: '/day/' + util.changeDate(this.state.day, 'subtract', 1).replace(/\//g, '-')
    })
  }

  next() {
    if (util.formatDate(this.state.day) === util.formatDate(new Date())) {
      this.props.router.push({
        pathname: '/day/' + this.state.day
      })
    } else {
      this.props.router.push({
        pathname: '/day/' + util.changeDate(this.state.day, 'add', 1).replace(/\//g, '-')
      })
    }
  }

  componentDidUpdate(prevprops) {
    let imgGroup = document.querySelectorAll('.content ul li ul');
    for (let i = 0, l = imgGroup.length; i < l; i++) {
      imgGroup[i].parentNode.removeChild(imgGroup[i]);
    }

    let oldType = prevprops.params.day;
    let newType = this.props.params.day;
    if (newType !== oldType) {
      this.fetchData();
    }
  }

  render() {
    return (
      <div className="home">
        <ul className="pager">
          <li>
            <button className="btn btn-success btn-sm" onClick={this.prev}>Previous</button>
          </li>
          <li>
            <button className="btn btn-success btn-sm" style={{ marginLeft: '10px', marginRight: '10px' }}>{this.state.day}</button>
          </li>
          <li>
            <button className="btn btn-success btn-sm" onClick={this.next}>Next</button>
          </li>
        </ul>
        <div className="container content">
          {
            this.state.isEmpty &&
            <div >非常抱歉，今日无数据，前往<Link to="/history">历史</Link>看看吧😀</div>
          }
          {
            this.state.content &&
            <div>
              <h2 className="title">{this.state.content.title}</h2>
              {this.createMarkup()}
            </div>
          }
        </div>
      </div >
    );
  }
}
export default Home;
