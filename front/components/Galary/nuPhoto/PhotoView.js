import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class PhotoView extends Component {
    render() {
        const { obj } = this.props;
        console.log(obj);
        return (
            <div className='PhotoView'>
                <img src={ obj.src } alt={ obj.name } />
            </div>
        );
    }
}

PhotoView.propTypes = {
    obj: PropTypes.object.isRequired,
    //
};

//PhotoView.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(PhotoView);
