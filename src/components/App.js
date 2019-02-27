import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { withRouter } from 'react-router-dom';
import { OPEN } from '../redux/actions/actions';
import AppToolbar from './AppToolbar/index';
import MobileMenu from './AppToolbar/MobileMenu/index';
// import { LANG_RU } from '../consts/generalConsts';
import Galary from './Galary/index';
// import Loader from './Loader/Loader';

class App extends Component {
    componentDidMount() {
        // const isMobile = window.screen.width < 600;
        // if (isMobile) console.log('using MOBILE version');
        // else console.log('using DESKTOP version');
        window.onload = () => {
            _.delay(() => {
                this.props.dispatch(OPEN());
            }, 1000);
        };
    }
    render() {
        return (
            <div className='AppContainer'>
                <AppToolbar />
                <MobileMenu />
                <Galary />
                <div className='backgroundDarken' />
                <div className='SwitcherBackground'>
                    <img width='100%' src='https://3.bp.blogspot.com/-lxEFfO5oTRE/W_dFbh7TlxI/AAAAAAAAAJo/bvaX0KLKoTcD3URP3a3qHMSrnf4YyU0ewCHMYCw/s1600/apple-mac-os-x-mavericks-%25E2%259D%25A4-4k-hd-desktop-wallpaper-for-4k-ultra.jpg' alt='back' />
                </div>
                {/* <Loader /> */}
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
        loading: store.viewReducer.loading,
        //
    };
}

export default withRouter(connect(select)(App));
