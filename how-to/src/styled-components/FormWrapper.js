import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 2px solid gray;
  border-radius: 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 5%;

  h2 {
    align-self: center;
    margin: 0;
    font-size: 30px;
    margin-bottom: 20px;
  }

  label {
    color: #6e6f6e;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 3px;
  }

  input {
    align-self: stretch;
    padding: 15px;
    font-size: 18px;
    border: 2px solid #cbcbcb;
    border-radius: 3px
  }

  p {
    color: red;
    font-size: 12px;
    padding: 2px 0;
    margin: 0px;
  }

  a {
    width: 100%;
  }

  button {
    cursor: pointer;
    background-color: #0036cc;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    color: white;
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
    border: none;
    outline: none;
    border-radius: 3px;
  }
`;

export default FormWrapper;