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
    }, [getTutorials]);

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
                <h2>{tutorials.name}</h2>
                <button>Save!</button>
                <button>Helpful!</button>
            </div>
            <Route exact path='/tutorials' render={props => <UploadForm {...props} addTutorial={addTutorial} />} />
            {tutorials.map(tutorial => {
                return <TutorialCard key={tutorials.id}
                    tutorials={tutorials}
                    deleteTutorial={deleteTutorial} />;
            })}
            {/* <Route path={`/tutorials/`} render={props => {
                //console.log(props);
                const currentTutorial = tutorials.find(tutorial => tutorials.id == props.match.params.id);
                //console.log(currentTutorial);
                // if currentTutorial is not defined, we can render a redirect instead
                // if (!currentTutorial) {
                //     return props.history.push('/tutorials')
                // }
                return <UploadForm {...props} addTutorial={addTutorial} initialValues={currentTutorial} />;
            }} /> */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        tutorialsData: state.tutorialReducer.tutorialsData
    };
};
export default connect(mapStateToProps, { getTutorialData, uploadTutorial, editTutorial, deleteTutorial })(Tutorials);
