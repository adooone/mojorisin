import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
    withRouter,
    // Route,
} from 'react-router-dom';
// import { Scrollbars } from 'react-custom-scrollbars';
import { Button, IconButton, Icon } from '@material-ui/core';
// import Photo from '../../Photos/photo';
// import PhotosGrid from '../photosGrid';
import anime from '../../../../lib/anime';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            //
        };
    }
    render() {
        const { index, active, scrolling, data, cover, onClick, onClose, ContentComponent } = this.props;
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
                    { opened && (
                        <>
                            <IconButton
                                className='CloseButton'
                                onClick={ () => {
                                    onClose(index);
                                    this.setState({ opened: false });
                                    setTimeout(() => {
                                        anime({
                                            targets: document.getElementById(coverId),
                                            opacity: '1',
                                            scale: 1,
                                            duration: 600,
                                            easing: 'easeOutQuad',
                                        });
                                    }, 100);
                                } }
                            >
                                <Icon>close</Icon>
                            </IconButton>
                            {ContentComponent(data)}
                        </>
                    ) }
                    { !opened && (
                    <>
                        <p>{ data.name }</p>
                        <Button
                            disableRipple
                            className='OpenButton'
                            onClick={ () => {
                                anime({
                                    targets: document.getElementById(coverId),
                                    opacity: '0',
                                    scale: 1.3,
                                    duration: 1200,
                                    easing: 'easeOutQuart',
                                });
                                setTimeout(() => {
                                    onClick(index);
                                    this.setState({ opened: true });
                                }, 100);
                            } }
                        >
                            {''}
                        </Button>
                        {/* <div className='coverDarker' /> */}
                    </>
                    )}
                    <img id={ coverId } src={ cover || data.background } alt='cover' />
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    index: PropTypes.number.isRequired,
    ContentComponent: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    cover: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    scrolling: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    //
};

//Item.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default withRouter(connect(select)(Item));
