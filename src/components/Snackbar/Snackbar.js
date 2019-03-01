import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Icon,
    // TextField,
    // IconButton,
    // Icon,
} from '@material-ui/core';
import anime from 'animejs';
import { CLOSE_SNACKBAR } from '../../redux/actions/actions';


class Snackbar extends Component {
    componentDidMount() {
        const snackbar = document.getElementById('Snackbar');
        anime({
            targets: snackbar,
            bottom: '50px',
            duration: 300,
            easing: 'easeInQuad',
        });
        setTimeout(() => {
            anime({
                targets: snackbar,
                bottom: '-100px',
                duration: 300,
                easing: 'easeInQuad',
                complete: () => this.props.dispatch(CLOSE_SNACKBAR()),
            });
        }, 4000);
    }
    render() {
        const { msg } = this.props;
        let icon = 'report';
        switch (msg.status) {
        case 200: { icon = 'done'; break; }
        default: icon = 'report';
        }
        return (
            <div id='Snackbar' className='Snackbar'>
                <div>
                    <Icon>{icon}</Icon>
                </div>
                <p>
                    {msg.data.message}
                </p>
            </div>
        );
    }
}

Snackbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    msg: PropTypes.object.isRequired,
    //
};

//Snackbar.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Snackbar);
