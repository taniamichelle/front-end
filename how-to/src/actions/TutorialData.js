import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_TUTORIALS_START = 'FETCH_TUTORIALS_START';
export const FETCH_TUTORIALS_SUCCESS = 'FETCH_TUTORIALS_SUCCESS';
export const FETCH_TUTORIALS_FAILURE = 'FETCH_TUTORIALS_FAILURE';

export const getTutorialData = () => {
    return dispatch => {
        dispatch({ type: FETCH_TUTORIALS_START });
        axiosWithAuth()
            .get('https://how-to-bw.herokuapp.com/api/tutorials')
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

export const NEW_TUTORIALS_START = 'NEW_TUTORIALS_START';
export const NEW_TUTORIALS_SUCCESS = 'NEW_TUTORIALS_SUCCESS';
export const NEW_TUTORIALS_FAILURE = 'NEW_TUTORIALS_FAILURE';

export const newTutorialData = () => {
    return dispatch => {
        dispatch({ type: NEW_TUTORIALS_START });
        axiosWithAuth()
            .get('https://how-to-bw.herokuapp.com/api/tutorials')
            .then(res => {
                // res.data
                console.log(res);
                dispatch({ type: NEW_TUTORIALS_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: NEW_TUTORIALS_FAILURE, payload: err.response });
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
            .post('https://how-to-bw.herokuapp.com/api/tutorials', tutorial)
            .then(res => {
                console.log(res);
                dispatch({ type: UPLOAD_TUTORIAL_SUCCESS, payload: res.data });
            })
            .catch(err => {
                console.log(err.response);
                dispatch({ type: UPLOAD_TUTORIAL_FAILURE, payload: err.response });
            });
    };
};

export const EDIT_TUTORIAL_START = 'EDIT_TUTORIAL_START';
export const EDIT_TUTORIAL_SUCCESS = 'EDIT_TUTORIAL_SUCCESS';
export const EDIT_TUTORIAL_FAILURE = 'EDIT_TUTORIAL_FAILURE';

export const editTutorial = (tutorial) => {
    return dispatch => {
        dispatch({ type: EDIT_TUTORIAL_START });
        console.log(tutorial);
        axiosWithAuth()
            .put(`https://how-to-bw.herokuapp.com/api/tutorials/${tutorial.id}`, tutorial)
            .then(res => {
                //console.log(res);
                dispatch({ type: EDIT_TUTORIAL_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: EDIT_TUTORIAL_FAILURE, payload: err.response });
            });
    };
};

export const DELETE_TUTORIAL_START = 'DELETE_TUTORIAL_START';
export const DELETE_TUTORIAL_SUCCESS = 'DELETE_TUTORIAL_SUCCESS';
export const DELETE_TUTORIAL_FAILURE = 'DELETE_TUTORIAL_FAILURE';

export const deleteTutorial = (tutorial) => {
    return dispatch => {
        dispatch({ type: DELETE_TUTORIAL_START });
        console.log(tutorial);
        axiosWithAuth()
            .delete(`https://how-to-bw.herokuapp.com/api/tutorials/${tutorial.id}`)
            .then(res => {
                //console.log(res);
                dispatch({ type: DELETE_TUTORIAL_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: DELETE_TUTORIAL_FAILURE, payload: err.response });
            });
    };
};

