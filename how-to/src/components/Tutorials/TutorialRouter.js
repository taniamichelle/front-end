import React from 'react';
import { connect } from 'react-redux';
import { newTutorialData } from '../../actions/TutorialData';

import TutorialContent from './TutorialContent';

function TutorialRouter(props) {
  return (
    <div>
      {props.tutorialsData && props.tutorialsData.map(tutorial => {
        return (<TutorialContent tutorial={tutorial} />)
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tutorialsData: state.tutorialReducer.tutorialsData
  };
};

export default connect(mapStateToProps, newTutorialData)(TutorialRouter);