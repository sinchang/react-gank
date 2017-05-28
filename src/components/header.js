import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.navbarToggle = this.navbarToggle.bind(this);
  }

  navbarToggle(e) {
    e.preventDefault();
    const navbar = document.querySelector('.navbar-toggle');
    const collapse = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('collapsed')) {
      collapse.classList.add('collapse');
      navbar.classList.remove('collapsed');
    } else {
      navbar.classList.add('collapsed');
      collapse.classList.remove('collapse');
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" onClick={this.navbarToggle} >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">干货集中营</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/">首页</Link>
                </li>
                <li>
                  <Link to="/history">历史</Link>
                </li>
                <li className="dropdown">
                  <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">分类 <span className="caret"></span></a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <Link to="/category/1">前端</Link>
                    </li>
                    <li>
                      <Link to="/category/6">福利</Link>
                    </li>
                    <li>
                      <Link to="/category/2">Android</Link>
                    </li>
                    <li>
                      <Link to="/category/3">iOS</Link>
                    </li>
                    <li>
                      <Link to="/category/5">App</Link>
                    </li>
                    <li>
                      <Link to="/category/7">瞎推荐</Link>
                    </li>
                    <li>
                      <Link to="/category/4">拓展资源</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="https://github.com/sinchang/react-gank" target="_blank">Github</a></li>
                <li><a onClick={() => this.props.modalToggle() }>提交干货</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
