import React, { useState, useEffect } from 'react';

const TutorialsList = (props) => {
    console.log(props);
    return (
        <div>
            <div className='tutorials-title'>
                <h3>{props.title}</h3>
            </div>
            <div className='tutorials-description'>
                {props.description}
            </div>
            <div className='tutorials-helpful'>
                {props.helpful}
            </div>
        </div>
    );
};

export default TutorialsList;