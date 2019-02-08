import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Portal from './portal';
import ScrollerBarX from './ScrollerBarX';
import ScrollerBarY from './ScrollerBarY';

class Scroller extends PureComponent {
    constructor(props) {
        super(props);
        const { vertical, horizontal } = this.props;
        this.styles = {
            containerStyle: {
                overflow: 'hidden',
                position: 'relative',
                height: '100%',
                width: '100%',
            },
            containedStyle: {
                marginTop: 0,
                marginLeft: 0,
                //transition: 'all .9s ease',
                position: 'absolute',
                height: !vertical ? '100%' : 'auto',
                width: !horizontal ? '100%' : 'auto',
            },
            verticalStyle: {
                paddingTop: 0,
                height: 0,
                position: 'absolute',
            },
            horizontalStyle: {
                paddingLeft: 0,
                width: 0,
                position: 'absolute',
            },
        };
        this.initState = {
            passedChildren: null,
            children: null,
            portalToNode: undefined,
            ratioY: 1,
            ratioX: 1,
            posY: 0,
            posX: 0,
            offsetWidth: 0,
            offsetHeight: 0,
            scrollWidth: 0,
            scrollHeight: 0,
            offsetLeft: 0,
            offsetTop: 0,
            styles: {
                containedStyle: { ...this.styles.containedStyle, marginTop: 0, marginLeft: 0 },
                verticalStyle: { ...this.styles.verticalStyle, paddingTop: 0, height: 0 },
                horizontalStyle: { ...this.styles.horizontalStyle, paddingLeft: 0, width: 0 },
            },
        };
        this.state = _.cloneDeep(this.initState);
        this.holder = null;
        this.content = null;
        this.dSetRatio = _.debounce(this.setRatio, 30);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const newState = {};
        const newPortalToNode = nextProps.portalToNode;
        const newChildren = nextProps.children;
        if (newPortalToNode !== prevState.portalToNode) {
            newState.portalToNode = newPortalToNode;
        }
        if (newChildren !== prevState.passedChildren || newPortalToNode !== prevState.portalToNode) {
            newState.children = React.Children.map(nextProps.children, (child, index) => {
                return (
                    child &&
                    (nextProps.containerRef && nextProps.childIndex === index) ? React.cloneElement(child, { portalToNode: newPortalToNode }) : child);
            });
            newState.passedChildren = newChildren;
        }
        if (!_.isEmpty(newState)) { return newState; }
        return null;
    }
    setRatio = () => {
        if (this.content && this.holder) {
            const { offsetHeight, offsetWidth, offsetLeft, offsetTop } = this.holder;
            const { scrollHeight, scrollWidth } = this.content;
            this.setState(
                prevState => ({
                    ratioY: Math.round(offsetHeight / (scrollHeight === 0 ? offsetHeight : scrollHeight) * 100) / 100 || 1,
                    ratioX: Math.round(offsetWidth / (scrollWidth === 0 ? offsetWidth : scrollWidth) * 100) / 100 || 1,
                    offsetWidth,
                    scrollWidth,
                    offsetHeight,
                    scrollHeight,
                    // eslint-disable-next-line react/no-unused-state
                    offsetLeft,
                    // eslint-disable-next-line react/no-unused-state
                    offsetTop,
                    styles: {
                        ...prevState.styles,
                        verticalStyle: { ...prevState.styles.verticalStyle, paddingTop: offsetTop, height: offsetHeight },
                        horizontalStyle: { ...prevState.styles.horizontalStyle, paddingLeft: offsetLeft, width: offsetWidth },
                    },
                })
            );
        } else {
            this.setState(_.cloneDeep(this.initState));
        }
    };
    onWheel = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.vertical) {
            this.scroll(e.deltaY, e.deltaX);
            return false;
        }
        return false;
    };
    scroll = (deltaY, deltaX) => {
        if (deltaY !== 0) {
            const toScrollY = this.state.posY - deltaY;
            const maxScrollY = -this.state.scrollHeight + this.state.offsetHeight;
            const newPosY = toScrollY > 0 ? 0 :
                toScrollY < maxScrollY ?
                    maxScrollY :
                    toScrollY;
            this.setState(prevState => ({ posY: newPosY, styles: { ...prevState.styles, containedStyle: { ...prevState.styles.containedStyle, marginTop: newPosY } } }));
        }
        if (deltaX !== 0) {
            const toScrollX = this.state.posX - deltaX;
            const maxScrollX = -this.state.scrollWidth + this.state.offsetWidth;
            const newPosX = toScrollX > 0 ? 0 :
                toScrollX < maxScrollX ?
                    maxScrollX :
                    toScrollX;
            this.setState(prevState => ({ posX: newPosX, styles: { ...prevState.styles, containedStyle: { ...prevState.styles.containedStyle, marginLeft: newPosX } } }));
        }
    };
    containerRefCallBack = node => {
        if (node !== this.holder) {
            if (node) {
                //!!For now works in chromium-based browsers only!!
                //https://wicg.github.io/ResizeObserver/
                //https://caniuse.com/#feat=resizeobserver
                // eslint-disable-next-line no-unused-expressions
                ResizeObserver && new ResizeObserver(this.dSetRatio).observe(node);
            }
            this.holder = node;
            if (this.props.containerRef) { this.props.containerRef(node); }
        }
    };
    containedRefCallBack = node => {
        if (node !== this.content) {
            if (node) {
                //!!For now works in chromium-based browsers only!!
                //https://wicg.github.io/ResizeObserver/
                //https://caniuse.com/#feat=resizeobserver
                // eslint-disable-next-line no-unused-expressions
                ResizeObserver && new ResizeObserver(this.dSetRatio).observe(node);
            }
            this.content = node;
        }
    };
    render() {
        const { classes, vertical, horizontal } = this.props;
        return (
            <div
                ref={ this.containerRefCallBack }
                className={ classes.container }
                style={ this.styles.containerStyle }
            >
                <div
                    ref={ this.containedRefCallBack }
                    onWheel={ this.onWheel }
                    className={ classes.contained }
                    style={ this.state.styles.containedStyle }
                >
                    { this.state.children }
                </div>
                {vertical && (
                    <Portal
                        domNode={ this.state.portalToNode }
                    >
                        <ScrollerBarY
                            style={ this.state.portalToNode ? this.state.styles.verticalStyle : null }
                            ratio={ this.state.ratioY }
                            pos={ this.state.posY }
                            size={ this.state.offsetHeight }
                            onMove={ this.scroll }
                        />
                    </Portal>
                )}
                {horizontal && (
                    <Portal
                        domNode={ this.state.portalToNode }
                    >
                        <ScrollerBarX
                            style={ this.state.portalToNode ? this.state.styles.horizontalStyle : null }
                            ratio={ this.state.ratioX }
                            pos={ this.state.posX }
                            size={ this.state.offsetWidth }
                            onMove={ this.scroll }
                        />
                    </Portal>
                )}
            </div>
        );
    }
}

Scroller.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.node,
    containerRef: PropTypes.func,
    portalToNode: PropTypes.instanceOf(Element),
    childIndex: PropTypes.number,
    vertical: PropTypes.bool,
    horizontal: PropTypes.bool,
};
Scroller.defaultProps = {
    classes: {},
    children: null,
    containerRef: undefined,
    portalToNode: undefined,
    childIndex: undefined,
    vertical: false,
    horizontal: false,
};

export default Scroller;
