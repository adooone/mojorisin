import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
// import {
//     IconButton,
//     Icon,
// } from '@material-ui/core';

class Splash extends Component {
    render() {
        return (
            <div id='splash'>Splash</div>
        );
    }
}

//Splash.propTypes = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Splash);
