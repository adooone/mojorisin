import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModuleWrapper from '../wrapper';
// import classnames from 'classnames';
// import {
//     IconButton,
//     Icon,
// } from '@material-ui/core';

class Contacts extends Component {
    render() {
        return (
            <ModuleWrapper className='contacts'>Contacts</ModuleWrapper>
        );
    }
}

//Contacts.propTypes = {
//
//};

function select(/* store */) {
    return { };
}

export default withRouter(connect(select)(Contacts));
