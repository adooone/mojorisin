import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../../img/logodarkf.svg';

class LogoSVG extends Component {
    render() {
        return (
            <img
                height={ !this.props.width ? this.props.size : null }
                width={ this.props.width }
                src={ Logo }
                alt='logo'
            />
        );
    }
}

LogoSVG.propTypes = {
    size: PropTypes.any,
    width: PropTypes.any,
    //
};
LogoSVG.defaultProps = {
    size: 48,
    width: null,
    //
};

function select(/* store */) {
    return { };
}

export default connect(select)(LogoSVG);
