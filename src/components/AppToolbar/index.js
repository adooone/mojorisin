import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
    IconButton,
    Icon,
    // AppBar,
    // Toolbar,
    Button,
} from '@material-ui/core';
import {
    OPEN_MENU,
    OPEN_MODULE,
    CLOSE_MENU,
} from '../../redux/actions/actions';
import Modules from '../../description/modules';
// import Logo from '../Logo/Logo';
import LogoSVG from '../Logo/LogoSVG';

class AppToolbar extends Component {
    constructor(props) {
        super(props);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
    }
    handleOpenMenu() {
        this.props.dispatch(OPEN_MENU());
    }
    render() {
        const { dict } = this.props;
        // const caption = dict.translate(_.find(Modules, (obj) => {
        //     return obj.name === this.props.selectedModule;
        // }).caption);
        const ifMenuOpened = this.props.opened ? 'appBarMenuOpened' : '';
        return (
            <>
                <header>
                    <div className='toolbar'>
                        <div className='mobileVersionBlock'>
                            <div className='mobileAppBar'>
                                <IconButton
                                    onClick={ this.handleOpenMenu }
                                    color='primary'
                                >
                                    <Icon>menu</Icon>
                                </IconButton>
                                <div className={ classnames('appBarCaption', ifMenuOpened) }>
                                    {dict.translate(this.props.selectedModule.caption)}
                                </div>
                            </div>
                        </div>
                        <div className='desktopVersionBlock'>
                            <div className='desktopAppBar'>
                                <div className='desktopLogo'>
                                    <LogoSVG size={ 30 } />
                                    <p style={ { paddingLeft: 17, fontSize: 17 } }>
                                        { 'RISIN PRODUCTION' }
                                        {/* <span style={ { paddingLeft: 17, fontSize: 17 } }>PRODUCTION</span> */}
                                    </p>
                                </div>
                                <div className='desktopTopMenu'>
                                    {Modules.map((module) => (
                                        <Link to={ module.path } key={ module.name }>
                                            <Button
                                                onClick={ () => {
                                                    this.props.dispatch(OPEN_MODULE(module));
                                                    if (window.visualViewport.width < 600) this.props.dispatch(CLOSE_MENU());
                                                } }
                                            >
                                                {dict.translate(module.caption)}
                                            </Button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='headerWrap' />
            </>
        );
    }
}

AppToolbar.propTypes = {
    dict: PropTypes.object.isRequired,
    opened: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    selectedModule: PropTypes.object.isRequired,
    //
};

function select(store) {
    return {
        opened: store.viewReducer.isMenuOpened,
        selectedModule: store.viewReducer.selectedModule,
        dict: store.viewReducer.dict,
        //
    };
}

export default connect(select)(AppToolbar);
