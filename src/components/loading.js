import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div>
                {this.props.isShow &&
                    <div className="loading">
                        <div className="spinner">
                            <div className="rect1"></div>
                            <div className="rect2"></div>
                            <div className="rect3"></div>
                            <div className="rect4"></div>
                            <div className="rect5"></div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Loading;