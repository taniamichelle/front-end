import React from 'react';
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

function Request() {
    return(
        <>
        Hello from request
        <Button>Request Tutorial</Button>
        </>
    )
    
}

export default Request;