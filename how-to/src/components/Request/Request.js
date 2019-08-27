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

const SubmitButton = styled.button`
    display: inline-block;
    color: white;
    background-color: blue;
    font-size: 1em;
    margin-left: 38em;
    margin-top: -2.9em;
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
      name: '',
      job: ''
    };

    // this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleSubmit = () => {
      console.log('handleSubmit fired!')
    axios
      .post('https://reqres.in/api/users', {name: this.state.name, job: this.state.job})
      .then(res => {
        // this.setState({name: res.data.name, job: res.data.job})
        this.setState({name: '', job: ''})
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  handleChanges = (e) => {
      this.setState( { [e.target.name] : e.target.value } )
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>{this.props.buttonLabel} Request Tutorial </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <h1>Tutorial Request Form</h1>
          <ModalBody>
              <h2>What do you need a tutorial of? Please be detailed.</h2>
        <FormGroup>
          <Label for="exampleText"></Label>
          
          <Input type="textarea" onChange={this.handleChanges} value={this.state.name} rows="12" cols="100" name="name" id="exampleText" />
        </FormGroup>
           
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Cancel</Button>{' '}
            <SubmitButton onClick={this.handleSubmit}>Submit</SubmitButton>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Request;
