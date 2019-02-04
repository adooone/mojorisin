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
                        color='default'
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                    <div className='appBarCaption'>
                        { this.props.selectedModule }
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

AppToolbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    selectedModule: PropTypes.string.isRequired,
    //
};

function select(store) {
    return {
        opened: store.viewReducer.isMenuOpened,
        selectedModule: store.viewReducer.selectedModule,
        //
    };
}

export default connect(select)(AppToolbar);
