import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import {
    Toolbar,
    // IconButton,
    // Icon,
} from '@material-ui/core';

class Videos extends Component {
    text() {
        const size = 1600;
        let index = 0;
        const words = ['mojorisin', 'video', 'gallary'];
        const res = [];
        while (index !== size) {
            res[index] = words[_.random(0, 3)];
            index++;
        }
        return res;
    }
    render() {
        return (
            <div className='videoGallary'>
                <Toolbar>
                    <p className='effect'>
                        {
                            _.map(this.text(), (item) => {
                                return `${ item } `;
                            })
                        }
                    </p>
                </Toolbar>
            </div>
        );
    }
}

//Videos.propTypes = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Videos);
