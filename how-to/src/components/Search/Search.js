import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newTutorialData } from '../../actions/TutorialData';
import { Route } from 'react-router-dom';

import Request from '../Request/Request';
import FilterBar from './FilterBar';
import NewTutorials from './NewTutorials';
import SearchResults from './SearchResults';
import Filters from './Filters';

import SearchStyles from '../../styled-components/SearchStyles';

const SearchForm = props => {
  console.log(props.tutorialsData);
  const [filterStatus, setFilterStatus] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredTutorials, setFilteredTutorials] = useState([]);

  const handleChange = event => setSearch(event.target.value);

  const handleReset = () => {
    setSearch('');
    props.history.push('/search');
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFilteredTutorials(props.tutorialsData.filter(element => JSON.stringify(element).toLowerCase().includes(search.toLowerCase())));
    props.history.push('/search/results');
  };

  return (
    <SearchStyles>
      <h2>Let's Learn!</h2>
      <form>
        <div className='searchbar'>
          <input name='search' type='text' value={search} onChange={event => handleChange(event)} placeholder='Search' />
          <img className='search-img' alt='search' onClick={event => handleSubmit(event)}
            src={require('../../images/search_white.png')} 
          />
        </div>
      </form>
        <br />
        <div className='buttons'>
          {search !== '' && <button className='resetBtn' onClick={handleReset}>Reset</button>}
          <span></span>
        </div>
        <div className='filter-request'>
          <FilterBar filterStatus={filterStatus} />
          <Request />
        </div>
        <Route exact path='/search' render={props => <NewTutorials {...props} />} />
        <Route path='/search/results' render={props => <SearchResults {...props} search={search} filteredTutorials={filteredTutorials} />} />
        <Route path='/search/filter' component={Filters} />
      {/* </form> */}
    </SearchStyles>
  )
}

// const FormikSearch = withFormik({
//   mapPropsToValues({ search }) {
//     return {
//       search: search || '',
//     }
//   },
// })(SearchForm);

const mapStateToProps = state => {
  return {
    tutorialsData: state.tutorialReducer.tutorialsData
  };
};

export default connect(mapStateToProps, newTutorialData)(SearchForm);