import React, { Component } from 'react';
import LogoPNG from '../../img/logo.png';
// import ReactSVG from 'react-svg';

class Logo extends Component {
    render() {
        return (
            <div className='Logo'>
                <img src={ LogoPNG } alt='logoPNG' />
            </div>
        );
    }
}

export default Logo;
