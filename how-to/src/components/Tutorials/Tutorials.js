import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getTutorialData } from '../../actions/TutorialData';
import TutorialsStyles from '../../styled-components/TutorialsStyles';

const Tutorials = props => {
    return (
        <TutorialsStyles>
            <div ClassName='tutorials-container'>
                <div className='tutorials-header'>

                </div>
                <h1>How to Change a Lightbulb</h1>
                <div className='tutorials-content'>
                    <div className='tutorial-top-content'>
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
                    onClick={props.getTutorialsData}>
                    {props.isLoading ? (
                        <Loader type='Oval'
                            color='#00BFFF'
                            height={20}
                            width={20} />
                    ) : (
                            'More Tutorials'
                        )}
                </button>
                {/* {props.tutorialData && props.tutorialData.map(data => <TutorialCard key={data.name} tutorial={data} />)}
                <div className='upload-tutorial'> */}

                {/* </div> */}
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

{/* <div className='tutorial-header'>

</div>
    <div className='tutorial-name'>
        <h1>{props.tutorials.name}</h1> 
    </div>
    <div className='tutorial-top-content'>
        <img src={require("../../images/video.png")} />
        <button className='save-btn'>Save!</button>
        <button className='helpful-btn'>Helpful!</button>
        <button className='not-helpful-btn'>Didn't Help...</button>
    </div>
    <div className='tutorial-bottom-content'>
        {props.tutorials.description} 
        {props.tutorials.map(tutorial => {
            return <TutorialCard key={props.tutorials.id}
                tutorials={props.tutorials}
                deleteTutorial={props.deleteTutorial} editTutorial={props.editTutorial} />;
        })}
    </div> */}