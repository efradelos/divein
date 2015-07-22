import React from 'react';
import Router from 'react-router';
import FirebaseRef from 'lib/firebase';
import $ from 'jquery';
import mixins from 'lib/mixins';
import FirebaseMixin from 'lib/firebase_mixin';
import MessageBox from 'components/message_box';

class DiveEdit extends mixins(FirebaseMixin('dive')) {
  constructor(props) {
    super(props);
    this.state = { dive: {} };
    this.handleSave = this.handleSave.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  getFirebaseRef() {
    if(this.props.params.key) return new FirebaseRef('dives/' + this.props.params.key);
  }

  handleSave() {
    var dive = this.state.dive;
    dive.firstName = this.refs.firstName.getDOMNode().value;
    dive.lastName  = this.refs.lastName.getDOMNode().value;
    dive.year  = this.refs.year.getDOMNode().value;
    var firebase;
    var complete = () => {
      this.props.onNotify('Saved Successfully');
      this.setState({ dive: dive });
    };

    if(dive.key) {
      firebase = new FirebaseRef('dives/' + dive.key);
      firebase.update(dive, complete);
    } else {
      firebase = new FirebaseRef('dives');
      var ref = firebase.push();
      dive.key = ref.key();
      ref.set(dive, complete);
    }
  }

  confirmDelete() {
    this.refs.message.confirm('Delete', 'Are you sure?', (confirmed) => {
      if(confirmed) {
        var firebase = new FirebaseRef('dives/' + this.state.dive.key);
        firebase.remove(() => {
          this.context.router.transitionTo('dives:list');
          this.props.onNotify('Deleted Successfully');
        });
      }
    });
  }

  render() {
    var dive = this.state.dive;
    if(!dive) return false;

    var avatar = dive.avatar || "http://placehold.it/168x168";
    var deleteLink = dive.key ? <button className="button button-icon icon ion-trash-a" onClick={this.confirmDelete} /> : false;
    return (
      <div>
        <MessageBox ref="message" />
        <header className="bar bar-header">
          <Router.Link to="dives:list" className="button button-icon icon ion-ios-arrow-back"></Router.Link>
          <h1 className="h1 title">{dive.name}</h1>
          {deleteLink}
        </header>
        <div className="scroll-content has-header">
          <div className="list card" key={dive.key}>
            <label className="item item-input">
              <span className="input-label">Name</span>
              <input type="text" placeholder="Forward 1 SS" defaultValue={dive.name} ref="name" />
            </label>
            <label className="item item-input">
              <span className="input-label">Category</span>
              <input type="text" placeholder="Forward Dive" defaultValue={dive.category} ref="category" />
            </label>

            <div className="padding">
              <button className="button button-block button-positive" onClick={this.handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DiveEdit.contextTypes= {
  router: React.PropTypes.func.isRequired
};

export default DiveEdit;
