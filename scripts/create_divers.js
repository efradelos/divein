var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://divein.firebaseio.com/divers");

var divers = [
  { firstName: 'Lauren', lastName: 'Zimbo', year: 'Sophomore'},
  { firstName: 'Alissa', lastName: 'Markson', year: 'Junior'},
  { firstName: 'Latoya', lastName: 'Mazarak', year: 'Senior'}
];

divers.forEach(function(diver) {
  var ref = myFirebaseRef.push();
  diver.key = ref.key();
  ref.set(diver);
});
