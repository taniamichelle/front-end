import React from 'react';

const Tutorials = props => {
    return (
        <div className='tutorial-content'>
            <div className='tutorial-header'>{props.tutorial.name}</div>
            <div className='tutorial-description'>
                <p>{props.tutorial.description}</p>
            </div>
        </div>
    );
};

export default Tutorials;
