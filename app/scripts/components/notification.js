import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.queue = [];
  }

  notify(notification) {
    this.queue.push(notification);
    this.processNotifications();
  }

  processNotifications() {
    if(!this.processingQueue && this.queue.length > 0) {
      this.processingQueue = true;
      var noti = this.queue.shift();
      this.setState({notification: noti});
      _.delay(() => {
        this.setState({ notification: null});
        _.delay(() => {
          this.processingQueue = false;
          this.processNotifications();
        }, 500);
      }, 3000);
    }
  }

  render() {
    var notiClass = classNames({ notification: true, active: !!this.state.notification});
    return (
      <div className={notiClass}>
        <p>{this.state.notification}</p>
      </div>
    );
  }
}
