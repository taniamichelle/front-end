import React, { useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Route, Link } from 'react-router-dom';

import Request from '../Request/RequestHooks';
import FilterBar from './FilterBar';
import NewTutorials from './NewTutorials';
import SearchResults from './SearchResults';
import Filters from './Filters';

import SearchStyles from '../../styled-components/SearchStyles';

const SearchForm = ({ values }) => {
  const [filterStatus, setFilterStatus] = useState(false);

  const handleReset = () => values.search='';

  return (
    <SearchStyles>
      <h2>Let's Learn!</h2>
      <Form>
        <div className='searchbar'>
          <Field name='search' type='text' placeholder='Search' />
          <Link to='/search/results'>
            <img alt='search' 
              src={require('../../images/search_white.png')} 
            />
          </Link>
        </div>
        <br />
        <div className='buttons'>
          {values.search !== '' && <button className='resetBtn' onClick={handleReset}>Reset</button>}
          <span></span>
          {/* <button className='requestBtn'>
            Request<br />Tutorial</button> */}
          <Request />
        </div>
        <FilterBar filterStatus={filterStatus} />
        <Route exact path='/search' component={NewTutorials} />
        <Route path='/search/results' render={props => <SearchResults {...props} search={values.search} />} />
        <Route path='/search/filter' component={Filters} />
      </Form>
    </SearchStyles>
  )
}

const FormikSearch = withFormik({
  mapPropsToValues({ search }) {
    return {
      search: search || '',
    }
  },

})(SearchForm);

export default FormikSearch;