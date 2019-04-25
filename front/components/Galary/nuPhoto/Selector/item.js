import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
    withRouter,
    // Route,
} from 'react-router-dom';
// import { Scrollbars } from 'react-custom-scrollbars';
import { Button } from '@material-ui/core';
// import Photo from '../../Photos/photo';
// import PhotosGrid from '../photosGrid';
// import anime from '../../../../lib/anime';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            //
        };
    }
    render() {
        const { index, active, scrolling, data, cover, onClick } = this.props;
        const { opened } = this.state;
        const coverId = `itemCover_${ data.name }`;
        return (
            <div
                className={ classnames(
                    'CorouselItem',
                    { 'scrollingItem': scrolling },
                    { 'activeItem': active },
                    { 'openedItem': opened }
                ) }
            >
                <div className='CorouselItemContent'>
                    <>
                        {/* <p>{ data.name }</p> */}
                        <Button
                            disableRipple
                            className='OpenButton'
                            onClick={ () => {
                                onClick(index);
                                this.setState({ opened: true });
                            } }
                        >
                            {''}
                        </Button>
                        {/* <div className='coverDarker' /> */}
                    </>
                    <img className='albumCover' id={ coverId } src={ cover || data.background } alt='cover' />
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    index: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    cover: PropTypes.any.isRequired,
    active: PropTypes.bool.isRequired,
    scrolling: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    //
};

//Item.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default withRouter(connect(select)(Item));
