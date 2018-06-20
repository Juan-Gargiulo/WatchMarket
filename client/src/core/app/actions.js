import * as appActions from './constants'

export const openModal = () => {
    return { type: appActions.APP_OPEN_MODAL };
}

export const closeModal = () => {
    return { type: appActions.APP_CLOSE_MODAL };
}