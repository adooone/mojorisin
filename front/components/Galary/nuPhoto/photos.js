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
        const { match } = this.props;
        return (
            <div className='Photos'>
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
                                ContentComponent={ (data) => <PhotosGrid data={ data } /> }
                            />
                        ) }
                    />
                    {/* { _.map(photos.albums, (album, i) => (
                        <Route
                            key={ i }
                            path={ `/photos/${ album.routePath }` }
                            render={ () => <Album /> }
                        />
                    )) } */}
                </Switch>
            </div>
        );
    }
}

Photos.propTypes = {
    match: PropTypes.object.isRequired,
    //
};

//Photos.defaultProps = {
//
//};

function select(store) {
    return {
        photoData: store.viewReducer.photoData,
        //
    };
}

export default withRouter(connect(select)(Photos));
