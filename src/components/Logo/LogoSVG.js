import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../../img/dark.svg';

class LogoSVG extends Component {
    render() {
        return (
            <img height={ 48 } src={ Logo } alt='logo' />
        );
    }
}

//LogoSVG.propTypes = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(LogoSVG);
