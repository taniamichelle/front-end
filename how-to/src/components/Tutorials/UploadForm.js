import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { uploadTutorial } from '../actions/TutorialData';

const UploadForm = ({ addTutorial, tutorial }) => {
    const [upload, setUpload] = useState({
        tutorial: {
            name: '',
            description: '',
            keywords: ''
        }
    });

    const handleChange = event => setUpload({ ...upload, [event.target.name]: event.target.value });

    const handleSubmit = event => {
        event.preventDefault();
        addTutorial(tutorial);
        setUpload('');
    };

    return (
        <div className='upload-container'>
            <div className='file-select-container'>
                <h3>Select File</h3>
                <div className='select-categories'>
                    <h1>Select Categories</h1>
                    <ul>
                        <li>Appliances</li>
                        <li>Arts and Crafts</li>
                        <li>Automotive</li>
                        <li>Education</li>
                        <li>Electronics</li>
                        <li>Fishing</li>
                        <li>Home</li>
                        <li>Hunting</li>
                        <li>Yard</li>
                    </ul>
                </div>
            </div>
            <div className='upload-content'>
                <h1>Upload Tutorial</h1>
                <div className='upload-form'>
                    <form onSubmit={handleSubmit}>
                        {/* <fieldset> */}
                        {/* <legend>Upload Tutorial</legend> */}
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
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className='keywords-field'>
                            <label>
                                Key Words (separate with comma)
                                <input
                                    name='keywords'
                                    type='text'
                                    placeholder='Enter keywords'
                                    value={upload.keywords}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        {/* </fieldset> */}
                        <button type='submit'>Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadForm;

// const mapStateToProps = (state) => {
//     return {
//         tutorialData: state.tutorialReducer.tutorialData
//     };
// };

// export default connect(mapStateToProps, uploadTutorial)(UploadForm);