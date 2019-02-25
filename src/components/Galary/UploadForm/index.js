import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button,
    TextField,
} from '@material-ui/core';

import neptune from '../../../neptune_api';
// import classnames from 'classnames';
class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            db: null,
            selectedFile: null,
            name: null,
            info: null,
        };
        this.handleUpload = this.handleUpload.bind(this);
    }
    render() {
        return (
            <div className='UploadForm'>
                <TextField
                    id='db_name'
                    label='Database Name'
                    onChange={ e => { this.setState({ db: e.target.value }); } }
                />
                <TextField
                    id='name'
                    label='Name'
                    onChange={ e => { this.setState({ name: e.target.value }); } }
                />
                <TextField
                    id='info'
                    label='Info'
                    onChange={ e => { this.setState({ info: e.target.value }); } }
                />
                <input
                    style={ { marginTop: 20, marginBottom: 20 } }
                    type='file'
                    id='file'
                    name='file'
                    onChange={ e => { this.setState({ selectedFile: e.target.files[0] }); } }
                />
                <Button onClick={ this.handleUpload }>Upload</Button>
            </div>
        );
    }
    handleUpload() {
        const { selectedFile, name, info, db } = this.state;
        const data = new FormData();
        data.append('image', selectedFile, selectedFile.name);
        data.append('db', db);
        data.append('name', name);
        data.append('info', info);
        neptune.uploadPhoto(data);
    }
}

//UploadForm.propTypes = {
//
//};

//UploadForm.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(UploadForm);
