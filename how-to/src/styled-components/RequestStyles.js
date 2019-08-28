import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background-color: white;
  box-shadow: 0px 0px 4px;
  outline: none;
  width: 800px;
  height: 430px;
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
      font-family: 'Helvetica', sans-serif;
      font-size: 18px;
      padding: 5px;
    }

    .modal-buttons {
      display: flex;
      justify-content: space-between;
    }
  }

  .request-success {
    width: 92%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 36px;
    }

    a {
      width: 100%;

      button {
        font-size: 24px;
        padding: 18px;
        width: 50%;
      }  
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