import * as appActions from "./constants";

const initialState = {
    modal: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appActions.APP_OPEN_MODAL:
            return { ...state, modal: true };

        case appActions.APP_CLOSE_MODAL:
            return { ...state, modal: false };

        default:
            return state;
    }
};

export default appReducer;
