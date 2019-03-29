import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import { OPEN } from '../redux/actions/actions';
import AppToolbar from './AppToolbar/index';
import MobileMenu from './AppToolbar/MobileMenu/index';
// import { LANG_RU } from '../consts/generalConsts';
import Galary from './Galary/index';
import ComplexWall from './ComplexWall';
import Snackbar from './Snackbar/Snackbar';
import Loader from './Loader/Loader';
// import VersionContainer from './Helpers/Version';

class App extends Component {
    componentDidMount() {
        const isMobile = window.screen.width < 600;
        if (isMobile) console.log('using MOBILE version');
        else console.log('using DESKTOP version');
        window.onload = () => {
            _.delay(() => {
                this.props.dispatch(OPEN({ isMobile }));
            }, 1000);
        };
    }
    render() {
        return (
            <>
                <div className={ classnames('AppContainer', { 'app_blured': this.props.loading }) }>
                    <AppToolbar />
                    <MobileMenu />
                    <Galary />
                    <ComplexWall />
                    {this.props.SnackbarVisible && <Snackbar msg={ this.props.msg } /> }
                </div>
                {this.props.loading && <Loader /> }
            </>
        );
    }
}
App.propTypes = {
    //
    dispatch: PropTypes.func.isRequired,
    SnackbarVisible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    msg: PropTypes.any.isRequired,
};

function select(store) {
    return {
        msg: store.viewReducer.SnackbarMessage,
        SnackbarVisible: store.viewReducer.SnackbarVisible,
        lang: store.viewReducer.userParams.lang,
        loading: store.viewReducer.loading,
        //
    };
}

export default withRouter(connect(select)(App));
