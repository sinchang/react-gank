import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="text-muted text-center">
          Built by <a href="https://twitter.com/sinchangwen" target="_blank">sichang</a> | Thanks <a href="http://gank.io">gank.io</a>
          <p className="tip">为了更好的体验，推荐使用 Chrome 浏览器进行浏览</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
