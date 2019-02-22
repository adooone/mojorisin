import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';
// import {
//     Toolbar,
//     // IconButton,
//     // Icon,
// } from '@material-ui/core';
// import ModuleWrapper from '../wrapper';
import Carousel from './Corousel/index';
import videos from '../../../description/videos';

class Videos extends Component {
    text(words) {
        const size = 1600;
        let index = 0;
        // const words = ['mojo', 'risin', 'photos', 'videos', 'production'];
        const res = [];
        while (index !== size) {
            res[index] = words[_.random(0, words.length - 1)];
            index++;
        }
        return res;
    }
    render() {
        return (
            <div className='CarouselHolder'>
                <Carousel slides={ videos } />
            </div>
        );
    }
    // render() {
    //     return (
    //         <ModuleWrapper className='videoGallary'>
    //             {/* <Toolbar> */}
    //             <p className='effect'>
    //                 {
    //                     _.map(this.text(['mojo', 'risin', 'photos', 'videos', 'production']), (item) => {
    //                         return `${ item } `;
    //                     })
    //                 }
    //             </p>
    //             {/* </Toolbar> */}
    //         </ModuleWrapper>
    //     );
    // }
}

//Videos.propTypes = {
//
//};

function select(/* store */) {
    return { };
}

export default withRouter(connect(select)(Videos));
