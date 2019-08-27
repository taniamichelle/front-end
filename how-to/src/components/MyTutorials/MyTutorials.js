import React from "react";

import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  border: 1px solid black;
  margin: 0 auto;
`;

const CheckboxOption = styled.div`
  margin-right: 20px;
`;

const MyTutorials = props => {
  return (
    <div>
      <h1>My Tutorials</h1>
      <CheckboxContainer>
        <CheckboxOption>
          <div>
            <label>Saved Tutorials</label>
            <input type="checkbox" />
          </div>
        </CheckboxOption>
        <CheckboxOption>
          <div>
            <label>My Uploads</label>
            <input type="checkbox" />
          </div>
        </CheckboxOption>
      </CheckboxContainer>
    </div>
  );
};

export default MyTutorials;
