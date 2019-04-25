import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
                            <div
                                key={ i }
                                className='Album'
                                onClick={ () => this.handleClick(item.name) }
                                role='presentation'
                            >
                                <img src={ item.background } alt={ item.name } />
                            </div>
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

function select(/* store */) {
    return { };
}

export default connect(select)(Selector);
