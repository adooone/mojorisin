import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends PureComponent {
    constructor(props) {
        super(props);
        this.displayName = 'Portal';
    }
    render() {
        if (this.props.children && this.props.domNode) {
            return (
                ReactDOM.createPortal(
                    this.props.children,
                    this.props.domNode
                )
            );
        }
        if (!this.props.domNode) {
            return this.props.children;
        }
        return null;
    }
}

Portal.propTypes = {
    children: PropTypes.node,
    domNode: PropTypes.instanceOf(Element),
};
Portal.defaultProps = {
    children: null,
    domNode: undefined,
};

export default Portal;
