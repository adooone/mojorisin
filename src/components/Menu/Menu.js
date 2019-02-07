import React, { Component } from 'react';
import {
    Drawer,
    // SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    Button,
    // Icon,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import { Scrollbars } from 'react-custom-scrollbars';
import Logo from '../Logo/Logo';
import {
    CLOSE_MENU,
    OPEN_MODULE,
    CHANGE_LANG,
} from '../../redux/actions/actions';
import Modules from '../../description/modules';
import { LANG_RU, LANG_EN } from '../../consts/generalConsts';

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
        const { dict } = this.props;
        console.log(this.props);
        return (
            <Drawer
                PaperProps={ { className: 'menu' } }
                variant='persistent'
                anchor='left'
                open={ this.props.opened }
            >
                {/* <Scrollbars style={ { height: 500, width: 400 } }> */}
                <Logo />
                <List>
                    {Modules.map((module) => (
                        <ListItem
                            onClick={ () => {
                                this.props.dispatch(OPEN_MODULE(module));
                                if (window.visualViewport.width < 600) this.props.dispatch(CLOSE_MENU());
                            } }
                            button
                            key={ module.name }
                        >
                            <ListItemText primary={ dict.translate(module.caption) } />
                        </ListItem>
                    ))}
                </List>
                <div className='langContainer'>
                    <Button
                        // variant={ this.props.lang === LANG_RU ? 'outlined' : '' }
                        color={ this.props.lang === LANG_RU ? 'secondary' : 'default' }
                        className='langBtn'
                        onClick={ () => { this.props.dispatch(CHANGE_LANG(LANG_RU)); } }
                    >
                        {LANG_RU}
                    </Button>
                    <Button
                        // variant={ this.props.lang === LANG_EN ? 'outlined' : '' }
                        color={ this.props.lang === LANG_EN ? 'secondary' : 'default' }
                        className='langBtn'
                        onClick={ () => { this.props.dispatch(CHANGE_LANG(LANG_EN)); } }
                    >
                        {LANG_EN}
                    </Button>
                </div>
                {/* </Scrollbars> */}
            </Drawer>
        );
    }
}

Menu.propTypes = {
    opened: PropTypes.bool.isRequired,
    lang: PropTypes.string.isRequired,
    dict: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

function select(store) {
    return {
        opened: store.viewReducer.isMenuOpened,
        dict: store.viewReducer.dict,
        lang: store.viewReducer.userParams.lang,
    };
}

export default connect(select)(Menu);
