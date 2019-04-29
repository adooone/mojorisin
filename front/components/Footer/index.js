import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { PHOTOS_MODE_ALBUM } from '../../consts/generalConsts';

class Footer extends Component {
    render() {
        const { photosMode } = this.props;
        const isAlbumOpened = photosMode === PHOTOS_MODE_ALBUM;
        return (
            <div className='Footer'>
                <div className={ classnames('info_container', { 'album': isAlbumOpened }) }>
                    <p className='rights'>Risin Production all rights are not reserved</p>
                    <div className='vertical_divider' />
                    <p className='designer'>Designed by NeptuneWS</p>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    photosMode: PropTypes.string.isRequired,
    //
};

//Footer.defaultProps = {
//
//};

function select(store) {
    return {
        // selectedAlbum: store.viewReducer.selectedAlbum,
        photosMode: store.viewReducer.photosMode,
        //
    };
}

export default connect(select)(Footer);
