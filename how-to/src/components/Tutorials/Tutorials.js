import React from 'react';

const Tutorials = props => {
    return (
        // <Router>
            <div className='tutorial-container'>
                <div className='tutorial-header'>
                    <h1>{props.tutorial.name}</h1>
                    <button>Save!</button>
                    <button>Helpful!</button>
                </div>
                <div className='tutorial-description'>
                    <p>{props.tutorial.description}</p>
                </div>
            </div>
        // </Router>
    );
};

export default Tutorials;
