import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import anime from 'animejs';
// import classnames from 'classnames';

import { Icon, IconButton } from '@material-ui/core';
import Item from './item';

class Switcher extends Component {
    constructor(props) {
        super(props);
        this.state = { active: 0 };
        this.handleNavDown = this.handleNavDown.bind(this);
        this.handleNavUp = this.handleNavUp.bind(this);
        this.onWheel = this.onWheel.bind(this);
    }
    render() {
        const { items } = this.props;
        const { active } = this.state;
        return (
            <div className='Corousel'>
                <div className='CorouselLabel'>
                    <h3>ALBUM</h3>
                    <p>Some very important words</p>
                    <div className='CorouselNavigation'>
                        <IconButton
                            disabled={ active === 0 }
                            onClick={ this.handleNavUp }
                        >
                            <Icon>keyboard_arrow_up</Icon>
                        </IconButton>
                        <IconButton
                            disabled={ active === items.length - 1 }
                            onClick={ this.handleNavDown }
                        >
                            <Icon>keyboard_arrow_down</Icon>
                        </IconButton>
                    </div>
                </div>
                <div id='photo_items' className='CorouselItems' onWheel={ this.onWheel }>
                    {_.map(items, (item, i) => {
                        return <Item active={ active === i } key={ i } data={ item } />;
                    })}
                </div>
            </div>
        );
    }
    handleNavDown() {
        const element = document.getElementById('photo_items');
        const next = this.state.active + 1;
        anime({
            targets: element,
            translateY: `-${ next * 70 }vh`,
            duration: 300,
            easing: 'easeInQuad',
        });
        this.setState({ active: next });
    }
    handleNavUp() {
        const element = document.getElementById('photo_items');
        const next = this.state.active - 1;
        anime({
            targets: element,
            translateY: `-${ next * 70 }vh`,
            duration: 300,
            easing: 'easeInQuad',
        });
        this.setState({ active: next });
    }
    onWheel(e) {
        if (e.deltaY > 0) this.handleNavDown();
        else this.handleNavUp();
    }
}

Switcher.propTypes = {
    items: PropTypes.object.isRequired,
    //
};

//Switcher.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Switcher);
