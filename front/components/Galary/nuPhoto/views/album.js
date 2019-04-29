import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Link,
    Switch,
    Route,
    withRouter,
    //
} from 'react-router-dom';
import classnames from 'classnames';
import { Grid } from '@material-ui/core';
import { GET_ALBUM } from '../../../../redux/actions/actions';
import PhotoView from './photo';

class AlbumView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            path: null,
        };
        this.renderAlbum = this.renderAlbum.bind(this);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { data, match } = nextProps;
        if (!_.isEqual(data, prevState.data)) {
            return { data, path: match.params.selectedAlbum };
        }
        return null;
    }
    componentDidMount() {
        const { match: { params: { selectedAlbum } } } = this.props;
        this.props.dispatch(GET_ALBUM(selectedAlbum));
    }
    render() {
        const { match } = this.props;
        return (
            <Switch>
                <Route exact path={ match.url } render={ this.renderAlbum } />
                <Route path={ `${ match.url }/:photoId` } component={ PhotoView } />
            </Switch>
        );
    }
    renderAlbum() {
        console.log('renderAlbum');
        console.log(this.state.path);
        return (
            <div className='album_view'>
                <Grid
                    container
                    direction='column'
                    spacing={ 0 }
                    className='photo_grid'
                >
                    {_.map(this.state.data, (item, i) => {
                        return (
                            <Grid
                                item
                                lg={ 4 }
                                key={ i }
                                className={ classnames('photo', 'hidden') }
                            >
                                <Link
                                    to={ `/photos/${ this.state.path }/${ i }` }
                                >
                                    <img src={ item.src } alt={ item.name } />
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

AlbumView.propTypes = {
    data: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

//AlbumView.defaultProps = {
//
//};

function select(store) {
    return {
        data: store.viewReducer.photoData,
        //
    };
}

export default withRouter(connect(select)(AlbumView));
