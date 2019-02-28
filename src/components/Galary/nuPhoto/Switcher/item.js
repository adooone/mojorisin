import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Button } from '@material-ui/core';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            //
        };
    }
    render() {
        const { index, active, scrolling, data, onClick, onClose } = this.props;
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
                <Button
                    onClick={ () => {
                        onClick(index);
                        this.setState({ opened: true });
                    } }
                >
                    {'open'}
                </Button>
                <Button
                    onClick={ () => {
                        onClose(index);
                        this.setState({ opened: false });
                    } }
                >
                    {'close'}
                </Button>
                { data.name }
            </div>
        );
    }
}

Item.propTypes = {
    index: PropTypes.number.isRequired,
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

export default connect(select)(Item);
