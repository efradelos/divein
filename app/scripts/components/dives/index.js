import React  from 'react';
import Router from 'react-router';
import _      from 'lodash';
import FirebaseRef from 'lib/firebase';
import mixins from 'lib/mixins';
import FirebaseMixin from 'lib/firebase_mixin';

export default class DiveList extends mixins(FirebaseMixin('dives')) {
  constructor(props) {
    super(props);
    this.state = { dives: [] };
    this.renderGroup = this.renderGroup.bind(this);
    this.renderDive  = this.renderDive.bind(this);
  }

  getFirebaseRef() {
    return new FirebaseRef('dives');
  }

  renderGroup(dives, group) {
    group = <div className="item item-divider">{group}</div>;
    dives = _.map(dives, this.renderDive);
    return [group, dives];
  }

  renderDive(dive) {
    return (
      <Router.Link to="dives:edit" params={{ key: dive.key }} className="item" key={dive.key}>
        <h2 className="media-body">{dive.name}</h2>
        <div className="row">
          <p className="col">Tuck: {dive.dod.tuck || '--'}</p>
          <p className="col">Pike: {dive.dod.pike || '--'}</p>
          <p className="col">Str: {dive.dod.str || '--'}</p>
          <p className="col">Free: {dive.dod.free || '--'}</p>
        </div>
      </Router.Link>
    );
  }

  render() {
    var groupedDives = _.groupBy(_.values(this.state.dives), (dive) => dive.category );

    return (
      <div className="dive-list">
        <header className="bar bar-header">
          <Router.Link to="home" className="button button-icon icon ion-ios-arrow-back"></Router.Link>
          <h1 className="h1 title">Dives</h1>
          <Router.Link to="dives:edit" className="button button-icon icon ion-compose"></Router.Link>
        </header>
        <div className="scroll-content has-header">
          <div className="list">
            {_.map(groupedDives, this.renderGroup)}
          </div>
        </div>
      </div>
    );
  }
}
