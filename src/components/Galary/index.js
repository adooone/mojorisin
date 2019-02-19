import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { MODULE_PHOTOS, MODULE_VIDEOS, MODULE_ABOUT, MODULE_CONTACTS } from '../../consts/generalConsts';
import Photos from './Photos';
import Videos from './Videos/index';
// import Scroller from '../Scroller/index';
import About from './About/index';
import Contacts from './Contacts';

class Galary extends Component {
    constructor(props) {
        super(props);

        this.getContent = this.getContent.bind(this);
    }
    getContent() {
        const { selectedModule: module } = this.props;
        switch (module.name) {
        case MODULE_PHOTOS: { return <Photos />; }
        case MODULE_VIDEOS: { return <Videos />; }
        case MODULE_CONTACTS: { return <Contacts />; }
        case MODULE_ABOUT: { return <About />; }
        default: {
            return null;
        }
        }
    }
    render() {
        return (
            // <Paper />
            <div className='galary'>
                {/* <Scroller vertical> */}
                <Scrollbars className='galaryScroller'>
                    {/* { this.getContent() } */}
                    <Route path='/photos' render={ () => <Photos /> } />
                    <Route path='/videos' render={ () => <Videos /> } />
                    <Route path='/contacts' render={ () => <Contacts /> } />
                    <Route path='/about' render={ () => <About /> } />
                </Scrollbars>
                {/* </Scroller> */}
            </div>
        );
    }
}

Galary.propTypes = {
    selectedModule: PropTypes.object.isRequired,
    // opened: PropTypes.bool.isRequired,
    // lang: PropTypes.string.isRequired,
    // dict: PropTypes.object.isRequired,
    // dispatch: PropTypes.func.isRequired,
    //
};

function select(store) {
    return {
        selectedModule: store.viewReducer.selectedModule,
        // opened: store.viewReducer.isMenuOpened,
        // dict: store.viewReducer.dict,
        // lang: store.viewReducer.userParams.lang,
    };
}

export default connect(select)(Galary);
