import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';
// import {
//     Toolbar,
//     // IconButton,
//     // Icon,
// } from '@material-ui/core';
// import ModuleWrapper from '../wrapper';
import Carousel from './Corousel/index';
import videos from '../../../description/videos';

class Videos extends Component {
    render() {
        return (
            <div className='CarouselHolder'>
                <Carousel slides={ videos } />
            </div>
        );
    }
}

//Videos.propTypes = {
//
//};

function select(/* store */) {
    return { };
}

export default withRouter(connect(select)(Videos));
