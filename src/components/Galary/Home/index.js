import React, { Component } from 'react';
import { /* Link,  */withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import ModuleWrapper from '../wrapper';
// import { Button } from '@material-ui/core';
// import LogoSVG from '../../Logo/LogoSVG';
import { Button, TextField, FormGroup, Paper } from '@material-ui/core';
import UploadForm from '../UploadForm';
import neptune from '../../../neptune_api';
// import { randomText } from '../../Helpers/functions';
// import classnames from 'classnames';
// import {
// IconButton,
//     Icon,
// } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getAlbumName: 'photos',
            albumName: 'photos',
            //
        };
        this.getPhotos = this.getPhotos.bind(this);
        this.createAlbum = this.createAlbum.bind(this);
    }
    render() {
        return (
            <div className='homePage'>
                {/* <Link to='/photos' className='homePage'> */}
                {/* <Button color='primary'>Welcome to my portfolio</Button> */}
                {/* <div> */}
                {/* <LogoSVG width='30%' />
                <p className='homeCaptionName'>RISIN PRODUCTION</p> */}
                <UploadForm />
                <Paper>
                    <FormGroup>
                        <TextField
                            id='getName'
                            label='Album Name'
                            onChange={ e => { this.setState({ getAlbumName: e.target.value }); } }
                        />
                        <Button onClick={ this.getPhotos }>Get Photos</Button>
                    </FormGroup>
                </Paper>
                <Paper>
                    <FormGroup>
                        <TextField
                            id='name'
                            label='Album Name'
                            onChange={ e => { this.setState({ albumName: e.target.value }); } }
                        />
                        <Button onClick={ this.createAlbum }>create album</Button>
                    </FormGroup>
                </Paper>
                {/* </div>
                <div>
                    { randomText(['text'], 200) }
                </div> */}
                {/* </Link> */}
            </div>
        );
    }
    getPhotos() {
        neptune.getPhotos(this.state.getAlbumName);
    }
    createAlbum() {
        neptune.createAlbum(this.state.albumName);
    }
}

//Home.propTypes = {
//
//};

function select(/* store */) {
    return { };
}

export default withRouter(connect(select)(Home));
