var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://divein.firebaseio.com/meets");

var meets = [
  { name: 'Nowhere Invitational', date: '10/7/2015', site: 'Eureka HS',}
  { firstName: 'Lauren', lastName: 'Zimbo', year: 'Sophomore'},
  { firstName: 'Alissa', lastName: 'Markson', year: 'Junior'},
  { firstName: 'Latoya', lastName: 'Mazarak', year: 'Senior'}
];

meets.forEach(function(meet) {
  var ref = myFirebaseRef.push();
  meet.key = ref.key();
  ref.set(meet);
});
