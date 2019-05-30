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
            viewingModuleIndex: 2,
            //
        };
        this.getPhotos = this.getPhotos.bind(this);
        this.createAlbum = this.createAlbum.bind(this);
    }
    render() {
        const { dict } = this.props;
        const { viewingModuleIndex } = this.state;
        return (
            <div className='home'>
                {/* <LogoSVG width='20%' />
                <p className='homeCaptionName'>RISIN PRODUCTION</p> */}
                <div className='home_item'>
                    <div className='we_are'>
                        <h1>WE</h1>
                        <h1>ARE</h1>
                    </div>
                    <div className='button_link'>
                        <div className='label'>{ dict.translate(Modules[viewingModuleIndex].captionHome) }</div>
                        <div className='info'>
                            We o!er object and advertizing photo sessions
                            and anything you want.
                        </div>
                        <Link to='photos'>
                            <Button
                                className='buttton'
                                onClick={ () => { this.props.dispatch(OPEN_MODULE(Modules[viewingModuleIndex])); } }
                            >
                                {'Open'}
                            </Button>
                        </Link>
                    </div>
                </div>
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
    dict: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

function select(store) {
    return {
        dict: store.viewReducer.dict,
        //
    };
}

export default withRouter(connect(select)(Home));
