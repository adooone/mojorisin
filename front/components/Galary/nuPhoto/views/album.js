import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Link,
    //
} from 'react-router-dom';
// import classnames from 'classnames';
class AlbumView extends Component {
    render() {
        return (
            <div className='AlbumView'>
                {_.map(this.props.data, (item, i) => {
                    return (
                        <Link to={ `/${ i }` }>
                            <div key={ i }>{item.name}</div>
                        </Link>
                    );
                })}
            </div>
        );
    }
}

AlbumView.propTypes = {
    data: PropTypes.object.isRequired,
    //
};

//AlbumView.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(AlbumView);
