import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
// import classnames from 'classnames';
import {
    Grid,
    // Paper,
    // Toolbar,
    //
} from '@material-ui/core';
import photos from '../../../description/photos';
import Album from './album';
import Photo from './photo';
import { CLOSE_ALBUMS } from '../../../redux/actions/actions';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.getAlbums = this.getAlbums.bind(this);
    }
    componentDidUpdate() {
        console.log(this.props.match.isExact);
        if (this.props.match.isExact) this.props.dispatch(CLOSE_ALBUMS());
    }
    render() {
        const { match, selectedAlbum } = this.props;
        console.log(selectedAlbum);
        return (
            <div className='photosContainer'>
                <Route exact path={ match.url } render={ this.getAlbums } />
                <Route
                    path='/photos/:name'
                    render={ this.getPhotos }
                />
            </div>
        );
    }
    getAlbums() {
        return (
            <div className='albums'>
                {_.map(photos.albums, (album, i) => {
                    return (
                        <Album
                            name={ album.name }
                            background={ album.background }
                            key={ i }
                        />
                    );
                })}
            </div>
        );
    }
    getPhotos({ match }) {
        const album = _.find(photos.albums, o => {
            return o.name === match.params.name;
            // return o.name === name;
        });
        return (
            <Grid
                className='photosContainer'
                container
                spacing={ 0 }
            >
                {album && _.map(album.images, (obj, i) => {
                    return (
                        <Grid key={ i } item xs={ 6 } sm={ 3 }>
                            <Photo obj={ obj } />
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

Photos.propTypes = {
    // dict: PropTypes.object.isRequired,
    // opened: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    // selectedModule: PropTypes.object.isRequired,
    selectedAlbum: PropTypes.object,
    match: PropTypes.object.isRequired,
    //
};

Photos.defaultProps = {
    selectedAlbum: false,
    //
};

function select(store) {
    return {
        opened: store.viewReducer.isMenuOpened,
        selectedModule: store.viewReducer.selectedModule,
        dict: store.viewReducer.dict,
        selectedAlbum: store.viewReducer.selectedAlbum,
        //
    };
}

export default withRouter(connect(select)(Photos));
