import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModuleWrapper from '../wrapper';
// import classnames from 'classnames';
// import {
// IconButton,
//     Icon,
// } from '@material-ui/core';

class About extends Component {
    render() {
        return (
            <ModuleWrapper>About</ModuleWrapper>
        );
    }
}

//About.propTypes = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(About);
