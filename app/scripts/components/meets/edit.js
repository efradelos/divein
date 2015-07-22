import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import FirebaseRef from 'lib/firebase';
import $ from 'jquery';
import mixins from 'lib/mixins';
import FirebaseMixin from 'lib/firebase_mixin';
import MessageBox from 'components/message_box';

class MeetEdit extends mixins(FirebaseMixin('meet'), FirebaseMixin('teams')) {
  constructor(props) {
    super(props);
    this.state = { meet: {}, teams: [], newTeam: '' };
    this.handleSave = this.handleSave.bind(this);
    this.handleNewTeam = this.handleNewTeam.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  getFirebaseRef(key) {
    if(this.props.params.key) {
      switch(key) {
        case 'meet':
          return new FirebaseRef('meets/' + this.props.params.key);
        case 'teams':
          return new FirebaseRef('meets/' + this.props.params.key + '/teams');
      }
    }
  }

  addTeam() {
    console.log(this.saveTeams({name: 'this'}));
    var team = this.state.newTeam;
    if (!team.name) return;

    // var ref = this.getFirebaseRef('teams').push();
    // ref.set({ key: ref.key(), name: name});
    // this.setState({newTeam: '' });
  }

  handleKeyDown(e) {
    if (_.contains([9, 13], e.keyCode)) {
      if(this.addTeam_debounce) this.addTeam_debounce.cancel();
      this.addTeam();
    }
  }

  handleNewTeam(e) {
    if (!this.addTeam_debounce) {
      this.addTeam_debounce = _.debounce(this.addTeam, 3000, this);
    }
    var team = this.refs.newTeam.getDOMNode().value;
    this.setState({newTeam: team});
    this.addTeam_debounce();
  }

  handleSave() {
    var meet = this.state.meet;
    meet.name = this.refs.name.getDOMNode().value;
    meet.site  = this.refs.site.getDOMNode().value;
    meet.date  = this.refs.date.getDOMNode().value;
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

  renderTeam(team, index) {
    return (
      <div className="item item-icon-left item-button-right" key={index}>
        <i className="icon ion-person-stalker"></i>
        <input type="text" placeholder="Team Name" defaultValue={team.name} />
        <button className="button button-icon">
          <i className="icon ion-chevron-right"></i>
        </button>
      </div>
    );
  }

  render() {
    var meet = this.state.meet;
    if(!meet) return false;
    var teams = this.state.teams;

    var avatar = meet.avatar || "http://placehold.it/168x168";
    return (
      <div id="dive-edit">
        <MessageBox ref="message" />
        <header className="bar bar-header">
          <Router.Link to="meets:list" className="button button-icon icon ion-ios-arrow-back"></Router.Link>
          <h1 className="h1 title">Nope</h1>
          <Router.Link to="meets:score" params={{ key: '2323'}} className="button button-icon icon ion-power" onClick={this.confirmDelete} />
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
            {_.map(teams, this.renderTeam)}
            <div className="item item-icon-left" href="#">
              <i className="icon ion-document"></i>
              <input type="text" placeholder="Add Team" onChange={this.handleNewTeam} onKeyUp={this.handleKeyDown} value={this.state.newTeam} ref="newTeam"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MeetEdit.contextTypes= {
  router: React.PropTypes.func.isRequired
};

export default MeetEdit;
