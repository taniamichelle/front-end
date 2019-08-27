import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;

  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    padding: 0 50px;

    li {
      list-style-type: none;
      
      a {
        text-decoration: none;
      }
    }
  }
`;

export default function Nav(props) {
  return (
    <StyledNav>
      <ul>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/signin'>Sign In</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/'>Sign Out</Link></li>
      </ul>
    </StyledNav>
  )
}