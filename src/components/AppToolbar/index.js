import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
    IconButton,
    Icon,
    AppBar,
    Toolbar,
} from '@material-ui/core';
import { OPEN_MENU } from '../../redux/actions/actions';
// import Modules from '../../description/modules';

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
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton
                        onClick={ this.handleOpenMenu }
                        color='secondary'
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                    <div className={ classnames('appBarCaption', ifMenuOpened) }>
                        { dict.translate(this.props.selectedModule.caption) }
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

AppToolbar.propTypes = {
    dict: PropTypes.object.isRequired,
    opened: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    selectedModule: PropTypes.string.isRequired,
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
