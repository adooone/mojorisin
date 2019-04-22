import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
    Button,
    // Icon,
} from '@material-ui/core';
import { CHANGE_LANG } from '../../redux/actions/actions';

const LangButton = ({ lang, userLang, dispatch }) => (
    <Button
        color={ userLang === lang ? 'secondary' : 'default' }
        className='langBtn'
        onClick={ () => dispatch(CHANGE_LANG(lang)) }
    >
        { lang }
    </Button>
);

function select(store) {
    return {
        userLang: store.viewReducer.userParams.lang,
        //
    };
}

LangButton.propTypes = {
    lang: PropTypes.string.isRequired,
    userLang: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect(select)(LangButton);
