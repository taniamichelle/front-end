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
} from '../actions/TutorialData';

export const initialState = {
    tutorialsData: [],
    isLoading: false,
    error: '',
    uploadingData: false,
    editingData: false,
    deletingData: false
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
                tutorialsData: action.payload,
                error: ''
            }
        case FETCH_TUTORIALS_FAILURE:
            return {
                ...state,
                error: ''
            }
        case UPLOAD_TUTORIAL_START:
            return {
                ...state,
                uploadingData: true
            }
        case UPLOAD_TUTORIAL_SUCCESS:
            return {
                ...state,
                uploadingData: false,
                tutorialsData: action.payload
            }
        case UPLOAD_TUTORIAL_FAILURE:
            return {
                ...state,
                error: ''
            }
        case EDIT_TUTORIAL_START:
            return {
                ...state,
                editingData: true
            }
        case EDIT_TUTORIAL_SUCCESS:
            return {
                ...state,
                editingData: false,
                tutorialsData: action.payload
            }
        case EDIT_TUTORIAL_FAILURE:
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}

export default tutorialReducer;