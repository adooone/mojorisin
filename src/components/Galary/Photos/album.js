import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { OPEN_ALBUM } from '../../../redux/actions/actions';
import photos from '../../../description/photos';
// import classnames from 'classnames';
// import {
//     IconButton,
//     Icon,
// } from '@material-ui/core';

class Album extends Component {
    render() {
        const album = _.find(photos.albums, (o) => {
            return o.name === this.props.name;
        });
        return (
            <Link to={ `/photos/${ album.name }` } className='albumLink'>
                <div className='albumBackground' style={ { backgroundImage: `url(${ this.props.background })` } }>
                    <Button
                        className='album'
                        onClick={ () => this.props.dispatch(OPEN_ALBUM(album)) }
                    >
                        <p>{this.props.name}</p>
                    </Button>
                </div>
            </Link>
        );
    }
}

Album.propTypes = {
    name: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

function select(/* store */) {
    return { };
}

export default connect(select)(Album);
