import React, { Component } from 'react';
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

export default connect(select)(Contacts);
