import React, { useState, useEffect } from 'react';
import UploadForm from './UploadForm';
import TutorialCard from './TutorialCard';
import {
    getTutorialData,
    uploadTutorial,
    editTutorial,
    deleteTutorial
} from '../../actions/TutorialData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Tutorials = (props) => {
    const [tutorials, setTutorials] = useState([]);

    // this fxn performs get request and updates our state
    const getTutorials = () => {
        props.getTutorialData(tutorials);
    };

    // call getTutorials in useEffect
    useEffect(() => {
        getTutorials();
    }, []);

    const addTutorial = (tutorial) => {
        props.uploadTutorial(tutorial);
        props.history.push('/tutorials');
    };

    const editFunction = (tutorial) => {
        props.editTutorial(tutorial);
        props.history.push('/tutorials');
    };

    const deleteFunction = (tutorial) => {
        props.deleteTutorial(tutorial);
        props.history.push('/tutorials');
    };

    return (
        <div>
            <div className='tutorial-header'>

            </div>
            <div className='tutorial-name'>
                {/* <h1>{props.tutorials.name}</h1> */}
            </div>
            <div className='tutorial-top-content'>
                <img src={require("../../images/video.png")} />
                <button className='save-btn'>Save!</button>
                <button className='helpful-btn'>Helpful!</button>
                <button className='not-helpful-btn'>Didn't Help...</button>
            </div>
            <div className='tutorial-bottom-content'>
                {/* {props.tutorials.description} */}
                <Route path="/upload" render={props => <UploadForm {...props} addTutorial={addTutorial} />} />
                {props.tutorials.map(tutorial => {
                    return <TutorialCard key={props.tutorials.id}
                        tutorials={props.tutorials}
                        deleteTutorial={props.deleteTutorial} editTutorial={props.editTutorial} />;
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        tutorialsData: state.tutorialReducer.tutorialsData
    };
};
export default connect(mapStateToProps, { getTutorialData, uploadTutorial, editTutorial, deleteTutorial })(Tutorials);
