import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Item extends Component {
    render() {
        const { active } = this.props;
        return (
            <div className={ classnames('CorouselItem', { 'activeItem': active }) }>Item</div>
        );
    }
}

Item.propTypes = {
    active: PropTypes.bool.isRequired,
    //
};

//Item.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Item);
