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
<<<<<<< HEAD
    const getTutorials = () => {
        props.getTutorialData();
=======
    const getTutorials = (tutorials) => {
        props.getTutorialData(tutorials);
>>>>>>> 3e11eccba1deb5b1133e7eb870c0e3217f18da0d
    };

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
