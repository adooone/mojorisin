import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Button,
    Icon,
    IconButton,
    // TextField,
    // IconButton,
    // Icon,
} from '@material-ui/core';
import {
    // OPEN_MENU,
    OPEN_MODULE,
    CLOSE_MENU,
} from '../../redux/actions/actions';
// import classnames from 'classnames';
import Modules from '../../description/modules';
import LogoSVG from '../Logo/LogoSVG';
import LangButton from '../Helpers/LangButton';
import { LANG_RU, LANG_EN } from '../../consts/generalConsts';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.openModule = this.openModule.bind(this);
    }
    openModule = () => {
        this.props.dispatch(OPEN_MODULE(module));
        if (window.visualViewport.width < 600) this.props.dispatch(CLOSE_MENU());
    }
    ModuleBtn = (module, caption) => {
        if (module.name === 'Home') {
            return (
                // <div style={ { marginRight: 10, paddingRight: 10, borderRight: '1px solid white' } }>
                <IconButton>
                    <Icon>home</Icon>
                </IconButton>
                // </div>
            );
        }
        return (
            <Button onClick={ () => this.openModule(module) }>
                {caption}
            </Button>
        );
    }
    render() {
        const { dict/* , selectedModule, opened */ } = this.props;
        return (
            <div className='desktopVersionBlock'>
                <div className='desktopAppBar'>
                    <Link to='/'>
                        <div className='desktopLogo'>
                            <LogoSVG size={ 30 } />
                            <p className='companyName'>RISIN PRODUCTION</p>
                        </div>
                    </Link>
                    <div className='desktopTopMenu'>
                        {/* <TextField label='Search' /> */}
                        {Modules.map((module) => (
                            <Link to={ `/${ module.path }` } key={ module.name }>
                                {this.ModuleBtn(module, dict.translate(module.caption)) }
                            </Link>
                        ))}
                        <div className='langContainerDesktop'>
                            <LangButton lang={ LANG_RU } />
                            <LangButton lang={ LANG_EN } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Toolbar.propTypes = {
    dict: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    // selectedModule: PropTypes.object.isRequired,
    // opened: PropTypes.bool.isRequired,
    //
};

function select(store) {
    return {
        dict: store.viewReducer.dict,
        selectedModule: store.viewReducer.selectedModule,
        opened: store.viewReducer.selectedModule,
    };
}

export default connect(select)(Toolbar);
