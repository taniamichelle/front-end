import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FormWrapper from '../../styled-components/FormWrapper';

const SuccessWrapper = styled(FormWrapper)`
  align-items: center;
  justify-content: space-between;
  max-height: 365px;

  h3 {
    font-size: 30px;
  }

  h4 {
    font-size: 36px;
    font-weight: normal;
  }
`;

export default function SignUpSuccess() {
  return (
    <div>
      <h1>It's time to start teaching each other!</h1>
      <SuccessWrapper>
        <h3>SUCCESS!</h3>
        <h4>LET'S GET STARTED</h4>
        <Link to='/search'><button>Continue!</button></Link>
      </SuccessWrapper>
    </div>
  )
}