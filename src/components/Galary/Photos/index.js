import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
// import {
//     IconButton,
//     Icon,
//     AppBar,
//     Toolbar,
// } from '@material-ui/core';

class Photos extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        // const { dict } = this.props;
        return (
            <div>Photos</div>
        );
    }
}

// Photos.propTypes = {
//     // dict: PropTypes.object.isRequired,
//     // opened: PropTypes.bool.isRequired,
//     // dispatch: PropTypes.func.isRequired,
//     // selectedModule: PropTypes.object.isRequired,
//     //
// };

function select(store) {
    return {
        opened: store.viewReducer.isMenuOpened,
        selectedModule: store.viewReducer.selectedModule,
        dict: store.viewReducer.dict,
        //
    };
}

export default connect(select)(Photos);
