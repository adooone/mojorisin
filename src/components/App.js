import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { withRouter } from 'react-router-dom';
import { OPEN } from '../redux/actions/actions';
import AppToolbar from './AppToolbar/index';
import MobileMenu from './AppToolbar/MobileMenu/index';
// import { LANG_RU } from '../consts/generalConsts';
import Galary from './Galary/index';
import ComplexWall from './ComplexWall';
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
                <ComplexWall />
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
