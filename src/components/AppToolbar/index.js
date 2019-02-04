import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    IconButton,
    Icon,
    AppBar,
    Toolbar,
} from '@material-ui/core';
import { OPEN_MENU } from '../../redux/actions/actions';

class AppToolbar extends Component {
    constructor(props) {
        super(props);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
    }
    handleOpenMenu() {
        this.props.dispatch(OPEN_MENU());
    }
    render() {
        return (
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton
                        onClick={ this.handleOpenMenu }
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

AppToolbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    //
};

function select(store) {
    return {
        opened: store.viewReducer.isMenuOpened,
        //
    };
}

export default connect(select)(AppToolbar);
