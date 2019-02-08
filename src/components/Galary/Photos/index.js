import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import {
    Grid,
    Paper,
    Toolbar,
    //
} from '@material-ui/core';
import photos from '../../../description/photos';

class Photos extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        // const { dict } = this.props;
        return (
            <div className='galaryContainer'>
                <Toolbar>
                    <p>Album 1</p>
                </Toolbar>
                <Grid
                    className='photosContainer'
                    container
                    spacing={ 16 }
                >
                    {_.map(photos.albums[0].images, (obj) => {
                        return (
                            <Grid
                                item
                                xs={ 12 }
                                sm={ obj.portrait ? 2 : 4 }
                            >
                                <Paper className='photo'>
                                    <div style={ { background: `url(${ obj.src })` } } />
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

// Photos.propTypes = {
//     // dict: PropTypes.object.isRequired,
//     // opened: PropTypes.bool.isRequired,
//     // dispatch: PropTypes.func.isRequired,
//     // selectedModule: PropTypes.object.isRequired,
//     //
// };

function select(store) {
    return {
        opened: store.viewReducer.isMenuOpened,
        selectedModule: store.viewReducer.selectedModule,
        dict: store.viewReducer.dict,
        //
    };
}

export default connect(select)(Photos);
