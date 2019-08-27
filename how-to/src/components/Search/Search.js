import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import styled from 'styled-components';

import Filters from './Filters';
import NewTutorials from './NewTutorials';
import SearchResults from './SearchResults';

import SearchStyles from '../../styled-components/SearchStyles';

const SearchForm = ({ values }) => {
  const handleReset = () => {};

  return (
    <SearchStyles>
      <h2>Let's Learn!</h2>
      <Form>
        <div className='searchbar'>
          <Field name='search' type='text' placeholder='Search' />
          <img alt='search' src={require('../../images/search_white.png')} />
        </div>
        <br />
        <div className='buttons'>
          {values.search !== '' && <button className='resetBtn' onClick={handleReset}>Reset</button>}
          <span></span>
          <button className='requestBtn'>
            Request<br />Tutorial</button>
        </div>
        <Filters />
        <NewTutorials />
        <SearchResults />
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