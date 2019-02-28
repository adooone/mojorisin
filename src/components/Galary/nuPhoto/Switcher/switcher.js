import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import anime from 'animejs';
import classnames from 'classnames';

import { Icon, IconButton } from '@material-ui/core';
import Item from './item';

const SCROLL_MAX = 300;
class Switcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            opened: null,
            scrolling: false,
            scrollValue: 0,
        };
        // this.handleNavDown = this.handleNavDown.bind(this);
        // this.handleNavUp = this.handleNavUp.bind(this);
        this.handleNav = this.handleNav.bind(this);
        this.onWheel = this.onWheel.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleItemClose = this.handleItemClose.bind(this);
    }
    render() {
        const { items } = this.props;
        const { active, scrolling, opened } = this.state;
        return (
            <div className='Corousel'>
                <div className={ classnames('CorouselLabel', { 'CorouselLabelOpened': opened !== null }) }>
                    <h3>{ items[active].name }</h3>
                    <p>Some very important words</p>
                    <div className='CorouselNavigation'>
                        <IconButton
                            disabled={ active === 0 }
                            onClick={ () => this.handleNav(true) }
                        >
                            <Icon>keyboard_arrow_up</Icon>
                        </IconButton>
                        <IconButton
                            disabled={ active === items.length - 1 }
                            onClick={ () => this.handleNav(false) }
                        >
                            <Icon>keyboard_arrow_down</Icon>
                        </IconButton>
                    </div>
                    <div className='CorouselIndicator'>
                        <div id='indicator' className='Pointer' />
                    </div>
                </div>
                <div
                    id='photo_items'
                    // className={ classnames('CorouselItems', { 'CorouselScrolling': scrolling }) }
                    className={ classnames('CorouselItems', { 'CorouselItemsOpened': opened !== null }) }
                    onWheel={ opened === null ? this.onWheel : () => { } }
                >
                    {_.map(items, (item, i) => {
                        return (
                            <Item
                                index={ i }
                                scrolling={ scrolling }
                                active={ active === i }
                                key={ i }
                                data={ item }
                                onClick={ this.handleItemClick }
                                onClose={ this.handleItemClose }
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
    handleItemClick(index) {
        this.setState({ opened: index });
    }
    handleItemClose() {
        this.setState({ opened: null });
    }
    handleNav(up) {
        // const up = direction === 'up';
        const element = document.getElementById('photo_items');
        const indicator = document.getElementById('indicator');
        const next = up ? this.state.active - 1 : this.state.active + 1;
        anime({
            targets: element,
            translateY: `-${ next * 70 }vh`,
            duration: 300,
            easing: 'easeInQuad',
        });
        anime({
            targets: indicator,
            translateY: `${ next * 40 }px`,
            duration: 300,
            easing: 'easeInQuad',
        });
        this.props.onChange(next);
        this.setState({ active: next });
    }
    onWheel(e) {
        const { scrollValue } = this.state;
        console.log(scrollValue);

        const newValue = scrollValue + e.deltaY;
        clearTimeout(this.clear);
        this.clear = setTimeout(() => {
            this.setState({ scrollValue: 0, scrolling: false });
        }, 1000);

        if (newValue > SCROLL_MAX) {
            this.handleNav(false);
            this.setState({ scrollValue: 0 });
        } else if (newValue < -SCROLL_MAX) {
            this.handleNav(true);
            this.setState({ scrollValue: 0 });
        } else this.setState({ scrollValue: newValue, scrolling: true });
    }
}

Switcher.propTypes = {
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    //
};

//Switcher.defaultProps = {
//
//};

function select(/* store */) {
    return { };
}

export default connect(select)(Switcher);
