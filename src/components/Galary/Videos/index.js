import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import {
    Toolbar,
    // IconButton,
    // Icon,
} from '@material-ui/core';

class Videos extends Component {
    render() {
        return (
            <div>
                <Toolbar>
                    <p>Video Galary</p>
                </Toolbar>
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

export default connect(select)(Videos);
