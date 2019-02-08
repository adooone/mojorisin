import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// import { withStyles } from '@material-ui/core';

// import { stylesScroller } from '../../mainStyles';


class ScrollerBarY extends PureComponent {
    constructor(props) {
        super(props);
        this.top = 0;
    }
    onMouseDown = (event) => {
        event.preventDefault();
        const currentPos = this.top;
        const start = event.clientY;
        document.onmousemove = _.debounce((e) => {
            const prevPos = this.top;
            this.top = currentPos + e.clientY - start;
            this.props.onMove((this.top - prevPos) / this.props.ratio, 0);
        }, 5);
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
    render() {
        const { ratio, size } = this.props;
        const style = {
            height: size * ratio,
            marginTop: -this.props.pos * ratio,
        };
        return (
            <div
                className='barVerticalHolder'
                style={ this.props.style }
            >
                <div
                    role='presentation'
                    onMouseDown={ this.onMouseDown }
                    className='barVerticalStick'
                    style={ style }
                />
            </div>
        );
    }
}

ScrollerBarY.propTypes = {
    style: PropTypes.object,
    size: PropTypes.number,
    ratio: PropTypes.number,
    pos: PropTypes.number,
    onMove: PropTypes.func.isRequired,
};
ScrollerBarY.defaultProps = {
    style: null,
    size: 0,
    ratio: 1,
    pos: 0,
};

export default ScrollerBarY;
