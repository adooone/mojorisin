import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
    IconButton,
    Icon,
} from '@material-ui/core';
import {
    OPEN_MENU,
    // OPEN_MODULE,
    // CLOSE_MENU,
} from '../../redux/actions/actions';

class MobileToolbar extends Component {
    constructor(props) {
        super(props);
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
    }
    handleOpenMenu = () => {
        this.props.dispatch(OPEN_MENU());
    }
    render() {
        const { dict, selectedModule, opened } = this.props;
        return (
            <div className='mobileVersionBlock'>
                <div className='mobileAppBar'>
                    <IconButton
                        onClick={ this.handleOpenMenu }
                        color='primary'
                    >
                        <Icon>menu</Icon>
                    </IconButton>
                    <div className={ classnames('appBarCaption', opened) }>
                        { dict.translate(selectedModule.caption)}
                    </div>
                </div>
            </div>
        );
    }
}

MobileToolbar.propTypes = {
    dict: PropTypes.object.isRequired,
    selectedModule: PropTypes.object.isRequired,
    opened: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

function select(store) {
    return {
        dict: store.viewReducer.dict,
        selectedModule: store.viewReducer.selectedModule,
        opened: store.viewReducer.isMenuOpened,
    };
}

export default connect(select)(MobileToolbar);
