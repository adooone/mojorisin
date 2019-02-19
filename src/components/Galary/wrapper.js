import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
// import {
//     IconButton,
//     Icon,
// } from '@material-ui/core';

class ModuleWrapper extends Component {
    render() {
        return (
            <div
                className={ classnames('moduleModuleWrapper', ...this.props.classNames, this.props.className) }
            >
                { this.props.children }
            </div>
        );
    }
}

ModuleWrapper.propTypes = {
    children: PropTypes.any,
    classNames: PropTypes.array,
    className: PropTypes.string,
    //
};
ModuleWrapper.defaultProps = {
    children: () => { },
    classNames: [],
    className: '',
    //
};

function select(/* store */) {
    return { };
}

export default connect(select)(ModuleWrapper);
