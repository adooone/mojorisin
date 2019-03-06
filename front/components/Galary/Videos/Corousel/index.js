/* eslint-disable indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
// import {
// IconButton,
//     Icon,
// } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Slide from './Slide';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.renderNavigation = this.renderNavigation.bind(this);
    }
    render() {
        const { slides } = this.props;
        return (
            <div className='Carousel'>
                { _.map(slides, (slide, i) => {
                    let position = 'hidden';
                    switch (i) {
                        case 0: { position = 'first'; break; }
                        case 1: { position = 'second'; break; }
                        case slides.length - 1: { position = 'last'; break; }
                        default: { position = 'hidden'; }
                    }
                    return (
                        <Slide
                            key={ i }
                            name={ slide.name }
                            wall={ slide.wall }
                            position={ position }
                        />
                    );
                }) }
                { this.renderNavigation() }
            </div>
        );
    }
    renderNavigation() {
        return (
            <div>
                <Button>prev</Button>
                <Button>next</Button>
            </div>
        );
    }
}

Carousel.propTypes = {
    slides: PropTypes.array.isRequired,
    //
};

function select(/* store */) {
    return { };
}

export default connect(select)(Carousel);
