import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import ModuleWrapper from '../wrapper';
import { Button } from '@material-ui/core';
import LogoSVG from '../../Logo/LogoSVG';
// import classnames from 'classnames';
// import {
// IconButton,
//     Icon,
// } from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <div className='homePage'>
                <LogoSVG width='40%' />
                <p className='homeCaptionName'>RISIN PRODUCTION</p>
                <Link to='/photos'>
                    <Button color='primary'>Welcome to my portfolio</Button>
                </Link>
            </div>
        );
    }
}

//Home.propTypes = {
//
//};

function select(/* store */) {
    return { };
}

export default withRouter(connect(select)(Home));
