import React, { Component } from 'react';
import { /* Link,  */withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { TextField } from '@material-ui/core';
import UploadForm from './UploadForm';
import neptune from '../../../neptune_api';
import LoginForm from './login';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumName: 'photos',
            //
        };
        this.createAlbum = this.createAlbum.bind(this);
    }
    render() {
        const { admin } = this.props;
        return (
            <>
                {admin ? this.renderSettings() : <LoginForm /> }
            </>
        );
    }
    renderSettings() {
        return (
            <div className='AdminPage'>
                <UploadForm />
            </div>
        );
    }
    createAlbum() {
        neptune.createAlbum(this.state.albumName);
    }
}

Admin.propTypes = {
    admin: PropTypes.bool.isRequired,
    //
};

function select(store) {
    return {
        admin: store.viewReducer.admin,
        //
    };
}

export default withRouter(connect(select)(Admin));
