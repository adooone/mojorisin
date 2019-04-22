import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    withRouter,
    Route,
    Switch,
} from 'react-router-dom';
// import classnames from 'classnames';

import photos from '../../../description/photos';
// import Album from './album';
import Switcher from './Switcher/switcher';
import PhotosGrid from './photosGrid';
import PhotoView from './PhotoView';

class Photos extends Component {
    render() {
        const { match, mobileVersion, openedPhoto } = this.props;
        console.log(match);
        console.log(`${ match.url }/${ openedPhoto.name }`);
        return (
            <Switch>
                <Route
                    exact
                    path={ match.url }
                    render={ () => (
                        <Switcher
                            items={ photos.albums }
                            isMobile={ mobileVersion }
                            ContentComponent={ (data) => <PhotosGrid data={ data } /> }
                        />
                    ) }
                />
                <Route
                    exact
                    path={ `${ match.uri }/${ openedPhoto.name }` }
                    render={ () => <PhotoView obj={ openedPhoto } /> }
                />
            </Switch>
        );
    }
}

Photos.propTypes = {
    match: PropTypes.object.isRequired,
    mobileVersion: PropTypes.bool.isRequired,
    openedPhoto: PropTypes.object.isRequired,
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
        //
    };
}

export default withRouter(connect(select)(Photos));
