import React from 'react';
import { Link } from 'react-router-dom';
import { deleteTutorial } from '../../actions';

// pass deleteTutorial fxn from Tutorials file as a prop to keep TutorialCard dumb
const TutorialCard = (props) => {
    return (
        <div className='tutorial-description'>
            <p>{props.description}</p>
            <button onClick={() => deleteTutorial(props.id)}>Delete</button>
            <Link to={`/tutorials/edit/${props.id}`}>Edit</Link>
        </div>
    );
};

export default TutorialCard;
