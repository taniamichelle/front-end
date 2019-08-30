import React from 'react';
import axios from 'axios';
import { Modal, Input } from 'reactstrap';

import { ModalWrapper, PageMask, Button } from '../../styled-components/RequestStyles';

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      job: '',
      requestsuccess: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('toggle');
    this.setState(prevState => ({
      modal: !prevState.modal,
      requestsuccess: false,
    }));
  }

  handleSubmit = () => {
      console.log('handleSubmit fired!')
    axios
      .post('https://reqres.in/api/users', {name: this.state.name, job: this.state.job})
      .then(res => {
        this.setState({name: res.data.name, job: res.data.job})
        console.log(res);
        this.setState({requestsuccess: true})
        this.setState({name: '', job: ''})
      })
      .catch(err => console.log(err));
  }

  handleChanges = e => {
      this.setState( { [e.target.name] : e.target.value } )
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.props.buttonLabel}Request<br/>Tutorial</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <PageMask />
          <ModalWrapper>
            {!this.state.requestsuccess && (<div>
              <h1>Tutorial Request Form</h1>
              <div className='modal-form'>
                <h2>What do you need a tutorial of? Please be detailed.</h2>
                <Input type="textarea" onChange={this.handleChanges} value={this.state.name} rows="10" cols='90' name="name" id="exampleText" />
                <div className='modal-buttons'>
                  <Button onClick={this.toggle}>Cancel</Button>
                  <Button onClick={this.handleSubmit}>Submit</Button>
                </div>
              </div>
            </div>)}
            {this.state.requestsuccess && (<div className='request-success'>
              <h1>SUCCESS!</h1>
              <h2>Your request has been submitted! Thank you!</h2>
              <Button onClick={this.toggle}>CONTINUE!</Button>
            </div>)}
          </ModalWrapper>
        </Modal>
      </div>
    );
  }
}

export default Request;
