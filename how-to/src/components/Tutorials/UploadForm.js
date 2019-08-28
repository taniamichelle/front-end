// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { uploadTutorial } from '../actions/TutorialData';

// const UploadForm = ({ uploadTutorial }) => {
//     const [upload, setUpload] = useState({
//         tutorial: {
//             name: '',
//             description: '',
//             keywords: ''
//         }
//     });

//     const handleChange = event => setUpload({ ...upload, [event.target.name]: event.target.value });

//     const handleSubmit = event => {
//         event.preventDefault();
//         // uploadTutorial(tutorial);
//         setUpload('');
//     };

//     return (
//         <div className='upload-container'>
//             <header>
//                 <h3>How-To</h3>
//             </header>
//             <div className='upload-content'>
//                 <h1>Upload Tutorial</h1>
//                 <div className='upload-form'>
//                     <form onSubmit={handleSubmit}>
//                         <fieldset>
//                             <legend>Upload a Tutorial</legend>
//                             <div className='name-field'>
//                                 <label>
//                                     Tutorial Name
//                                     <input
//                                         type='text'
//                                         name='name'
//                                         placeholder='Tutorial Name'
//                                         value={upload.name}
//                                         onChange={handleChange}
//                                     />
//                                 </label>
//                             </div>
//                             <div className='description-field'>
//                                 <label>
//                                     Tutorial Description
//                                 <input
//                                         name='description'
//                                         type='text'
//                                         placeholder='Enter description'
//                                         value={upload.description}
//                                         onChange={handleChange}
//                                     />
//                                 </label>
//                             </div>
//                             <div className='keywords-field'>
//                                 <label>
//                                     Key Words (separate with comma)
//                                 <input
//                                         name='keywords'
//                                         type='text'
//                                         placeholder='Enter key words'
//                                         value={upload.keywords}
//                                         onChange={handleChange}
//                                     />
//                                 </label>
//                             </div>
//                             <div className='url-field'>
//                                 <label>
//                                     URL
//                                 <input
//                                         name='url'
//                                         type='text'
//                                         placeholder='Enter url'
//                                         value={upload.url}
//                                         onChange={handleChange}
//                                     />
//                                 </label>
//                             </div>
//                         </fieldset>
//                         <button type='submit'>Confirm</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const mapStateToProps = (state) => {
//     return {
//         // tutorialData: state.tutorialReducer.tutorialData
//     };
// };

// export default connect(mapStateToProps, uploadTutorial)(UploadForm);