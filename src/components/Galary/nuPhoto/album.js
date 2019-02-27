import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class Album extends Component {
    render() {
        return (
            <div className='Album'>Album</div>
        );
    }
}

//Album.propTypes = {
//
//};

//Album.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Album);
