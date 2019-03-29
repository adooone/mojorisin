import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Icon, IconButton,
    // TextField,
    // IconButton,
    // Icon,
} from '@material-ui/core';
import anime from 'animejs';
import { CLOSE_SNACKBAR } from '../../redux/actions/actions';


class Snackbar extends Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }
    componentDidMount() {
        const { mobileVersion } = this.props;
        const snackbar = document.getElementById('Snackbar');
        anime({
            targets: snackbar,
            bottom: mobileVersion ? 0 : '50px',
            duration: 300,
            easing: 'easeInQuad',
        });
        setTimeout(() => {
            this.close();
        }, 4000);
    }
    close() {
        const snackbar = document.getElementById('Snackbar');
        anime({
            targets: snackbar,
            bottom: '-100px',
            duration: 300,
            easing: 'easeInQuad',
            complete: () => this.props.dispatch(CLOSE_SNACKBAR()),
        });
    }
    render() {
        const { msg } = this.props;
        let icon = 'report';
        const isMsgString = typeof msg === 'string';
        if (!isMsgString) {
            switch (msg.status) {
            case 200: { icon = 'done'; break; }
            default: icon = 'report';
            }
        }
        return (
            <div id='Snackbar' className='Snackbar'>
                <div>
                    <Icon className='resIcon'>{icon}</Icon>
                    <p>{isMsgString ? msg : msg.data.message || 'Done'}</p>
                </div>
                <IconButton className='closeBtn' onClick={ this.close }>
                    <Icon>close</Icon>
                </IconButton>
            </div>
        );
    }
}

Snackbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    mobileVersion: PropTypes.bool.isRequired,
    msg: PropTypes.any.isRequired,
    //
};

//Snackbar.defaultProps = {
//
//};

function select(store) {
    return {
        mobileVersion: store.viewReducer.mobileVersion,
        //
    };
}

export default connect(select)(Snackbar);
