import React from 'react';
import axios from 'axios';
import { Modal } from 'reactstrap';
import { withRouter } from 'react-router'; 
import styled from 'styled-components';

import { ModalWrapper, PageMask, Button } from '../../styled-components/RequestStyles';

const SignoutButton = styled.button`
  background-color: #feffe5;
  border: none;
  font-size: 30px;
  cursor: pointer;
  outline: none;
`;

const SignoutModal = styled(ModalWrapper)`
  width: 450px;
  height: 180px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 30px;
    margin: 0;
  }

  .modal-buttons {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

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
      // console.log('props from Signout', this.props)
      // console.log('handleSubmit fired!')
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
        <SignoutButton onClick={this.toggle}>{this.props.buttonLabel}Sign Out</SignoutButton>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <PageMask />
          <SignoutModal>
            <h1>Would you like to log out?</h1>
            <div className='modal-buttons'>
              <Button onClick={this.toggle}>No</Button>
              <Button onClick={this.handleSubmit}>Yes</Button>
            </div>
          </SignoutModal>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Signout);
