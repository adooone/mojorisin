import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import anime from 'animejs';
// import LogoSVG from '../Logo/LogoSVG';

class Loader extends Component {
    componentDidMount() {
        // const loaderContainer = document.getElementById('loader_container');
        const loader = document.getElementById('loader');
        anime({
            targets: loader,
            // translateY: '-100px',
            opacity: '1',
            duration: 400,
            easing: 'easeInQuad',
            complete: () => {
                anime({
                    targets: loader,
                    scale: '0.9',
                    duration: 800,
                    direction: 'alternate',
                    loop: true,
                    easing: 'easeInQuad',
                });
            },
        });
    }
    render() {
        return (
            <div
                id='loader_container'
                className='loader'
                // className={ classnames('loader', { 'loader_start': this.props.loading }) }
            >
                <div className='loaderLogo' id='loader'>
                    <div className='loaderObj' />
                </div>
            </div>
        );
    }
}

// Loader.propTypes = {
//     loading: PropTypes.bool.isRequired,
//     //
// };

function select(store) {
    return {
        loading: store.viewReducer.loading,
        //
    };
}

export default connect(select)(Loader);
