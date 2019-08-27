import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';

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
          <Link to='/tutorial'><p>{tutorial.description}</p></Link>
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
    <div>
      <h2>Let's Learn!</h2>
      <Form>
        <Field name='search' type='text' placeholder='Search' />
        <button><span>🔍</span></button>
        <br />
        <button>Request Tutorial</button>
        <Filter />
        <NewContent />
      </Form>
    </div>
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