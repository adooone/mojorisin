import React, { Component } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Icon,
} from '@material-ui/core';
// import Logo from '../Logo/Logo';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { CLOSE_MENU } from '../../redux/actions/actions';

class Menu extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     open: false,
        //     //
        // };
        // this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
    }
    handleCloseMenu() {
        this.props.dispatch(CLOSE_MENU());
    }
    render() {
        return (
            <Drawer
                variant='persistent'
                anchor='left'
                open={ this.props.opened }
            >
                <IconButton
                    onClick={ this.handleCloseMenu }
                >
                    <Icon>menu</Icon>
                </IconButton>
                {/* <Logo /> */}
                <List>
                    {['Prices', 'Portfolio', 'About', 'Contact us'].map((text) => (
                        <ListItem
                            button
                            key={ text }
                        >
                            <ListItemText primary={ text } />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        );
    }
}

Menu.propTypes = {
    opened: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

function select(store) {
    return {
        opened: store.viewReducer.isMenuOpened,
        //
    };
}

export default connect(select)(Menu);
