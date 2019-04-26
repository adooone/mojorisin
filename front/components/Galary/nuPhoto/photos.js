import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    withRouter,
    Route,
    Switch,
} from 'react-router-dom';
// import classnames from 'classnames';

import photoDescription from '../../../description/photos';
import Selector from './views/selector';
import PhotoView from './views/photo';
import AlbumView from './views/album';

class Photos extends Component {
    render() {
        const { selectedAlbum, mobileVersion/* , openedPhoto */ } = this.props;
        return (
            <>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={ () => (
                            <Selector
                                items={ photoDescription.albums }
                                isMobile={ mobileVersion }
                            />
                        ) }
                    />
                    <Route path={ `/${ selectedAlbum.path }` } render={ () => <AlbumView data={ selectedAlbum } /> } />
                    <Route path={ `/${ selectedAlbum.path }/:photoId` } render={ () => <PhotoView /> } />
                </Switch>
                {/* { openedPhoto && <PhotoView obj={ openedPhoto } /> } */}
            </>
        );
    }
}

Photos.propTypes = {
    // match: PropTypes.object.isRequired,
    mobileVersion: PropTypes.bool.isRequired,
    selectedAlbum: PropTypes.object.isRequired,
    // openedPhoto: PropTypes.any.isRequired,
    //
};

//Photos.defaultProps = {
//
//};

function select(store) {
    return {
        photoData: store.viewReducer.photoData,
        openedPhoto: store.viewReducer.openedPhoto,
        mobileVersion: store.viewReducer.mobileVersion,
        selectedAlbum: store.viewReducer.selectedAlbum,
        //
    };
}

export default withRouter(connect(select)(Photos));
