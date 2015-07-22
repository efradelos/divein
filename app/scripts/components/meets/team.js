import React from 'react';
import Router from 'react-router';
import FirebaseRef from 'lib/firebase';
import $ from 'jquery';
import mixins from 'lib/mixins';
import FirebaseMixin from 'lib/firebase_mixin';
import MessageBox from 'components/message_box';

class MeetTeam extends mixins(FirebaseMixin('meet')) {
  constructor(props) {
    super(props);
    this.state = { meet: {} };
    this.handleSave = this.handleSave.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  getFirebaseRef() {
    if(this.props.params.key) return new FirebaseRef('meets/' + this.props.params.key);
  }

  handleSave() {
    var meet = this.state.meet;
    meet.firstName = this.refs.firstName.getDOMNode().value;
    meet.lastName  = this.refs.lastName.getDOMNode().value;
    meet.year  = this.refs.year.getDOMNode().value;
    var firebase;
    var complete = () => {
      this.props.onNotify('Saved Successfully');
      this.setState({ meet: meet });
    };

    if(meet.key) {
      firebase = new FirebaseRef('meets/' + meet.key);
      firebase.update(meet, complete);
    } else {
      firebase = new FirebaseRef('meets');
      var ref = firebase.push();
      meet.key = ref.key();
      ref.set(meet, complete);
    }
  }

  confirmDelete() {
    this.refs.message.confirm('Delete', 'Are you sure?', (confirmed) => {
      if(confirmed) {
        var firebase = new FirebaseRef('meets/' + this.state.meet.key);
        firebase.remove(() => {
          this.context.router.transitionTo('meets:list');
          this.props.onNotify('Deleted Successfully');
        });
      }
    });
  }

  render() {
    var meet = this.state.meet;
    if(!meet) return false;

    var avatar = meet.avatar || "http://placehold.it/168x168";
    return (
      <div id="dive-edit">
        <MessageBox ref="message" />
        <header className="bar bar-header">
          <Router.Link to="meets:list" className="button button-icon icon ion-ios-arrow-back"></Router.Link>
          <h1 className="h1 title">{meet.name}</h1>
          <button className="button button-icon icon ion-power" onClick={this.confirmDelete} />
        </header>
        <div className="scroll-content has-header">
          <div className="list card" key={meet.key}>
            <label className="item item-input">
              <span className="input-label">Name</span>
              <input type="text" placeholder="January 8" defaultValue={meet.name} ref="name" />
            </label>
            <label className="item item-input">
              <span className="input-label">Site</span>
              <input type="text" placeholder="Madison H.S." defaultValue={meet.site} ref="site" />
            </label>
            <label className="item item-input">
              <span className="input-label">Date</span>
              <input type="date" placeholder="January 8" defaultValue={meet.date} ref="date" />
            </label>

            <div className="padding">
              <button className="button button-block button-positive" onClick={this.handleSave}>Save</button>
            </div>
          </div>
          <div className="teams card list">
            <div className="item item-divider">
              Teams
            </div>
            <div className="item item-icon-left item-button-right" href="#">
              <i className="icon ion-person-stalker"></i>
              <input type="text" placeholder="Team Name" value="Eureka Wildcats" />
              <button className="button button-icon">
                <i className="icon ion-chevron-right"></i>
              </button>
            </div>
            <div className="item item-icon-left item-button-right" href="#">
              <i className="icon ion-person-stalker"></i>
              <input type="text" placeholder="Team Name" value="Lafayette Lancers" />
              <button className="button button-icon">
                <i className="icon ion-chevron-right"></i>
              </button>
            </div>
            <div className="item item-icon-left" href="#">
              <i className="icon ion-document"></i>
              <input type="text" placeholder="Add Team" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MeetTeam.contextTypes= {
  router: React.PropTypes.func.isRequired
};

export default MeetTeam;
