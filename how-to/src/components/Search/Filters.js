import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

const FilterStyles = styled.div`
  width: 100%;

  .searchfields {
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

  ul {
    padding: 0;

    li {
      width: 170px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;

      img {
        width: 50px;
      }  
    }
  }

  .categories {
    display: flex;
    align-items: center;
  }

  .subwrap {
    margin-left: 30px;
  }

  .subs {
    max-height: 300px;
    width: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    p {
      font-size: 18px;
      margin: 9px 0;
    }
  }
`;

const categories = [
  {
    category: 'Appliances',
    subcategories: ['Sub1', 'Sub2', 'Sub3']
  },
  {
    category: 'Arts & Crafts',
    subcategories: ['Sub1', 'Sub2', 'Sub3']
  },
  {
    category: 'Automotive',
    subcategories: ['Sub1', 'Sub2', 'Sub3']
  },
  {
    category: 'Education',
    subcategories: ['Sub1', 'Sub2', 'Sub3']
  },
  {
    category: 'Electronics',
    subcategories: ['Sub1', 'Sub2', 'Sub3']
  },
  {
    category: 'Fishing',
    subcategories: ['Sub1', 'Sub2', 'Sub3']
  },
  {
    category: 'Home',
    subcategories: ['Beds', 'Cabinets & Countertops', 'Curtains/Blinds/Shutters', 'Desking & Railing', 'Drywall', 'Fencing', 'Flooring', 'Garage Doors', 'Gutters & Downspouts', 'Heating & Air', 'Hot Tubs, Spas, & Pools', 'Kitchen', 'Lighting', 'Windows & Doors']
  },
  {
    category: 'Hunting',
    subcategories: ['Sub1', 'Sub2', 'Sub3']
  },
  {
    category: 'Yard',
    subcategories: ['Sub1', 'Sub2', 'Sub3']
  },
]

const Subcategory = props => {
  return (
    <div className='subwrap'>
      <h3>{props.category}</h3>
      <div className='subs'>
      {props.subs.map(
        sub => (
        <p key={sub}>
          <input type='checkbox' />
          {sub}
        </p>
      ))}
      </div>
    </div>
  )
}

export default function Filters() {
  return (
    <FilterStyles>
      <div className='searchfields'>
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
      <div className='categories'>
        <ul>
          {categories.map(category => (
            <li key={category.category}>{category.category}
              <Link to={`/search/filter/${category.category}`}>
                <img 
                  alt='filter arrow' 
                  src={require('../../images/filter-arrow.png')}
                />
              </Link>
            </li>
          ))}
        </ul>
        {categories.map(category => (
          <Route key={category.category} path={`/search/filter/${category.category}`} 
            render={props => <Subcategory {...props} category={category.category} subs={category.subcategories} />}
        />
        ))}
      </div>
    </FilterStyles>
  )
}