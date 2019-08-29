import React, { useState } from 'react';
import UploadStyles from '../../styled-components/UploadStyles';

const UploadForm = ({ addTutorial, tutorial }) => {
    console.log(addTutorial);
    const [upload, setUpload] = useState({
        name: '',
        description: '',
        keywords: '',
        url: ''
    });

    const handleChange = event => setUpload({ ...upload, [event.target.name]: event.target.value });

    const handleSubmit = event => {
        event.preventDefault();
        addTutorial(tutorial);
        setUpload('');
    };
    
    return (
        <UploadStyles>
            <div className='upload-container'>
                <div className='file-select-container'>
                    <h3>Select File</h3>
                    <img className="select-file-img" src={require("../../images/select-file.png")} />
                    <div className='select-categories'>
                        <h1>Select Categories</h1>
                        <ul>
                            <li>Appliances <img src={require("../../images/filter-arrow.png")} /></li>
                            <li>Arts and Crafts <img src={require("../../images/filter-arrow.png")} /></li>
                            <li>Automotive <img src={require("../../images/filter-arrow.png")} /></li>
                            <li>Education <img src={require("../../images/filter-arrow.png")} /></li>
                            <li>Electronics <img src={require("../../images/filter-arrow.png")} /></li>
                            <li>Fishing <img src={require("../../images/filter-arrow.png")} /></li>
                            <li>Home <img src={require("../../images/filter-arrow.png")} /></li>
                            <li>Hunting <img src={require("../../images/filter-arrow.png")} /></li>
                            <li>Yard <img src={require("../../images/filter-arrow.png")} /></li>
                        </ul>
                    </div>
                </div>
                <div className='upload-content'>
                    <h1>Upload Tutorial</h1>
                    <div className='upload-form'>
                        <form onSubmit={handleSubmit}>
                            <div className='name-field'>
                                <legend>Tutorial Name</legend>
                                <input
                                    type='text'
                                    name='name'
                                    value={upload.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='description-field'>
                                <legend>Tutorial Description</legend>
                                <textarea
                                    name='description'
                                    rows='15'
                                    value={upload.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='keywords-field'>
                                <legend>Key Words (separate with comma)</legend>
                                <input
                                    name='keywords'
                                    type='text'
                                    value={upload.keywords}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='url-field'>
                                <legend>URL</legend>
                                <input
                                    name='url'
                                    type='text'
                                    value={upload.url}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type='submit'>Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </UploadStyles>
    );
};

export default UploadForm;

// const mapStateToProps = (state) => {
//     return {
//         tutorialData: state.tutorialReducer.tutorialData
//     };
// };

// export default connect(mapStateToProps, uploadTutorial)(UploadForm);