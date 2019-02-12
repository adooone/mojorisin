import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { MODULE_PHOTOS, MODULE_VIDEOS } from '../../consts/generalConsts';
import Photos from './Photos';
import Videos from './Videos/index';
// import Scroller from '../Scroller/index';

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
                    { this.getContent() }
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
