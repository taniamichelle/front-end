import React, { useState, useEffect } from 'react';
import UploadForm from './UploadForm';
// import TutorialCard from './TutorialCard';
import {
    getTutorialData,
    uploadTutorial,
    editTutorial,
    deleteTutorial
} from '../../actions/TutorialData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Uploads = (props) => {
    const [uploads, setUploads] = useState([]);

    // this fxn performs get request and updates our state
    const getTutorials = () => {
        props.getTutorialData();
    };

    useEffect(() => {
        getTutorials();
    }, []);

    const addTutorial = (tutorial) => {
        props.uploadTutorial(tutorial);
        props.history.push('/search');
    };

    const editFunction = (tutorial) => {
        props.editTutorial(tutorial);
        props.history.push('/search');
    };

    const deleteFunction = (tutorial) => {
        props.deleteTutorial(tutorial);
        props.history.push('/search');
    };

    return (
        <div>
            <div className='tutorial-header'>
                <h1>Tutorials</h1>
            </div>
            <UploadForm {...props} addTutorial={addTutorial} deleteTutorial={deleteTutorial} editTutorial={editTutorial} />;

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        tutorialsData: state.tutorialReducer.tutorialsData
    };
};
export default connect(mapStateToProps, { getTutorialData, uploadTutorial, editTutorial, deleteTutorial })(Uploads);
