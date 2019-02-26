import React, { Component } from 'react';
import { /* Link,  */withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import ModuleWrapper from '../wrapper';
// import { Button } from '@material-ui/core';
import LogoSVG from '../../Logo/LogoSVG';
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
                <LogoSVG width='30%' />
                <p className='homeCaptionName'>RISIN PRODUCTION</p>
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
