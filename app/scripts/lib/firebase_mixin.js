import S          from 'string';

export default (bindVar) => {
  var firebaseRef;
  return {
    componentWillMount: function() {
      firebaseRef = this.getFirebaseRef && this.getFirebaseRef(bindVar);
      if(firebaseRef) {
        firebaseRef.on('value', (snapshot) => {
          var state = {};
          var val = snapshot.val();
          state[bindVar] = val;
          this.setState(state);
        });
      }
    },

    componentWillUnmount: function() {
      if(firebaseRef) firebaseRef.off();
    },

    ['save' + S(bindVar).capitalize()]: function(model) {
      console.log('SAVING', model);
    }

  };
};
