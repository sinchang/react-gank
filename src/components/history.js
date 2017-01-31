import React, { Component } from 'react';
import Header from './header';
import Loading from './loading';
import Footer from './footer';
import axios from 'axios';
import constant from '../common/constant';

class History extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dates: [],
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        axios.get(constant.APIURL + 'day/history')
            .then((res) => {
                this.setState({
                    dates: res.data.results,
                    loading: false
                });
            })
            .catch((error) => {
                this.setState({
                    loading: false
                });
                console.log(error);
            })
    }

    render() {
        return (
            <div className="history">
                <Loading isShow={this.state.loading} />
                <Header />
                <div className="container">
                    <div className="list-group">
                        {this.state.dates.map((date, index) =>
                            <a href={'day/' + date} className="list-group-item" key={index}>{date}</a>
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default History;