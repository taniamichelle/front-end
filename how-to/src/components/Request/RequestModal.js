import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper, Button } from '../../styled-components/RequestStyles';

// const handleChanges = (e) => {
//   this.setState( { [e.target.name] : e.target.value } )
// }

// toggle() {
//   this.setState(prevState => ({
//     modal: !prevState.modal
//   }));
// }

// handleSubmit = () => {
//     console.log('handleSubmit fired!')
//   axios
//     .post('https://reqres.in/api/users', {name: this.state.name, job: this.state.job})
//     .then(res => {
//       // this.setState({name: res.data.name, job: res.data.job})
//       this.setState({name: '', job: ''})
//       console.log(res);
//     })
//     .catch(err => console.log(err));
// }

const RequestModal = ({ isShowing, hide }) => isShowing ? 
ReactDOM.createPortal(
  <>
    <div className='modal-overlay' />
    <ModalWrapper aria-modal aria-hidden tabIndex={-1} role='dialog'>
        <h1>Tutorial Request Form</h1>
            <div className='modal-form'>
              <h2>What do you need a tutorial of? Please be detailed.</h2>
              <textarea 
              // onChange={handleChanges} value={state.name} 
              rows="15" cols="90" name="name" id="exampleText" />
              <div className='modal-buttons'>
                <Button onClick={hide}>Cancel</Button>
                <Button 
                // onClick={handleSubmit}
                >Submit</Button>
              </div>
            </div>
    </ModalWrapper>
  </>, document.body
) : null;

export default RequestModal;