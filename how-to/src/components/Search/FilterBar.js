import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FilterStyles = styled.div`
  font-size: 18px;

  .filterbar {
    display: flex;
    align-items: center;
  }

  span {
    font-weight: bold;
  }

  img {
    width: 50px;
  }
`;

const Filters = props => {
  return (
    <FilterStyles>
      <div className='filterbar'>
        <span>Filters</span>
        <Link to='/search/filter'>
          <img 
            alt='filter arrow' 
            src={require('../../images/filter-arrow.png')} 
          />
        </Link>
        {props.filterStatus ? 'Applied' : 'None'}
      </div>
    </FilterStyles>
  )
}

export default Filters;