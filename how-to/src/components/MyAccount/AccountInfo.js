import React from "react";
import styled from "styled-components";

const InfoDiv = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const AccountInfo = ({ person }) => {
  return (
    <div>
      <h4>Account Info</h4>
      <InfoDiv>
        <p>
          Name: {person.firstName} {person.lastName} ({person.username})
        </p>
        <hr />
        <p>Email: {person.email}</p>
        <hr />
      </InfoDiv>
    </div>
  );
};

export default AccountInfo;
