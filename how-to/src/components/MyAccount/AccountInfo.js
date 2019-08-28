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
          Name: {person.first_name} {person.last_name}
        </p>
        <hr />
        {/* <p>Email: {person.last_name}</p> */}
        <hr />
      </InfoDiv>
    </div>
  );
};

export default AccountInfo;
