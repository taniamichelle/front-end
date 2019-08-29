import React from 'react';
import { Link } from 'react-router-dom';
import { deleteTutorial } from '../../actions/TutorialData';

// pass deleteTutorial fxn from Tutorials file as a prop to keep TutorialCard dumb
const UploadCard = (props) => {
    return (
        <div className='upload-description'>
            <p>{props.description}</p>
            <button onClick={() => deleteTutorial(props.id)}>Delete</button>
            <Link to={`/tutorials/edit/${props.id}`}>Edit</Link>
        </div>
    );
};

export default UploadCard;
