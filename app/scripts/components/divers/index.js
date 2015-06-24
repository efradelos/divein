import React  from 'react';
import Router from 'react-router';
import _      from 'lodash';
import FirebaseRef from 'lib/firebase';
import mixins from 'lib/mixins';
import FirebaseMixin from 'lib/firebase_mixin';

export default class DiverList extends mixins(FirebaseMixin('divers')) {
  constructor(props) {
    super(props);
    this.state = { divers: [] };
  }

  getFirebaseRef() {
    return new FirebaseRef('divers');
  }

  renderDiver(diver, key) {
    var avatar = diver.avatar || "http://placehold.it/42x42";
    return (
      <Router.Link to="divers:edit" params={{ key: key }} className="item item-avatar" key={key}>
        <img src={avatar} />
        <h2 className="media-body">{diver.lastName}, {diver.firstName}</h2>
        <p>{diver.year}</p>
      </Router.Link>
    );
  }

  render() {
    return (
      <div>
        <header className="bar bar-header">
          <Router.Link to="home" className="button button-icon icon ion-ios-arrow-back"></Router.Link>
          <h1 className="h1 title">Divers</h1>
          <Router.Link to="divers:edit" className="button button-icon icon ion-compose"></Router.Link>
        </header>
        <div className="scroll-content has-header">
          <div className="list">
            {_.map(this.state.divers, this.renderDiver)}
          </div>
        </div>
      </div>
    );
  }
}
