import React, { Component } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Icon,
    AppBar,
    Toolbar,
} from '@material-ui/core';
// import Logo from '../Logo/Logo';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            //
        };
    }
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton>
                            <Icon>menu</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant='persistent'
                    anchor='left'
                    open={ this.state.open }
                >
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
            </div>
        );
    }
}

export default Menu;
