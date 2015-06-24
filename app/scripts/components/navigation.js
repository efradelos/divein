import React  from 'react';
import Router from 'react-router';

import Notification from 'components/notification';

let  {Link, RouteHandler} = Router;

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.handleNotification = this.handleNotification.bind(this);
  }

  handleNotification(notification) {
    this.refs.notification.notify(notification);
  }

  render() {
    return (
      <div>
        <Notification ref="notification" />
        <RouteHandler onNotify={this.handleNotification}/>
        <nav className="tabs tabs-icon-top">
          <Link to="home" className="tab-item">
            <i className="icon ion-home"></i>
            <span className="tab-label">Home</span>
          </Link>
          <a className="tab-item" href="#">
            <i className="icon ion-trophy"></i>
            <span className="tab-label">Meets</span>
          </a>
          <Link to="dives:list" className="tab-item">
            <i className="icon ion-waterdrop"></i>
            <span className="tab-label">Dives</span>
          </Link>
          <Link to="divers:list" className="tab-item">
            <i className="icon ion-woman"></i>
            <span className="tab-label">Divers</span>
          </Link>
          <a className="tab-item" href="#">
            <i className="icon ion-gear-a"></i>
            <span className="tab-label">Settings</span>
          </a>
        </nav>
      </div>
    );
  }
}
// <nav className="bar bar-tab">
// </nav>
