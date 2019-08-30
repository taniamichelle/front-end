import React, { useState, useEffect } from 'react';
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
  const [filterOpen, setFilterOpen] = useState(false);
  const [arrowStyle, setArrowStyle] = useState({});
  const [search, setSearch] = useState('');
  const [filteredTutorials, setFilteredTutorials] = useState([]);

  const handleChange = event => setSearch(event.target.value);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  useEffect ((
  ) => {
    filterOpen ? setArrowStyle({transform: 'rotate(90deg)'}) : setArrowStyle({});
    filterOpen ? props.history.push('/search/filter') : props.history.push('/search');
  }, [filterOpen]);

  const handleReset = () => {
    setSearch('');
    props.history.push('/search');
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFilteredTutorials(props.tutorialsData.filter(element => JSON.stringify(element).toLowerCase().includes(search.toLowerCase())));
    props.history.push('/search/results');
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setFilteredTutorials(props.tutorialsData.filter(element => JSON.stringify(element).toLowerCase().includes(search.toLowerCase())));
      props.history.push('/search/results');  
    }
  }

  return (
    <SearchStyles>
      <h2>Let's Learn!</h2>
      <form>
        <div className='searchbar'>
          <input name='search' type='text' value={search} onChange={event => handleChange(event)} onKeyDown={event => handleKeyDown(event)} placeholder='Search' />
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
          <FilterBar filterOpen={filterOpen} toggleFilter={toggleFilter} arrowStyle={arrowStyle} />
          <Request />
        </div>
        <Route exact path='/search' render={props => <NewTutorials {...props} />} />
        <Route path='/search/results' render={props => <SearchResults {...props} search={search} filteredTutorials={filteredTutorials} />} />
        <Route path='/search/filter' component={Filters} />
      {/* </form> */}
    </SearchStyles>
  )
}

const mapStateToProps = state => {
  return {
    tutorialsData: state.tutorialReducer.tutorialsData
  };
};

export default connect(mapStateToProps, newTutorialData)(SearchForm);