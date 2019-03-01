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

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            //
        };
    }
    render() {
        const { index, active, scrolling, data, onClick, onClose, ContentComponent } = this.props;
        const { opened } = this.state;
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
                                onClick(index);
                                this.setState({ opened: true });
                            } }
                        >
                            {''}
                        </Button>
                        {/* <img src={ data.background } alt='cover' /> */}
                        {/* <div className='coverDarker' /> */}
                    </>
                    )}
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    index: PropTypes.number.isRequired,
    ContentComponent: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
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
