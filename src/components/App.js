import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { withRouter } from 'react-router-dom';
import { OPEN } from '../redux/actions/actions';
import AppToolbar from './AppToolbar/index';
import Menu from './Menu/Menu';
// import { LANG_RU } from '../consts/generalConsts';
import Galary from './Galary/index';

class App extends Component {
    componentDidMount() {
        const isMobile = window.screen.width < 600;
        if (isMobile) console.log('using MOBILE version');
        else console.log('using DESKTOP version');
        window.onload = () => { console.log('loaded'); };
        this.props.dispatch(OPEN());
    }
    render() {
        return (
            <div className='AppContainer'>
                <AppToolbar />
                <Menu />
                <Galary />
            </div>
        );
    }
}
App.propTypes = {
    //
    dispatch: PropTypes.func.isRequired,
};

function select(store) {
    return {
        lang: store.viewReducer.userParams.lang,
        //
    };
}

export default withRouter(connect(select)(App));
