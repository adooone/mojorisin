import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Link,
    //
} from 'react-router-dom';
import { OPEN_ALBUM } from '../../../../redux/actions/actions';
// import classnames from 'classnames';
class Selector extends Component {
    render() {
        const { items } = this.props;
        return (
            <div className='Selector'>
                <div>
                    {_.map(items, (item, i) => {
                        return (
                            <Link key={ i } to={ item.path }>
                                <div
                                    className='Album'
                                    onClick={ () => this.handleClick(item.name) }
                                    role='presentation'
                                >
                                    <img src={ item.background } alt={ item.name } />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
    handleClick(name) {
        this.props.dispatch(OPEN_ALBUM(name));
    }
}

Selector.propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
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
