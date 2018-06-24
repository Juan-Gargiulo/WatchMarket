import * as appActions from './constants'

export const openModal = () => {
    return { type: appActions.APP_OPEN_MODAL };
}

export const closeModal = () => {
    return { type: appActions.APP_CLOSE_MODAL };
}

export const switchSidebar = () => {
    return { type: appActions.APP_SWITCH_SIDEBAR }
}

export const closeSnackBar = () => ({
    type: appActions.APP_CLOSE_SNACKBAR
})

export const launchSnackbar = () => ({
    type: appActions.APP_LAUNCH_SNACKBAR
})

export const changeSnackBarMessage = payload => ({
    type: appActions.APP_CHANGE_SNACKBAR_MESSAGE,
    payload
})