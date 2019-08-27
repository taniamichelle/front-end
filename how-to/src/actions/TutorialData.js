import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_TUTORIALS_START = 'FETCH_TUTORIALS_START';
export const FETCH_TUTORIALS_SUCCESS = 'FETCH_TUTORIALS_SUCCESS';
export const FETCH_TUTORIALS_FAILURE = 'FETCH_TUTORIALS_FAILURE';

export const getTutorialData = () => {
    return dispatch => {
        dispatch({ type: FETCH_TUTORIALS_START });
        axiosWithAuth()
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                // res.data
                console.log(res);
                dispatch({ type: FETCH_TUTORIALS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCH_TUTORIALS_FAILURE, payload: err.response });
            });
    };
};

export const UPLOAD_TUTORIAL_START = 'UPLOAD_TUTORIAL_START';
export const UPLOAD_TUTORIAL_SUCCESS = 'UPLOAD_TUTORIAL_SUCCESS';
export const UPLOAD_TUTORIAL_FAILURE = 'UPLOAD_TUTORIAL_FAILURE';

export const uploadTutorial = (tutorial) => {
    return dispatch => {
        dispatch({ type: UPLOAD_TUTORIAL_START });
        console.log(tutorial);
        axiosWithAuth()
            .post('https://jsonplaceholder.typicode.com/posts', tutorial)
            .then(res => {
                //console.log(res);
                dispatch({ type: UPLOAD_TUTORIAL_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: UPLOAD_TUTORIAL_FAILURE, payload: err.response });
            });
    };
};

