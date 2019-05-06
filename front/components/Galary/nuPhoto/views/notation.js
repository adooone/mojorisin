import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Link,
    //
} from 'react-router-dom';
import classnames from 'classnames';
import { PHOTOS_MODE_ALBUM } from '../../../../consts/generalConsts';
import { CLOSE_ALBUMS } from '../../../../redux/actions/actions';

class Notation extends Component {
    render() {
        const { selectedAlbum, photosMode } = this.props;
        const left = photosMode === PHOTOS_MODE_ALBUM;
        return (
            <div className={ classnames('notation', { 'left_side': left, 'right_side': !left }) }>
                <div className='text'>
                    <h3>{selectedAlbum.caption || 'Sessions'}</h3>
                    <p>We offer object and advertizing photo sessions and anything you want.</p>
                </div>
                <Link
                    to='/photos'
                    className='close_btn'
                    onClick={ () => this.props.dispatch(CLOSE_ALBUMS()) }
                    role='presentation'
                >
                    close
                </Link>
            </div>
        );
    }
}

Notation.propTypes = {
    selectedAlbum: PropTypes.object.isRequired,
    photosMode: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

//Notation.defaultProps = {
//
//};

function select(store) {
    return {
        selectedAlbum: store.viewReducer.selectedAlbum,
        photosMode: store.viewReducer.photosMode,
        //
    };
}

export default connect(select)(Notation);
