import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CLOSE_PHOTO } from '../../../redux/actions/actions';
// import classnames from 'classnames';
class PhotoView extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }
    render() {
        const { obj } = this.props;
        console.log(obj);
        return (
            <div className='PhotoView'>
                <div className='background' />
                <div className='image'>
                    <img src={ obj.src } alt={ obj.name } />
                    <div
                        role='presentation'
                        className='closeBtn'
                        onClick={ this.handleClose }
                    >
                        { 'close' }
                    </div>
                </div>
            </div>
        );
    }
    handleClose() {
        this.props.dispatch(CLOSE_PHOTO());
    }
}

PhotoView.propTypes = {
    obj: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

//PhotoView.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(PhotoView);
