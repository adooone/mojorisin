import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import LogoSVG from '../Logo/LogoSVG';

class Loader extends Component {
    componentWillUnmount() {
        console.log('end loading...');
    }
    render() {
        return (
            <div className={ classnames('loader', { 'loaded': !this.props.loading }) }>
                <div className='loaderLogo'>
                    <LogoSVG width={ 400 } />
                    {/* <div className='figure m' />
                    <div className='figure o' /> */}
                </div>
            </div>
        );
    }
}

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
    //
};

function select(store) {
    return {
        loading: store.viewReducer.loading,
        //
    };
}

export default connect(select)(Loader);
