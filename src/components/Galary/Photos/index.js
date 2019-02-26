import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
// import classnames from 'classnames';
import photos from '../../../description/photos';
import Album from './album';
import { CLOSE_ALBUMS } from '../../../redux/actions/actions';
import PhotoGrid from './photos';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.getAlbums = this.getAlbums.bind(this);
    }
    componentDidUpdate() {
        if (this.props.match.isExact) this.props.dispatch(CLOSE_ALBUMS());
    }
    render() {
        const { match } = this.props;
        return (
            <div className='photosContainer'>
                <Route exact path={ match.url } render={ this.getAlbums } />
                <Route
                    path='/photos/:name'
                    render={ () => <PhotoGrid /> }
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
}

Photos.propTypes = {
    // dict: PropTypes.object.isRequired,
    // opened: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    // selectedModule: PropTypes.object.isRequired,
    // selectedAlbum: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    //
};

// Photos.defaultProps = {
//     selectedAlbum: false,
//     //
// };

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
