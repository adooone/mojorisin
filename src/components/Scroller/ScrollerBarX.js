import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// import { withStyles } from '@material-ui/core';

// import { stylesScroller } from '../../mainStyles';


class ScrollerBarX extends PureComponent {
    constructor(props) {
        super(props);
        this.left = 0;
    }
    onMouseDown = (event) => {
        event.preventDefault();
        const currentPos = this.left;
        const start = event.clientX;
        document.onmousemove = _.debounce((e) => {
            const prevPos = this.left;
            this.left = currentPos + e.clientX - start;
            this.props.onMove(0, (this.left - prevPos) / this.props.ratio);
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
            width: size * ratio,
            marginLeft: -this.props.pos * ratio,
        };
        return (
            <div
                className='barHorizontalHolder'
                style={ this.props.style }
            >
                <div
                    role='presentation'
                    onMouseDown={ this.onMouseDown }
                    className='barHorizontalStick'
                    style={ style }
                />
            </div>
        );
    }
}

ScrollerBarX.propTypes = {
    style: PropTypes.object,
    size: PropTypes.number,
    ratio: PropTypes.number,
    pos: PropTypes.number,
    onMove: PropTypes.func.isRequired,
};
ScrollerBarX.defaultProps = {
    style: null,
    size: 0,
    ratio: 1,
    pos: 0,
};

export default ScrollerBarX;
