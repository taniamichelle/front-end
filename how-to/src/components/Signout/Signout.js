import React from 'react';
import axios from 'axios';
import { Modal } from 'reactstrap';
import { withRouter } from 'react-router'; 

import { ModalWrapper, PageMask, Button } from '../../styled-components/RequestStyles';

class Signout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      signoutsuccess: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      signoutsuccess: false,
    }));
  }

  handleSubmit = () => {
      console.log('props from Signout', this.props)
      console.log('handleSubmit fired!')
    axios
      .post('https://reqres.in/api/users', {name: this.state.name, job: this.state.job})
      .then(res => {
        console.log(res);
        this.setState({signoutsuccess: true})
        this.setState({modal: false})
        this.props.history.push('/signin')
        localStorage.clear();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.props.buttonLabel}Signout</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <PageMask />
          <ModalWrapper>
            {!this.state.signoutsuccess && (<div>
              <h1>Would you like to log out?</h1>
                <div className='modal-buttons'>
                  <Button onClick={this.toggle}>No</Button>
                  <Button onClick={this.handleSubmit}>Yes</Button>
                </div>
              </div>)}
          </ModalWrapper>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Signout);
