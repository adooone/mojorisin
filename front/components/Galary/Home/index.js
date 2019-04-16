import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import ModuleWrapper from '../wrapper';
// import { Button } from '@material-ui/core';
// import LogoSVG from '../../Logo/LogoSVG';
import { Button } from '@material-ui/core';
import neptune from '../../../neptune_api';
import { OPEN_MODULE } from '../../../redux/actions/actions';
import Modules from '../../../description/modules';
// import { TEST_FETCH } from '../../../redux/actions/actions';
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
                {/* <LogoSVG width='20%' />
                <p className='homeCaptionName'>RISIN PRODUCTION</p> */}
                <Link to='photos'>
                    <Button
                        onClick={ () => { this.props.dispatch(OPEN_MODULE(Modules[2])); } }
                    >
                        {'photos'}
                    </Button>
                </Link>
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

Home.propTypes = {
    dispatch: PropTypes.func.isRequired,
    //
};

function select(/* store */) {
    return { };
}

export default withRouter(connect(select)(Home));
