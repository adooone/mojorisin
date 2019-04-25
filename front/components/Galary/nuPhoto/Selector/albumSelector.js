import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    withRouter,
    // Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { Icon, IconButton, Grid } from '@material-ui/core';
import { SELECTOR_ITEM_PREVIEW } from '../../../../consts/generalConsts';
import Item from './item';
import anime from '../../../../lib/anime';
import { GET_PHOTOS } from '../../../../redux/actions/actions';
// import motion from '../../../../lib/motion';
// import { CHANGE_BACKGROUND } from '../../../../redux/actions/actions';

const SCROLL_MAX = 300;
class Switcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            opened: null,
            scrolling: false,
            scrollValue: 0,
            albumPreview: [],
            // images: [1, 2, 3, 4, 5, 6],
        };
        this.handleNav = this.handleNav.bind(this);
        this.onWheel = this.onWheel.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleItemClose = this.handleItemClose.bind(this);
        this.getItemsPreview = this.getItemsPreview.bind(this);
    }
    static getDerivedStateFromProps(nextProps/* , prevState */) {
        const images = nextProps.photoData;
        const albumPreview = _.take(images, 3);
        return { albumPreview };
    }
    componentDidMount() {
        this.props.dispatch(GET_PHOTOS(this.props.items[0].name));
    }
    render() {
        const { items } = this.props;
        const { active, scrolling, opened } = this.state;
        return (
            <div className='Corousel'>
                <div className={
                    classnames(
                        'CorouselLabel',
                        { 'CorouselLabelOpened': opened !== null }
                    ) }
                >
                    <h3>{ items[active].caption }</h3>
                    <p>We offer object and advertizing photo sessions and anything you want.</p>
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
                    className={
                        classnames(
                            'CorouselItems',
                            { 'CorouselItemsOpened': opened !== null }
                        ) }
                    onWheel={ opened === null ? this.onWheel : () => { } }
                >
                    {_.map(items, (item, i) => {
                        return (
                            // <Link key={ i } to={ `/${ item.routePath }` }>
                            <Item
                                key={ i }
                                index={ i }
                                scrolling={ scrolling }
                                active={ active === i }
                                data={ item }
                                cover={ false }
                                onClick={ this.handleItemClick }
                            />
                            // </Link>
                        );
                    })}
                </div>
                {/* { this.getItemsPreview()} */}
            </div>
        );
    }
    handleItemClick(index) {
        // motion.hide(SELECTOR_ITEM_PREVIEW);
        this.setState({ opened: index });
    }
    handleItemClose() {
        // motion.show(SELECTOR_ITEM_PREVIEW);
        this.setState({ opened: null });
    }
    handleNav(up) {
        // const up = direction === 'up';
        const { isMobile } = this.props;
        const element = document.getElementById('photo_items');
        const indicator = document.getElementById('indicator');
        const valueToScroll = isMobile ? 70 : 100;
        const { active } = this.state;
        const next = up ?
            (active !== 0 ? active - 1 : active) :
            (active !== 2 ? active + 1 : active);
        anime({
            targets: element,
            translateY: `-${ next * valueToScroll }vh`,
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
    getItemsPreview() {
        return (
            <Grid
                id='gridItemsPreview'
                className='CorouselItemsPreview'
                container
                spacing={ 0 }
            >
                {_.map(this.state.albumPreview, (obj, i) => {
                    return (
                        <Grid
                            className={ SELECTOR_ITEM_PREVIEW }
                            key={ i }
                            item
                            xs={ 6 }
                            sm={ 4 }
                        >
                            <div className='ItemPreview'>
                                <img src={ obj.src } alt={ obj.name } />
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

Switcher.propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    photoData: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    isMobile: PropTypes.bool.isRequired,
    //
};

Switcher.defaultProps = {
    onChange: () => {},
    //
};

function select(store) {
    return {
        photoData: store.viewReducer.photoData,
        //
    };
}

export default withRouter(connect(select)(Switcher));
