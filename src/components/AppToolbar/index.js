import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import MobileTolbar from './MobileTolbar';
import Toolbar from './Toolbar';

class AppToolbar extends Component {
    render() {
        return (
            <>
                <header>
                    <div className='toolbar'>
                        <MobileTolbar />
                        <Toolbar />
                    </div>
                </header>
                <div className='headerWrap' />
            </>
        );
    }
}

function select(store) {
    return {
        opened: store.viewReducer.isMenuOpened,
        selectedModule: store.viewReducer.selectedModule,
        dict: store.viewReducer.dict,
        //
    };
}

export default connect(select)(AppToolbar);
