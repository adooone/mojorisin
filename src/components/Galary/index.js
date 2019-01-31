import React, { Component } from 'react';
import {
    IconButton,
    Icon,
    //
} from '@material-ui/core';
// import PropTypes from 'prop-types';

class Galary extends Component {
    render() {
        return (
            // <Paper />
            <div className='galary'>
                <IconButton
                    color='inherit'
                    aria-label='Open drawer'
                    onClick={ () => { } }
                >
                    <Icon>menu_icon</Icon>
                </IconButton>
            </div>
        );
    }
}

// Galary.propTypes = {
// };

export default Galary;
