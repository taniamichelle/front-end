import React from 'react';
import { Link } from 'react-router-dom';

// pass deleteTutorial fxn from Tutorials file as a prop to keep TutorialCard dumb
const TutorialCard = ({ tutorial, deleteTutorial }) => {
    return (
        <div className='tutorial-description'>
            <p>{props.tutorial.description}</p>
            <button onClick={() => deleteTutorial(tutorial.id)}>Delete</button>
            <Link to={`/tutorials/edit/${tutorial.id}`}>Edit</Link>
        </div>
    );
};

export default TutorialCard;
