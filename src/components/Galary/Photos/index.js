import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';
import {
    Grid,
    // Paper,
    // Toolbar,
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
                {/* <Toolbar>
                    <p>Album 1</p>
                </Toolbar> */}
                <Grid
                    className='photosContainer'
                    container
                    spacing={ 0 }
                >
                    {_.map(photos.albums[0].images, (obj, i) => {
                        return (
                            <Grid
                                key={ i }
                                item
                                xs={ 12 }
                                sm={ obj.portrait ? 3 : 3 }
                            >
                                <div className='photo'>
                                    <div className='photoHoverEffect' />
                                    <img
                                        className='image'
                                        src={ obj.src }
                                        alt={ obj.name }
                                        // style={ { height: '100%' } }
                                    />
                                </div>
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

export default withRouter(connect(select)(Photos));
