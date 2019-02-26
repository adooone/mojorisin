import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    FormGroup,
} from '@material-ui/core';
import neptune from '../../../neptune_api';
import { LOGIN_ADMIN } from '../../../redux/actions/actions';
// import classnames from 'classnames';
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
        };
        this.login = this.login.bind(this);
    }
    render() {
        return (
            <div className='LoginForm'>
                <Dialog open={ true }>
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <FormGroup>
                            <TextField
                                id='login'
                                label='Name'
                                onChange={ e => { this.setState({ name: e.target.value }); } }
                            />
                            <TextField
                                id='password'
                                label='Password'
                                type='password'
                                onChange={ e => { this.setState({ password: e.target.value }); } }
                            />
                        </FormGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' onClick={ this.login }>login</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
    login() {
        const { name, password } = this.state;
        neptune.login(name, password)
            .then(response => {
                if (response.data.admin) this.props.dispatch(LOGIN_ADMIN());
                else window.location = window.location.origin;
            });
    }
}

LoginForm.propTypes = {
    dispatch: PropTypes.func.isRequired,
    //
};

//LoginForm.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(LoginForm);
