import * as appActions from "./constants";

const initialState = {
    modal: false,
    navVisible: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appActions.APP_OPEN_MODAL:
            return { ...state, modal: true };

        case appActions.APP_CLOSE_MODAL:
            return { ...state, modal: false };

        case appActions.APP_SWITCH_SIDEBAR:
            return { state, navVisible: !state.navVisible }

        default:
            return state;
    }
};

export default appReducer;
