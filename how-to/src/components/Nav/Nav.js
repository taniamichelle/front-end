import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import Signout from '../Signout/Signout';



const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin: 20px auto 0;
  width: 100%;
  max-width: 1000px;
  height: 80px;

  .logo {
    width: 120px;
    position: relative;
    top: 0px;
    left: -100px;
    z-index: 9999;
    margin: 0;
  }

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
        font-size: 30px;
        color: #292929;
      }
    }
  }
`;

function Nav({ location, buttonLabel }) {

  const searchLink = (location.pathname.startsWith('/myaccount') 
    || location.pathname === '/upload'
    || location.pathname === '/tutorials') 
    ? <li><NavLink to='/search'>Search</NavLink></li> 
    : null;

  const myAccountLink = (location.pathname.startsWith('/search')
    || location.pathname.startsWith('/myaccount') 
    || location.pathname === '/upload'
    || location.pathname === '/tutorials') 
    ? <li><NavLink to='/myaccount'>Profile</NavLink></li> 
    : null;

  const uploadLink = (location.pathname.startsWith('/search')
    || location.pathname.startsWith('/myaccount')) 
    ? <li><NavLink to='/upload'>Upload</NavLink></li> 
    : null;

  const signOutLink = (location.pathname.startsWith('/search')
    || location.pathname.startsWith('/myaccount') 
    || location.pathname === '/upload'
    || location.pathname === '/tutorials') 
    ? <li><Signout /></li> 
    : null;




  return (
    <StyledNav>
      <NavLink><img className='logo' alt='logo' src={require('../../images/logo.png')} /></NavLink>
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