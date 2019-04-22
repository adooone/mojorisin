import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';
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
    render() {
        // const { obj } = this.props;
        return this.state.opened ? this.renderOpened() : this.renderItem();
    }
    handleOpen = () => {
        this.setState({ opened: true });
    }
    renderItem = () => {
        const { obj } = this.props;
        return (
            <div className='photo'>
                <div className='photoHoverEffect' />
                <img
                    className='image'
                    src={ obj.src }
                    alt={ obj.name }
                />
                <Button
                    className='photoBtn'
                    onClick={ this.handleOpen }
                />
            </div>
        );
    }
    renderOpened = () => {
        const { obj } = this.props;
        return (
            <div className='photoOpened'>
                <img
                    className='image'
                    src={ obj.src }
                    alt={ obj.name }
                />
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

export default withRouter(connect(select)(Photo));
