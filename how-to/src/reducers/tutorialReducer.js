import {
    FETCH_TUTORIALS_START,
    FETCH_TUTORIALS_SUCCESS,
    FETCH_TUTORIALS_FAILURE,
    UPLOAD_TUTORIAL_START,
    UPLOAD_TUTORIAL_SUCCESS,
    UPLOAD_TUTORIAL_FAILURE,
    EDIT_TUTORIAL_START,
    EDIT_TUTORIAL_SUCCESS,
    EDIT_TUTORIAL_FAILURE,
    DELETE_TUTORIAL_START,
    DELETE_TUTORIAL_SUCCESS,
    DELETE_TUTORIAL_FAILURE,
} from '../actions';

export const initialState = {
    tutorialsData: [],
    isLoading: false,
    error: ''
}

const tutorialReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_TUTORIALS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_TUTORIALS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfsData: action.payload,
                error: ''
            }
        case UPLOAD_TUTORIAL_START:
            return {
                ...state
            }
        case UPLOAD_TUTORIAL_SUCCESS:
            return {
                ...state,
                tutorialsData: action.payload
            }
        case UPLOAD_TUTORIAL_FAILURE:
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}

export default tutorialReducer;