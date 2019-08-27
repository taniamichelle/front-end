import React from 'react';
import styled from 'styled-components';

const FilterStyles = styled.div`
  width: 100%;

  .categories {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      margin: 3px 0;
    }

    input {
      border: 2px solid gray;
      border-radius: 3px;
      padding: 5px 10px;
      font-size: 18px;
      width: 180px;
    }

    button {
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      color: #c4c4be;
      background-color: #898a7d;
      border: none;
      padding: 10px 20px;
      border-radius: 3px;
    }
  }
`;

const categories = [
  {
    category: 'Appliances',
    subcategories: []
  },
  {
    category: 'Arts & Crafts',
    subcategories: []
  },
  {
    category: 'Automotive',
    subcategories: []
  },
  {
    category: 'Education',
    subcategories: []
  },
  {
    category: 'Electronics',
    subcategories: []
  },
  {
    category: 'Fishing',
    subcategories: []
  },
  {
    category: 'Home',
    subcategories: []
  },
  {
    category: 'Hunting',
    subcategories: []
  },
  {
    category: 'Yard',
    subcategories: []
  },
]

export default function Filters() {
  return (
    <FilterStyles>
      <div className='categories'>
        <h3>Categories</h3>
        <div>
          <h4>Keyword Search</h4>
          <input></input>
        </div>
        <div>
          <h4>Category Search</h4>
          <input></input>
        </div>
        <button>Apply</button>
      </div>
      <ul>
        {
          categories.map(category => (
            <li>{category.category}</li>
          ))
        }
      </ul>
    </FilterStyles>
  )
}