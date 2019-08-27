import React from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormText, Label, Input, FormGroup } from 'reactstrap';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: white;
  background-color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  display: block;
  width: 92px;
`;

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      textContent: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleSubmit(textContent) {
    axios
      .post('https://reqres.in/api/users', textContent)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.props.buttonLabel} Request Tutorial </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h1>Tutorial Request Form</h1></ModalHeader>
          <ModalBody>
              <h2>What do you need a tutorial of? Please be detailed.</h2>
        <FormGroup>
          <Label for="exampleText"></Label>
          
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
           
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Cancel</Button>{' '}
            <Button onClick={this.handleSubmit}>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Request;
