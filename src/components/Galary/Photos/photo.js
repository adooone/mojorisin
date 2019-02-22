import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import {
    Button,
    // IconButton,
    // Icon,
} from '@material-ui/core';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = { opened: false };
        this.handleOpen = this.handleOpen.bind(this);
    }
    handleOpen() {
        this.setState({ opened: true });
    }
    render() {
        const { obj } = this.props;
        const { opened } = this.state;
        return (
            <div className={ classnames('photo', { 'photoOpened': opened }) }>
                <div className='photoHoverEffect' />
                <img
                    className='image'
                    src={ obj.src }
                    alt={ obj.name }
                />
                <Button
                    className='photoBtn'
                    onClick={ this.handleOpen }
                >
                    <p>{obj.name}</p>
                </Button>
            </div>
        );
    }
}

Photo.propTypes = {
    obj: PropTypes.object.isRequired,
    //
};

function select(/* store */) {
    return { };
}

export default connect(select)(Photo);
