import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class VersionContainer extends Component {
    render() {
        return (
            <div className='VersionContainer'>{ process.env.NODE_ENV }</div>
        );
    }
}

//VersionContainer.propTypes = {
//
//};

//VersionContainer.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(VersionContainer);
