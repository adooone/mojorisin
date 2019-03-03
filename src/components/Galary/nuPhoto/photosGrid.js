import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
// import { Scrollbars } from 'react-custom-scrollbars';
import { Grid, IconButton } from '@material-ui/core';
import anime from 'animejs';
import Photo from './photo';
import { GET_PHOTOS } from '../../../redux/actions/actions';
// import neptune from '../../../neptune_api';

function animate(targetId, delay) {
    setTimeout(() => {
        const target = document.getElementById(targetId);
        anime({
            targets: target,
            marginTop: '0',
            duration: 1000,
            easing: 'easeOutQuart',
        });
    }, delay);
}

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
        // if (!prevState.loaded) {
        //     PhotosGrid.PhotoAnimate(images);
        //     return { images, loaded: true };
        // }
        PhotosGrid.PhotoAnimate(images);
        return { images };
    }
    static PhotoAnimate(images) {
        const grid = document.getElementById('gridPhotosContainer');
        setTimeout(() => {
            anime({
                targets: grid,
                translateY: '-100vh',
                duration: 700,
                easing: 'easeOutQuad',
            });
        }, 500);
        _.forEach(images, (image, i) => {
            const targetId = `photo-${ i }`;
            animate(targetId, (i < 3 ? i : i - 3) * 200);
        });
        animate('addBtn', (images.length - 3) * 200);
    }
    componentDidMount() {
        this.props.dispatch(GET_PHOTOS(this.props.data.name));
        // neptune.getPhotos(this.props.data.name)
        //     .then(res => {
        //         const images = res.data.photos;
        //         this.setState({ images: res.data.photos });
        //         const grid = document.getElementById('gridPhotosContainer');
        //         setTimeout(() => {
        //             anime({
        //                 targets: grid,
        //                 translateY: '-100vh',
        //                 duration: 700,
        //                 easing: 'easeOutQuad',
        //             });
        //         }, 500);
        //         _.forEach(images, (image, i) => {
        //             const targetId = `photo-${ i }`;
        //             this.animate(targetId, (i < 3 ? i : i - 3) * 200);
        //         });
        //         this.animate('addBtn', (images.length - 3) * 200);
        //     });
    }
    animate(targetId, delay) {
        setTimeout(() => {
            const target = document.getElementById(targetId);
            anime({
                targets: target,
                marginTop: '0',
                duration: 1000,
                easing: 'easeOutQuart',
            });
        }, delay);
    }
    render() {
        return (
            // <Scrollbars className='CorouselItemScroller'>
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
                            sm={ 4 }
                        >
                            <Photo obj={ { ...obj, album: this.props.data.name } } />
                        </Grid>
                    );
                })}
                <Grid
                    id='addBtn'
                    className='PhotoGridItem'
                    key={ this.state.images.length }
                    item
                    xs={ 6 }
                    sm={ 4 }
                >
                    <div className='addBtnContainer'>
                        <IconButton className='addBtn'>
                            {/* <Icon fontSize='large'>add</Icon> */}
                            <p>add photo</p>
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
            // </Scrollbars>
        );
    }
}

PhotosGrid.propTypes = {
    data: PropTypes.object.isRequired,
    photoData: PropTypes.object.isRequired,
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
