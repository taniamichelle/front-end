import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import TutorialCard from './TutorialCard';
import { getTutorialData } from '../actions/TutorialData';

const TutorialsList = props => {
    return (
        <div ClassName='tutorials-container'>
            <div className='title'>How-to Tutorials:</div>
            <button className='get-tutorials-btn'
                onClick={props.getTutorialsData}>
                {props.isLoading ? (
                    <Loader type='Oval'
                        color='#00BFFF'
                        height={20}
                        width={20} />
                ) : (
                        'See Tutorials'
                    )}
            </button>
            {props.tutorialData && props.tutorialData.map(data => <TutorialCard key={data.name} tutorial={data} />)}
            <div className='upload-tutorial'>

            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.tutorialReducer.isLoading,
        tutorialsData: state.tutorialReducer.tutorialsData
    };
};

export default connect(mapStateToProps, { getTutorialData })(TutorialsList);  