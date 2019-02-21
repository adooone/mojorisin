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
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import { Scrollbars } from 'react-custom-scrollbars';
// import Logo from '../Logo/Logo';
import {
    CLOSE_MENU,
    OPEN_MODULE,
    CHANGE_LANG,
} from '../../redux/actions/actions';
import Modules from '../../description/modules';
import { LANG_RU, LANG_EN } from '../../consts/generalConsts';
import LogoSVG from '../Logo/LogoSVG';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        this.handleOpenModule = this.handleOpenModule.bind(this);
        this.renderMenuItems = this.renderMenuItems.bind(this);
        this.renderLangBtn = this.renderLangBtn.bind(this);
    }
    render() {
        return (
            <Drawer
                PaperProps={ { className: 'menu' } }
                variant='persistent'
                anchor='left'
                open={ this.props.opened }
            >
                <div className='logoContainer'><LogoSVG size={ 60 } /></div>
                { this.renderMenuItems() }
                <div className='langContainer'>
                    {this.renderLangBtn(LANG_RU)}
                    {this.renderLangBtn(LANG_EN)}
                </div>
            </Drawer>
        );
    }
    handleCloseMenu = () => {
        this.props.dispatch(CLOSE_MENU());
    }
    handleOpenModule = (module) => {
        this.props.dispatch(OPEN_MODULE(module));
        if (window.visualViewport.width < 600) this.props.dispatch(CLOSE_MENU());
    }
    renderMenuItems = () => {
        const { dict } = this.props;
        return (
            <List>
                {Modules.map((module) => (
                    <Link to={ module.path } key={ module.name }>
                        <ListItem
                            onClick={ () => this.handleOpenModule(module) }
                            button
                            key={ module.name }
                        >
                            <ListItemText primary={ dict.translate(module.caption) } />
                        </ListItem>
                    </Link>
                ))}
            </List>
        );
    }
    renderLangBtn = (lang) => (
        <Button
            color={ this.props.lang === lang ? 'secondary' : 'default' }
            className='langBtn'
            onClick={ () => this.props.dispatch(CHANGE_LANG(lang)) }
        >
            {lang}
        </Button>
    )
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
