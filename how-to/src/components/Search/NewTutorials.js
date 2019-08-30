import React  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {newTutorialData} from '../../actions/TutorialData';
import TutorialsList from '../Tutorials/TutorialsList';
import {connect} from 'react-redux';

const NewTutorials = (props) => {
  return (
    <div>
      <h3>What's New?</h3>
        <div className='tutorials-list'>
          {props.tutorialsData && props.tutorialsData.map(tutorial => {
            return (
              <TutorialsList title={tutorial.title} 
                description={tutorial.description} 
                helpful={tutorial.helpful}
                id={tutorial.id}  
                tutorial={tutorial}
              />)}
            )}
        </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    tutorialsData: state.tutorialReducer.tutorialsData
  };
};

export default connect (mapStateToProps, newTutorialData)(NewTutorials);