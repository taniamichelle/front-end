import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;

  ul {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    padding: 0 50px;

    li {
      list-style-type: none;
      margin-left: 40px;
      
      a {
        text-decoration: none;
        font-size: 24px;
        color: #292929;
      }
    }
  }
`;

function Nav({ location }) {
  const searchLink = (location.pathname.startsWith('/myaccount') 
    || location.pathname === '/upload'
    || location.pathname === '/tutorial') 
    ? <li><NavLink to='/search'>Search</NavLink></li> 
    : null;

  const myAccountLink = (location.pathname.startsWith('/search')
    || location.pathname.startsWith('/myaccount') 
    || location.pathname === '/upload'
    || location.pathname === '/tutorial') 
    ? <li><NavLink to='/myaccount'>Profile</NavLink></li> 
    : null;

  const uploadLink = (location.pathname.startsWith('/search')
    || location.pathname.startsWith('/myaccount') 
    || location.pathname === '/upload'
    || location.pathname === '/tutorial') 
    ? <li><NavLink to='/upload'>Upload</NavLink></li> 
    : null;

  const signOutLink = (location.pathname.startsWith('/search')
    || location.pathname.startsWith('/myaccount') 
    || location.pathname === '/upload'
    || location.pathname === '/tutorial') 
    ? <li><NavLink to='/signin'>Sign Out</NavLink></li> 
    : null;

  return (
    <StyledNav>
      <ul>
        {location.pathname === '/signin'
          && <li><NavLink to='/signup'>Sign Up</NavLink></li>}
        {location.pathname === '/signup' 
          && <li><NavLink to='/signin'>Sign In</NavLink></li>}
        {searchLink}
        {myAccountLink}
        {uploadLink}
        {signOutLink}
      </ul>
    </StyledNav>
  )
}

export default withRouter(Nav);