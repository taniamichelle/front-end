import React from 'react';
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
  console.log(props.filterOpen);

  return (
    <FilterStyles>
      <div className='filterbar'>
        <span>Filters</span>
          <img 
            style={{cursor: 'pointer', ...props.arrowStyle}}
            alt='filter arrow' 
            onClick={props.toggleFilter}
            src={require('../../images/filter-arrow.png')} 
          />
        {props.filterStatus ? 'Applied' : 'None'}
      </div>
    </FilterStyles>
  )
}

export default Filters;