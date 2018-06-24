import * as appActions from "./constants";

const initialState = {
    modal: false,
    navVisible: false,
    snackbarVisible: false,
    snackbarMessage: ''
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appActions.APP_OPEN_MODAL:
            return { ...state, modal: true };

        case appActions.APP_CLOSE_MODAL:
            return { ...state, modal: false };

        case appActions.APP_SWITCH_SIDEBAR:
            return { ...state, navVisible: !state.navVisible }

        case appActions.APP_CLOSE_SNACKBAR:
            return { ...state, snackbarVisible: false }

            case appActions.APP_LAUNCH_SNACKBAR:
            return { ...state, snackbarVisible: true }

        case appActions.APP_CHANGE_SNACKBAR_MESSAGE:
            return { ...state, snackbarMessage: action.payload }

        default:
            return state;
    }
};

export default appReducer;
