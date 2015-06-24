import React from 'react';
import classNames from 'classnames';

export default class Loading extends React.Component {
  render() {
    var loading = false;
    var showIcon = this.props.showIcon && this.props.loading;
    var classes = classNames({ 'loading-container': true, loading: this.props.loading, 'show-icon': showIcon });
    if (this.props.loading) {
      var overlayClass= classNames({
        'overlay': true,
        'show-icon': showIcon
      });
      loading = <div className={overlayClass}></div>;
    }
    return (
      <div className={classes}>
        {this.props.children}
        {loading}
      </div>
    );
  }
}
