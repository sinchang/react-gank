import React, { Component } from 'react';
import axios from 'axios';
import constant from '../common/constant';

class Category extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.diffRender = this.diffRender.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      loading: false,
      page: 1,
      datas: [],
      type: 1,
      types: {
        1: '前端',
        2: 'Android',
        3: 'iOS',
        4: '拓展资源',
        5: 'App',
        6: '福利',
        7: '瞎推荐'
      }
    }
  }

  fetchData() {
    this.setState({
      type: parseInt(this.props.params.type, 10)
    });
    axios.get(constant.APIURL + 'data/' + this.state.types[this.props.params.type] + '/30/' + this.state.page)
      .then((res) => {
        this.setState({
          datas: res.data.results
        });
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentWillMount() {
    this.fetchData();
  }


  componentDidUpdate(prevprops) {
    const oldType = prevprops.params.type;
    const newType = this.props.params.type;
    if (newType !== oldType) {
      this.fetchData();
    }
  }

  diffRender(data, index) {
    if (this.state.type === 6) {
      return <div className="list-group-item" key={index}><img src={data.url} alt="girl" /></div>
    } else {
      return <a href={data.url} target="_blank" className="list-group-item" key={index}>{data.desc}</a>
    }
  }

  prev(e) {
    e.preventDefault();
    if (this.state.page === 1) {
      alert('再往前已无数据');
      return;
    }
    this.state.page--;
    this.fetchData();
  }

  next(e) {
    e.preventDefault();
    this.state.page++;
    this.fetchData();
  }

  render() {
    return (
      <div className="Category">
        <div className="container">
          <div className="list-group">
            {this.state.datas.map((data, index) =>
              this.diffRender(data, index)
            )}
          </div>
          <ul className="pager" id="pager">
            <li className="previous"><a href="" onClick={this.prev}>← Prev</a></li>
            <li className="next"><a href="" onClick={this.next}>Next →</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Category;
