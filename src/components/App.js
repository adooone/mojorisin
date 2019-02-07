import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { OPEN } from '../redux/actions/actions';
// import Galary from './Galary';
import AppToolbar from './AppToolbar/index';
import Menu from './Menu/Menu';
// import { LANG_RU } from '../consts/generalConsts';
// import Context from './Context/index';
import Galary from './Galary/index';

class App extends Component {
    componentDidMount() {
        const isMobile = window.screen.width < 600;
        if (isMobile) console.log('using MOBILE version');
        else console.log('using DESKTOP version');
        this.props.dispatch(OPEN());
    }
    render() {
        return (
            <div>
                {/* <Context.Provider value={ { lang: LANG_RU } }> */}
                <AppToolbar />
                <Menu />
                <Galary />
                {/* </Context.Provider> */}
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

export default connect(select)(App);
