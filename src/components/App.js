import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  modalToggle(status) {
    this.setState({
      isOpen: status
    })
  }

  render() {
    return (
      <div>
        <Header modalToggle={ () => this.modalToggle(true) }/>
        {this.props.children}
        <Footer/>
        <Modal isOpen={ this.state.isOpen } modalToggle={ () => this.modalToggle(false) }/>
      </div>
    );
  }
}

export default App;
