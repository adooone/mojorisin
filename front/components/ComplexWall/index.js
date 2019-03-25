import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class CoplexWall extends Component {
    render() {
        const { complexBackground, imageBackgroundSrc } = this.props;
        return (
            <div className='CoplexWall'>
                <div className={ classnames('backgroundDark', { 'transparentDark': complexBackground }) } />
                { complexBackground ? this.renderImageBackground(imageBackgroundSrc) : null }
            </div>
        );
    }
    renderImageBackground(src) {
        return (
            <div className='imageBackground'>
                <img width='100%' src={ src } alt='back' />
            </div>
        );
    }
}

CoplexWall.propTypes = {
    complexBackground: PropTypes.bool.isRequired,
    imageBackgroundSrc: PropTypes.string.isRequired,
};

//CoplexWall.defaultProps = {
//
//};

function select(store) {
    return {
        complexBackground: store.viewReducer.complexBackground,
        imageBackgroundSrc: store.viewReducer.imageBackgroundSrc,
    };
}

export default connect(select)(CoplexWall);
