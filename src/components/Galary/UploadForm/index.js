import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button,
    TextField,
    Select,
    MenuItem,
    FormLabel,
} from '@material-ui/core';

import neptune from '../../../neptune_api';
// import classnames from 'classnames';
class UploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            db: 'objects',
            selectedFile: null,
            name: null,
            info: null,
        };
        this.handleUpload = this.handleUpload.bind(this);
    }
    render() {
        return (
            <div className='UploadForm'>
                <FormLabel>Загрузка картинок</FormLabel>
                <Select
                    value={ this.state.db }
                    onChange={ e => { this.setState({ db: e.target.value }); } }
                    inputProps={ {
                        name: 'db_select',
                        id: 'db_select_id',
                    } }
                >
                    <MenuItem value='sessions'>Сессии</MenuItem>
                    <MenuItem value='objects'>Предметная</MenuItem>
                    <MenuItem value='advertising'>Реклама</MenuItem>
                </Select>
                <TextField
                    id='name'
                    label='Название'
                    onChange={ e => { this.setState({ name: e.target.value }); } }
                />
                <TextField
                    id='info'
                    label='Комментарий'
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
