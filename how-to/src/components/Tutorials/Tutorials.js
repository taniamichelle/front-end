import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getTutorialData } from '../../actions/TutorialData';
import TutorialsStyles from '../../styled-components/TutorialsStyles';
import TutorialsList from './TutorialsList';

const Tutorials = props => {
    return (
        <TutorialsStyles>
            <div ClassName='tutorials-container'>
                <div className='tutorials-header'>

                </div>
                <h1>How to Change a Lightbulb</h1>
                <div className='tutorials-content'>
                    <div className='tutorials-top-content'>
                        <img src={require("../../images/video.png")} />
                    </div>
                    <div className='tutorials-middle-content'>
                        <button className='save-btn'>Save!</button>
                        <button className='helpful-btn'>Helpful!</button>
                        <button className='not-helpful-btn'>Didn't Help...</button>
                    </div>
                    <div className='tutorials-bottom-content'>
                        <h4>Description</h4>
                    </div>
                </div>
                <button className='get-tutorials-btn'
                    onClick={props.getTutorialData}>
                    {props.isLoading ? (
                        <Loader type='Oval'
                            color='#00BFFF'
                            height={20}
                            width={20} />
                    ) : (
                            'More Tutorials'
                        )}
                </button>
                {props.tutorialsData && props.tutorialsData.map(tutorial => {
                    return (
                        <TutorialsList title={tutorial.title} 
                                       description={tutorial.description} 
                                       helpful={tutorial.helpful}  
                        />)}
                    )}
            </div>
        </TutorialsStyles >
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.tutorialReducer.isLoading,
        tutorialsData: state.tutorialReducer.tutorialsData
    };
};

export default connect(mapStateToProps, { getTutorialData })(Tutorials);

{/* 
    <div className='tutorial-bottom-content'>
        {props.tutorials.description} 
        {props.tutorials.map(tutorial => {
            return <TutorialCard key={props.tutorials.id}
                tutorials={props.tutorials}
                deleteTutorial={props.deleteTutorial} editTutorial={props.editTutorial} />;
        })}
    </div> */}