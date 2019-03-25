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

class Photos extends Component {
    render() {
        const { match, mobileVersion } = this.props;
        return (
            <Switch>
                <Route
                    exact
                    path={ match.url }
                    render={ () => (
                        <Switcher
                            onChange={ (index) => {
                                console.log(photos.albums[index]);
                            } }
                            items={ photos.albums }
                            isMobile={ mobileVersion }
                            ContentComponent={ (data) => <PhotosGrid data={ data } /> }
                        />
                    ) }
                />
            </Switch>
        );
    }
}

Photos.propTypes = {
    match: PropTypes.object.isRequired,
    mobileVersion: PropTypes.bool.isRequired,
    //
};

//Photos.defaultProps = {
//
//};

function select(store) {
    return {
        photoData: store.viewReducer.photoData,
        mobileVersion: store.viewReducer.mobileVersion,
        //
    };
}

export default withRouter(connect(select)(Photos));
