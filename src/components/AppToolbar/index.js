import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    // IconButton,
    // Icon,
    AppBar,
    // Toolbar,
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
        // const { dict } = this.props;
        // const caption = dict.translate(_.find(Modules, (obj) => {
        //     return obj.name === this.props.selectedModule;
        // }).caption);
        return (
            <AppBar position='fixed'>
                {/* <IconButton
                    onClick={ this.handleOpenMenu }
                    color='default'
                >
                    <Icon>menu</Icon>
                </IconButton> */}
                <div className='appBarCaption'>
                    { this.props.selectedModule }
                </div>
            </AppBar>
        );
    }
}

AppToolbar.propTypes = {
    // dict: PropTypes.object.isRequired,
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
