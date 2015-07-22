import React  from 'react';
import Router from 'react-router';
import _      from 'lodash';
import FirebaseRef from 'lib/firebase';
import mixins from 'lib/mixins';
import FirebaseMixin from 'lib/firebase_mixin';

export default class MeetList extends mixins(FirebaseMixin('meets')) {
  constructor(props) {
    super(props);
    this.state = { meets: [] };
    this.renderGroup = this.renderGroup.bind(this);
    this.renderMeet  = this.renderMeet.bind(this);
  }

  getFirebaseRef() {
    return new FirebaseRef('meets');
  }

  renderGroup(meets, group) {
    group = <div className="item item-divider">{group}</div>;
    meets = _.map(meets, this.renderMeet);
    return [group, meets];
  }

  renderMeet(meet) {
    return (
      <Router.Link to="meets:edit" params={{ key: meet.key }} className="item" key={meet.key}>
        <h2 className="media-body">{meet.name}</h2>
        <div className="row">
        </div>
      </Router.Link>
    );
  }

  render() {
    return (
      <div className="meet-list">
        <header className="bar bar-header">
          <Router.Link to="home" className="button button-icon icon ion-ios-arrow-back"></Router.Link>
          <h1 className="h1 title">Meets</h1>
          <Router.Link to="meets:edit" className="button button-icon icon ion-compose"></Router.Link>
        </header>
        <div className="scroll-content has-header">
          <div className="list">
            {_.map(this.state.meets, this.renderMeet)}
          </div>
        </div>
      </div>
    );
  }
}
