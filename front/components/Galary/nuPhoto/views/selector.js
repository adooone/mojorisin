import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Link,
    //
} from 'react-router-dom';
// import { OPEN_ALBUM } from '../../../../redux/actions/actions';
// import classnames from 'classnames';
class Selector extends Component {
    render() {
        const { items, match } = this.props;
        return (
            <div className='selector'>
                <div>
                    {_.map(items, (item, i) => {
                        return (
                            <Link key={ i } to={ `${ match.path }/${ item.path }` }>
                                <div className='album'>
                                    <img src={ item.background } alt={ item.name } />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}

Selector.propTypes = {
    items: PropTypes.array.isRequired,
    // dispatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    //
};

//Selector.defaultProps = {
//
//};

function select(store) {
    return {
        selectedAlbum: store.viewReducer.selectedAlbum,
        //
    };
}

export default connect(select)(Selector);
