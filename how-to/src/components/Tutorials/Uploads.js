import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Uploads = props => {
    const [upload, setUpload] = useState({});

    const handleChange = event => setUpload({ ...upload, [event.target.name]: event.target.value });

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post('https://jsonplaceholder.typicode.com/posts')
            .then(res => console.log(res))
            .catch(err => console.log(err.response));
    };

    return (
        <Router>
            <div className='uploads-container'>
                <header>
                    <h3>How-To</h3>
                    <Link to='/search'>Search</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/sign out'>Sign Out</Link>
                </header>
                <div className='uploads-content'>
                    <h1>Upload Tutorial</h1>
                    <div className='uploads-form'>
                        <h3>Description</h3>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <legend>Legend Here</legend>
                                <div className='name-field'>
                                    <label>
                                        Tutorial Name
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Tutorial Name'
                                            value={upload.name}
                                            onChange={handleChange}
                                        />
                                    </label>
                                </div>
                                <div className='description-field'>
                                    <label>
                                        Tutorial Description
                                    <input
                                            name='description'
                                            type='text'
                                            placeholder='Enter description'
                                            value={upload.description}
                                            onChange={changeHandler}
                                        />
                                    </label>
                                </div>
                                <div className='keywords-field'>
                                    <label>
                                        Key Words (separate with comma)
                                    <input
                                            name='keywords'
                                            type='text'
                                            placeholder='Enter key words'
                                            value={upload.keywords}
                                            onChange={changeHandler}
                                        />
                                    </label>
                                </div>
                                <div className='url-field'>
                                    <label>
                                        URL
                                    <input
                                            name='url'
                                            type='text'
                                            placeholder='Enter url'
                                            value={upload.url}
                                            onChange={changeHandler}
                                        />
                                    </label>
                                </div>
                            </fieldset>
                            <button type='submit'>Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Uploads;