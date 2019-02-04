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
import {
    CLOSE_MENU,
    OPEN_MODULE,
} from '../../redux/actions/actions';

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
                    <Icon>arrow_left</Icon>
                </IconButton>
                {/* <Logo /> */}
                <List>
                    {['Фотоуслуги', 'Видеоуслуги', 'Контакты', 'Обо мне'].map((module) => (
                        <ListItem
                            onClick={ () => { this.props.dispatch(OPEN_MODULE(module)); } }
                            button
                            key={ module }
                        >
                            <ListItemText primary={ module } />
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
