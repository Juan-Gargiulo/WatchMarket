import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux'

import { closeSnackBar } from '../../core/app/actions'

const SnackbarComponent = ({open, message, handleSnackClose}) => (
    <Snackbar
        open={open}
        message={message}
        autoHideDuration={4000}
        onRequestClose={handleSnackClose}
    />
)

export default connect(
    state => ({
        open: state.app.snackbarVisible,
        message: state.app.snackbarMessage
    }),
    dispatch => ({
        handleSnackClose: () => dispatch(closeSnackBar())
    })
)(SnackbarComponent)