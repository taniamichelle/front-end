import React, { useState, useEffect } from 'react';
import UploadForm from './UploadForm';
import TutorialCard from './TutorialCard';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const TutorialsList = (props) => {
    return (
        <div>
            <div className='tutorial-name'>
                <h1>{props.name}</h1>
            </div>
            <div className='tutorial-top-content'>
                <img src={require("../../images/video.png")} />
                <button className='save-btn'>Save!</button>
                <button className='helpful-btn'>Helpful!</button>
                <button className='not-helpful-btn'>Didn't Help...</button>
            </div>
            <div className='tutorial-bottom-content'>
                {props.description}
            </div>
        </div>
    );
};

export default TutorialsList;