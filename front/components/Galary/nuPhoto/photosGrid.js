import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
// import { Scrollbars } from 'react-custom-scrollbars';
import { Grid } from '@material-ui/core';
import anime from '../../../lib/anime';
import Photo from './photo';
import { GET_PHOTOS } from '../../../redux/actions/actions';

class PhotosGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            // loaded: false,
            //
        };
    }
    static getDerivedStateFromProps(nextProps/* , prevState */) {
        const images = nextProps.photoData;
        PhotosGrid.PhotoAnimate(images);
        return { images };
    }
    static PhotoAnimate() {
        setTimeout(() => {
            anime({
                targets: '.PhotoGridItem',
                marginTop: '0',
                opacity: '1',
                duration: 600,
                easing: 'easeOutQuart',
                delay: anime.stagger(150),
            });
        }, 500);
    }
    componentDidMount() {
        this.props.dispatch(GET_PHOTOS(this.props.data.name));
    }
    render() {
        return (
            // <Scrollbars>
                <Grid
                    id='gridPhotosContainer'
                    className='PhotoGridContainer'
                    container
                    spacing={ 0 }
                >
                    {_.map(this.state.images, (obj, i) => {
                        const targetId = `photo-${ i }`;
                        return (
                            <Grid
                                id={ targetId }
                                className='PhotoGridItem'
                                key={ i }
                                item
                                xs={ 6 }
                                sm={ 12 }
                                md={ 6 }
                                lg={ 4 }
                            >
                                <Photo obj={ { ...obj, album: this.props.data.name } } />
                            </Grid>
                        );
                    })}
                </Grid>
            // </Scrollbars>
        );
    }
}

PhotosGrid.propTypes = {
    data: PropTypes.object.isRequired,
    photoData: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

//Item.defaultProps = {
//
//};

function select(store) {
    return {
        photoData: store.viewReducer.photoData,
        //
    };
}

export default connect(select)(PhotosGrid);
