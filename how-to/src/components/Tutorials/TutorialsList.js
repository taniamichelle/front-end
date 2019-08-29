import React, { useState, useEffect } from 'react';

const TutorialsList = (props) => {
    console.log(props);
    return (
        <div>
            <div className='tutorial-name'>
                <h1>{props.name}</h1>
            </div>
            <div className='tutorial-bottom-content'>
                {props.description}
            </div>
        </div>
    );
};

export default TutorialsList;