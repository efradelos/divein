import React from 'react';
import Router from 'react-router';
import FirebaseRef from 'lib/firebase';
import $ from 'jquery';
import mixins from 'lib/mixins';
import FirebaseMixin from 'lib/firebase_mixin';
import MessageBox from 'components/message_box';

class DiverEdit extends mixins(FirebaseMixin('diver')) {
  constructor(props) {
    super(props);
    this.state = { diver: {} };
    this.handleSave = this.handleSave.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.chooseFile = this.chooseFile.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  getFirebaseRef() {
    if(this.props.params.key) return new FirebaseRef('divers/' + this.props.params.key);
  }

  handleFileChange(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
      var diver = this.state.diver;
      diver.avatar = e.target.result;
      this.setState({diver: diver});
    };
    reader.readAsDataURL(file);
  }

  componentDidMount() {
    var $file = this.$file = $(React.findDOMNode(this.refs.file));
    $file.on('change', this.handleFileChange);
  }

  chooseFile() {
    this.$file.click();
  }

  handleSave() {
    var diver = this.state.diver;
    diver.firstName = this.refs.firstName.getDOMNode().value;
    diver.lastName  = this.refs.lastName.getDOMNode().value;
    diver.year  = this.refs.year.getDOMNode().value;
    var firebase;
    var complete = () => {
      this.props.onNotify('Saved Successfully');
      this.setState({ diver: diver });
    };

    if(diver.key) {
      firebase = new FirebaseRef('divers/' + diver.key);
      firebase.update(diver, complete);
    } else {
      firebase = new FirebaseRef('divers');
      var ref = firebase.push();
      diver.key = ref.key();
      ref.set(diver, complete);
    }
  }

  confirmDelete() {
    this.refs.message.confirm('Delete', 'Are you sure?', (confirmed) => {
      if(confirmed) {
        var firebase = new FirebaseRef('divers/' + this.state.diver.key);
        firebase.remove(() => {
          this.context.router.transitionTo('divers:list');
          this.props.onNotify('Deleted Successfully');
        });
      }
    });
  }

  render() {
    var diver = this.state.diver;
    if(!diver) return false;
    var avatar = diver.avatar || "http://placehold.it/168x168";
    var deleteLink = diver.key ? <button className="button button-icon icon ion-trash-a" onClick={this.confirmDelete} /> : false;
    return (
      <div>
        <MessageBox ref="message" />
        <header className="bar bar-header">
          <Router.Link to="divers:list" className="button button-icon icon ion-ios-arrow-back"></Router.Link>
          <h1 className="h1 title">{diver.firstName} {diver.lastName}</h1>
          {deleteLink}
        </header>
        <div className="scroll-content has-header">
          <div className="list card" key={diver.key}>
            <div className="padding text-center">
              <button className="button button-icon" onClick={this.chooseFile}><img src={avatar} height="168" width="168"/></button>
              <input type="file" className="hide" ref="file" />
            </div>
            <label className="item item-input">
              <span className="input-label">First Name</span>
              <input type="text" placeholder="Tom" defaultValue={diver.firstName} ref="firstName" />
            </label>
            <label className="item item-input">
              <span className="input-label">Last Name</span>
              <input type="text" placeholder="Peterson" defaultValue={diver.lastName} ref="lastName" />
            </label>

            <label className="item item-input item-select">
              <span className="input-label">Year</span>
              <select defaultValue={diver.year} ref="year">
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
              </select>
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

DiverEdit.contextTypes= {
  router: React.PropTypes.func.isRequired
};

export default DiverEdit;
