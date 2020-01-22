import PropTypes from 'prop-types';
import React from 'react';

/**
 * Context might be deprecated in the future.
 */
class Provider extends React.Component {
    getChildContext() {
      return {
        store: this.props.store
      };
    }
    render() {
      return this.props.children;
    }
  }
  
  Provider.childContextTypes = {
    store: PropTypes.object
  };

export default Provider;