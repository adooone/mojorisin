import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <div className='info_container'>
                    <p className='rights'>Risin Production all rights are not reserved</p>
                    <div className='vertical_divider' />
                    <p className='designer'>Designed by NeptuneWS</p>
                </div>
            </div>
        );
    }
}

//Footer.propTypes = {
//
//};

//Footer.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Footer);
