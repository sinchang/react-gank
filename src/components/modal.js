import React, { Component } from 'react';
import axios from 'axios';
import util from '../common/util';
import constant from '../common/constant';

class Modal extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this.state = {
      url: '',
      desc: '',
      who: '',
      type: 'Android',
      debug: false
    }
  }

  _onSubmit(e) {
    e.preventDefault();
    if (!util.checkUrl(this.state.url)) {
      alert('url 错误');
      return;
    }

    const data = {
      url: this.state.url,
      desc: this.state.desc,
      who: this.state.who,
      type: this.state.type,
      debug: this.state.debug
    }

    axios.post(constant.APIURL + 'add2gank', data)
      .then(function (res) {
        if (res.data.error) {
          alert(res.data.msg);
          return;
        }
        alert('提交成功！');
        this.props.hideModal();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  _onChange(e) {
    let state = {};
    state[e.target.id] = e.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div>
        {this.props.isOpen &&
          <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog modal-lg">
              <form className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={ () => this.props.modalToggle() }>×</button>
                  <h4 className="modal-title">提交干货</h4>
                </div>
                <div className="modal-body">
                  <div className="form-horizontal">
                    <fieldset>
                      <div className="form-group">
                        <label htmlFor="url" className="col-lg-2 control-label">网页地址：</label>
                        <div className="col-lg-10">
                          <input type="url" className="form-control" id="url" placeholder="请输入想要提交的网页地址" autoComplete="off" onChange={this._onChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="desc" className="col-lg-2 control-label">内容描述：</label>
                        <div className="col-lg-10">
                          <textarea className="form-control" rows="3" id="desc" onChange={this._onChange}></textarea>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="who" className="col-lg-2 control-label">您的网络ID：</label>
                        <div className="col-lg-10">
                          <input type="text" className="form-control" id="who" placeholder="请输入您的网络ID" autoComplete="off" onChange={this._onChange} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-lg-2 control-label">干货类型</label>
                        <div className="col-lg-10">
                          <select className="form-control" id="type" onChange={this._onChange}>
                            <option value="Android">Android</option>
                            <option value="iOS">iOS</option>
                            <option value="休息视频">休息视频</option>
                            <option value="福利">福利</option>
                            <option value="拓展资源">拓展资源</option>
                            <option value="前端">前端</option>
                            <option value="瞎推荐">瞎推荐</option>
                            <option value="App">App</option>
                          </select>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => this.props.modalToggle()}>取消</button>
                  <button type="button" className="btn btn-primary" onClick={this._onSubmit}>提交</button>
                </div>
              </form>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Modal;
