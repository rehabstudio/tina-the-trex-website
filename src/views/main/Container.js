import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';

export class Container extends React.Component {
  renderChildren() {
    const childProps = {
      ...this.props
    };
    const {children} = this.props;
    return React.Children.map(children, c => React.cloneElement(c, childProps));
  }
  render() {
    return (
      <div>
        {this.renderChildren()}
      </div>
    );
  }
}

Container.contextTypes = {
  router: T.object
};

Container.propTypes = {
  children: React.PropTypes.node
};

export default Container;
