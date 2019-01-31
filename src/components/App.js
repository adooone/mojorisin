import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Menu from './Menu/Menu';
import { OPEN } from '../redux/actions/actions';
import Galary from './Galary';

class App extends PureComponent {
    componentDidMount() {
        this.props.dispatch(OPEN());
    }
    render() {
        return (
            <div>
                <Menu />
                <Galary />
            </div>
        );
    }
}
App.propTypes = {
    //
    dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
