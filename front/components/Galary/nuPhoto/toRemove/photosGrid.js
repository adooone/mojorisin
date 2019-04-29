import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
// import { Scrollbars } from 'react-custom-scrollbars';
import { Grid } from '@material-ui/core';
import Photo from './photo';
import { GET_ALBUM } from '../../../../redux/actions/actions';

class PhotosGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            // loadedImages: 0,
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
        let t0 = 0;
        let t1 = 0;
        setTimeout(() => {
            t0 = performance.now();
            _.forEach(this.state.images, (item, i) => {
                const target = `photo-${ i }`;
                setTimeout(() => {
                    document.getElementById(target).classList.remove('hidden');
                    t1 = performance.now();
                    console.log(t1 - t0);
                }, 100 * i);
            });
        }, 500);
    }
    componentDidMount() {
        // console.log('mounted');
        this.props.dispatch(GET_ALBUM(this.props.data.name));
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
                            // className={ classnames('PhotoGridItem', 'hidden') }
                            className='PhotoGridItem'
                            key={ i }
                            item
                            // xs={ 6 }
                            // sm={ 12 }
                            // md={ 6 }
                            lg={ 4 }
                        >
                            <Photo
                                obj={ { ...obj, album: this.props.data.name } }
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
