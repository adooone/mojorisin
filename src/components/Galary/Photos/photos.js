import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Grid,
    // Paper,
    // Toolbar,
    //
} from '@material-ui/core';
import Photo from './photo';
import neptune from '../../../neptune_api';
// import classnames from 'classnames';

class PhotoGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            //
        };
    }
    componentDidUpdate(prevProps) {
        const { name } = this.props.selectedAlbum;
        if (this.props.selectedAlbum !== prevProps.selectedAlbum) {
            neptune.getPhotos(name)
                .then(res => this.setState({ images: res.data.photos }));
        }
    }
    render() {
        return (
            <Grid
                className='PhotoGridContainer'
                container
                spacing={ 0 }
            >
                {this.props.selectedAlbum && _.map(this.state.images, (obj, i) => {
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

PhotoGrid.propTypes = {
    // dict: PropTypes.object.isRequired,
    // opened: PropTypes.bool.isRequired,
    // dispatch: PropTypes.func.isRequired,
    // selectedModule: PropTypes.object.isRequired,
    selectedAlbum: PropTypes.object.isRequired,
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

export default withRouter(connect(select)(PhotoGrid));
