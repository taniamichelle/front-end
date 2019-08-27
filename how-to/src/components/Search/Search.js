import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import styled from 'styled-components';

const SearchStyles = styled.div`
  h2 {
    font-size: 36px;
  }
  
  h3 {
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .searchbar {
      width: 100%;
      display: flex;
      justify-content: center;

      input {
        width: 95%;
        border: 2px solid gray;
        border-radius: 3px;
        padding: 5px 10px;
        font-size: 18px;
      }

      button {
        width: 5%;
      }
    }
  }

  .requestBtn {
    align-self: flex-end;
    cursor: pointer;
    background-color: #0036cc;
    color: white;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
    border-radius: 3px;
  }
`;

const tempData = [
  {
    img: '', 
    description: 'I love cheese, especially croque monsieur macaaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
  },
  {
    img: '', 
    description: 'I love cheese, especially croque monsieur macaaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
  },
  {
    img: '', 
    description: 'I love cheese, especially croque monsieur macaaroni cheese. Edam lancashire gouda manchego queso blue castello feta gouda'
  },
]

const NewContent = () => {
  return (
    <div>
      <h3>What's New?</h3>
      {tempData.map(tutorial => (
        <div>
          <Link to='/tutorial'><img alt='video' src={tutorial.img}></img><p>{tutorial.description}</p></Link>
        </div>
      ))}
    </div>
  )
}

const Filter = () => {
  return (
    <div>
      Filters
    </div>
  )
}

const Search = ({ values }) => {
  return (
    <SearchStyles>
      <h2>Let's Learn!</h2>
      <Form>
        <div className='searchbar'>
          <Field name='search' type='text' placeholder='Search' />
          <button><span>🔍</span></button>
        </div>
        <br />
        <button className='requestBtn'>Request<br />Tutorial</button>
        <Filter />
        <NewContent />
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

})(Search);

export default FormikSearch;