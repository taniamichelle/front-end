import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background-color: white;
  box-shadow: 0px 0px 4px;
  outline: none;
  width: 800px;
  margin: 0 auto;
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translate(-50%, 0px);
  text-align: center;
  padding-bottom: 30px;

  h1 {
    font-size: 36px;
  }

  h2 {
    font-weight: normal;
    margin: 0;
    text-align: left;
  }

  .modal-form {
    width: 80%;
    margin: 0 auto;
  
    textarea {
      max-width: 99%;
      margin: 5px 0 20px 0;
    }

    .modal-buttons {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Button = styled.button`
  color: white;
  background-color: #0036cc;
  font-size: 30px;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
`;