import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import Request from '../Request/Request';
import RequestModal from '../Request/RequestModal';
import useModal from './useModal';
import FilterBar from './FilterBar';
import NewTutorials from './NewTutorials';
import SearchResults from './SearchResults';
import Filters from './Filters';

import SearchStyles from '../../styled-components/SearchStyles';

const SearchForm = ({ values }) => {
  const [filterStatus, setFilterStatus] = useState(false);
  const [Tutorials, setTutorials] = useState([])

  useEffect(() => {
    axios
      .get('https://how-to-bw.herokuapp.com/api/tutorials')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);

  const handleReset = () => values.search='';

  const { isShowing, toggle } = useModal();

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
          <Request />
          {/* <button className='button-default requestBtn' onClick={toggle}>Request<br />Tutorial</button>
          <RequestModal isShowing={isShowing} hide={toggle} /> */}
        </div>
        <FilterBar filterStatus={filterStatus} />
        <Route exact path='/search' render={props => <NewTutorials {...props} />} />
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