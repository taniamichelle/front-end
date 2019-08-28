import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import FilterStyles from '../../styled-components/FilterStyles'

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

export default function Filters({ match }) {
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
            <li key={category.category}>
              {category.category}
              <Link to={`${match.url}/${category.category}`}>
                <img 
                  alt='filter arrow' 
                  src={require('../../images/filter-arrow.png')}
                />
              </Link>
            </li>
          ))}
        </ul>
        {categories.map(category => (
          <Route key={category.category} path={`${match.path}/${category.category}`} 
            render={props => <Subcategory {...props} category={category.category} subs={category.subcategories} />}
        />
        ))}
      </div>
    </FilterStyles>
  )
}