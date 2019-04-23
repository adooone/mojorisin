import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
// import { Scrollbars } from 'react-custom-scrollbars';
import { Grid } from '@material-ui/core';
// import anime from '../../../lib/anime';
import Photo from './photo';
import { GET_PHOTOS } from '../../../redux/actions/actions';
import motion from '../../../lib/motion';

class PhotosGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            loadedImages: 0,
            // loaded: false,
            //
        };
        this.photoAnimate = this.photoAnimate.bind(this);
    }
    static getDerivedStateFromProps(nextProps/* , prevState */) {
        const images = nextProps.photoData;
        // PhotosGrid.PhotoAnimate(images);
        return { images };
    }
    photoAnimate() {
        setTimeout(() => {
            _.forEach(this.state.images, (item, i) => {
                const target = `photo-${ i }`;
                setTimeout(() => {
                    motion.moveToTop(target);
                }, 100 * i);
            });
        }, 500);
    }
    componentDidMount() {
        console.log('mounted');
        this.props.dispatch(GET_PHOTOS(this.props.data.name));
    }
    onImageLoad = () => {
        let count = this.state.loadedImages;
        this.setState({ loadedImages: ++count });
        console.log(count === this.state.images.length);

        if (count === this.state.images.length) this.photoAnimate();
    }
    render() {
        return (
            // <Scrollbars>
            <Grid
                id='gridPhotosContainer'
                className='PhotoGridContainer'
                container
                direction='column'
                spacing={ 0 }
            >
                {_.map(this.state.images, (obj, i) => {
                    const targetId = `photo-${ i }`;
                    return (
                        <Grid
                            id={ targetId }
                            className={ classnames('PhotoGridItem', 'hidden') }
                            key={ i }
                            item
                            // xs={ 6 }
                            // sm={ 12 }
                            // md={ 6 }
                            lg={ 4 }
                        >
                            <Photo
                                obj={ { ...obj, album: this.props.data.name } }
                                onLoad={ this.onImageLoad }
                            />
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
