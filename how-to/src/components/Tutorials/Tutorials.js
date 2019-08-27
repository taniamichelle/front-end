import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

const Tutorials = props => {
    const [tutorial, setTutorial] = useState({});

    const handleChange = event => setTutorial({ ...tutorial, [event.target.name]: event.target.value });

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts')
            .then(res => console.log(res))
            .catch(err => console.log(err.response));
    };

    return (
        <Router>
            <div className='tutorials-container'>
                {/* <header>
                    <h3>How-To</h3>
                    <Link to='/search'>Search</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/sign out'>Sign Out</Link>
                </header> */}
                <div className='tutorials-content'>
                    <h1>How to Title</h1>
                    <button>Save!</button>
                    <button>Helpful!</button>
                    <div className='tutorials-form'>
                        <h3>Description</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                title='description'
                                name='description'
                                placeholder='Enter Description'
                                value={tutorial.description}
                                onChange={handleChange}
                            />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Tutorials;