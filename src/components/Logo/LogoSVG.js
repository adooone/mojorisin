import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../../img/logodarkf.svg';

class LogoSVG extends Component {
    render() {
        return (
            <img height={ this.props.size } src={ Logo } alt='logo' />
        );
    }
}

LogoSVG.propTypes = {
    size: PropTypes.number,
    //
};
LogoSVG.defaultProps = {
    size: 48,
    //
};

function select(/* store */) {
    return { };
}

export default connect(select)(LogoSVG);
