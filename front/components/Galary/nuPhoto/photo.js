import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import classnames from 'classnames';
import {
    Button,
    IconButton,
    Icon,
} from '@material-ui/core';
// import neptune from '../../../neptune_api';
import { DELETE_FILE, OPEN_PHOTO } from '../../../redux/actions/actions';

class Photo extends Component {
    constructor(props) {
        super(props);
        // this.state = { opened: false };
        this.handleOpen = this.handleOpen.bind(this);
    }
    render() {
        // const { obj } = this.props;
        return this.renderItem();
        // return this.state.opened ? this.renderOpened() : this.renderItem();
    }
    handleOpen = () => {
        // this.setState({ opened: true })
        this.props.dispatch(OPEN_PHOTO(this.props.obj));
    }
    renderItem = () => {
        const { obj } = this.props;
        console.log(obj);
        return (
            <div className='photo'>
                <div className='deleteBtn'>
                    <IconButton onClick={ this.deletePhoto }><Icon>delete</Icon></IconButton>
                </div>
                <img className='image' src={ obj.src } alt={ obj.name } />
                <Link to={ `photos/${ obj.name }` }>
                    <Button className='photoBtn' onClick={ this.handleOpen }>{ ' ' }</Button>
                </Link>
            </div>
        );
    }
    deletePhoto = () => {
        this.props.dispatch(DELETE_FILE(this.props.obj));
    }
    setCover = () => {}
}

Photo.propTypes = {
    obj: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    //
};

function select(/* store */) {
    return { };
}

export default withRouter(connect(select)(Photo));
