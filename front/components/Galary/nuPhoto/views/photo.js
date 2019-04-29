import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Link,
    //
} from 'react-router-dom';
import { CLOSE_PHOTO } from '../../../../redux/actions/actions';
// import classnames from 'classnames';
class PhotoView extends Component {
    constructor(props) {
        super(props);
        this.state = { image: {} };
        this.handleClose = this.handleClose.bind(this);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { data, match: { params: { photoId } } } = nextProps;
        if (!_.isEmpty(data) && !_.isEqual(data[photoId], prevState.image)) {
            console.log(data);
            return { image: data[photoId] };
        }
        return null;
    }
    render() {
        // const { data, match } = this.props;
        const obj = this.state.image;
        console.log(this.state);
        if (this.state.image) {
            return (
                <div className='photo_view'>
                    <div className='background' />
                    <div className='image'>
                        <img src={ obj.src } alt={ obj.name } />
                        <Link to='./' className='closeBtn'>close</Link>
                        {/* <div
                            role='presentation'
                            className='closeBtn'
                            onClick={ this.handleClose }
                        >
                            {'close'}
                        </div> */}
                    </div>
                </div>
            );
        }
        return null;
    }
    handleClose() {
        this.props.dispatch(CLOSE_PHOTO());
    }
}

PhotoView.propTypes = {
    // obj: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired,
    //
};

//PhotoView.defaultProps = {
//
//};

function select(store) {
    return {
        data: store.viewReducer.photoData,
        //
    };
}

export default connect(select)(PhotoView);
