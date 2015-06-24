var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://divein.firebaseio.com/dives");

var dives = [
  { category: 'Forward Dives', name: 'Forward Dive', dod: { tuck: 1.2, pike: 1.3, str: 1.4 }},
  { category: 'Forward Dives', name: 'Forward 1 SS', dod: { tuck: 1.4, pike: 1.5, str: 1.6 }},
  { category: 'Forward Dives', name: 'Forward 2 SS', dod: { tuck: 2.2, pike: 2.3, str: 2.6 }},
  { category: 'Back Dives',    name: 'Back Dive',    dod: { tuck: 1.5, pike: 1.6, str: 1.7 }},
  { category: 'Back Dives',    name: 'Back 2 SS',    dod: { tuck: 2.2, pike: 2.5}}
];

dives.forEach(function(dive) {
  var ref = myFirebaseRef.push();
  dive.key = ref.key();
  ref.set(dive);
});
