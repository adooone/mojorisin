import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
// import {
//     IconButton,
//     Icon,
// } from '@material-ui/core';

class Slide extends Component {
    render() {
        const { name, wall, position } = this.props;
        return (
            <div className={ classnames('Slide', position) }>
                <img src={ wall } alt={ name } />
            </div>
        );
    }
}

Slide.propTypes = {
    name: PropTypes.string.isRequired,
    wall: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

function select(/* store */) {
    return { };
}

export default connect(select)(Slide);
