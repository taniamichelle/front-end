import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import UploadForm from './UploadForm';
import TutorialCard from './TutorialCard';
import { getTutorialData } from '../actions/TutorialData';

const Tutorials = (props) => {
    const [tutorialsList, setutorialsList] = useState([]);

    // this fxn performs get request and updates our state
    const getTutorials = () => {
        setTutorialsList(res.data);
    };

    // call getTutorials in useEffect
    useEffect(() => {
        getTutorials();
    }, []);

    const addTutorial = tutorial => {
        setTutorialsList(res.data)
    };

    const editTutorial = editedTutorial => {
        setTutorialsList(res.data);
    };

    const deleteTutorial = id => {
        setTutorialsList(res.data)
    };

    return (
        <div>
            <div className='tutorial-header'>
                <h1>Tutorials</h1>
                <h2>{tutorial.name}</h2>
                <button>Save!</button>
                <button>Helpful!</button>
            </div>
            <Route exact path='/tutorials' render={props => <UploadForm {...props} submitTutorial={addTutorial} />} />
            {tutorialsList.map(tutorial => {
                return <TutorialCard key={tutorial.id}
                    tutorial={tutorial}
                    deleteTutorial={deleteTutorial} />;
            })}
            <Route path='/tutorials/edit/:id' render={props => {
                //console.log(props);
                const currentTutorial = tutorialsList.find(tutorial => tutorial.id == props.match.params.id);
                //console.log(currentTutorial);
                // if currentTutorial is not defined, we can render a redirect instead
                if (!currentTutorial) {
                    return <Redirect to='/tutorials' />
                }
                return <UploadForm {...props} submitTutorial={editTutorial} initialValues={currentFriend} />;
            }} />
        </div>
    );
};

export default Tutorials;
