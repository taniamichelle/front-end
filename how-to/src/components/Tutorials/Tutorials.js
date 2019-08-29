import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTutorialData } from '../../actions/TutorialData';
import TutorialsStyles from '../../styled-components/TutorialsStyles';
import TutorialsList from './TutorialsList';

const Tutorials = props => {
    console.log(props.tutorialsData);
    return (
        <TutorialsStyles>
            <div className='tutorials-container'>
                <h1>How to Change a Lightbulb</h1>
                <Link className='back-btn' to='/search'><img className='back-arrow' alt='back arrow' src={require('../../images/filter-arrow.png')} />Back</Link>
                <div className='tutorials-content'>
                    <img className='video-img' src={require("../../images/video.png")} />
                    <div className='tutorials-middle-content'>
                        <button className='save-btn'>Save!</button>
                        <div className='help-btns'>
                            <div className='btns-count'>
                                <button className='helpful-btn'>Helpful!</button>
                                <p className='helpful-count'>4K</p>
                            </div>
                            <div className='btns-count'>
                                <button className='not-helpful-btn'>Didn't<br />help...</button>
                                <p not-helpful-count>293</p>
                            </div>
                        </div>
                    </div>
                    <div className='tutorials-bottom-content'>
                        <h4>Description</h4>
                        <p className='tutorial-desc'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia inventore eveniet illo? Repudiandae officiis, ut sapiente facilis velit fugit quisquam ab soluta labore, voluptates quaerat iure quidem veritatis dolorum?
                        </p>
                    </div>
                </div>
                {/* <button className='get-tutorials-btn'
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
                    )} */}
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