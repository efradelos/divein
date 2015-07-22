var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://divein.firebaseio.com/dives");

var dives = [
  { category: 'Forward Dives', name: 'Forward Dive', dod: { tuck:  tuck: 1, pike:.2,, str: pike: 1.3, str: 1.4 }},}
  { category: 'Forward Dives', name: 'Forward 1 SS', dod: { tuck:  tuck: 1, pike:.4,, str: pike: 1.5, str: 1.6 }},}
  { category: 'Forward Dives', name: 'Forward 2 SS', dod: { tuck:  tuck: 2, pike:.2,, str: pike: 2.3, str: 2.6 }},}
  { category: 'Back Dives',    name: 'Back Dive',    dod: { tuck:  tuck: 1, pike:.5,, str: pike: 1.6, str: 1.7 }},}
  { category: 'Back Dives',    name: 'Back 2 SS',    dod: { tuck:  tuck: 2, pike:.2,, str: pike: 2.5}}}
];

dives.forEach(function(dive) {
  var ref = myFirebaseRef.push();
  dive.key = ref.key();
  ref.set(dive);
});


{ diveNo: 101, category: 'Forward Dives', name: 'Forward Dive', dod: { tuck: 1.2, pike: 1.3, str: 1.4 },
{ diveNo: 102, category: 'Forward Dives', name: 'Forward 1 SS', dod: { tuck: 1.4, pike: 1.5, str: 1.6 },
{ diveNo: 103, category: 'Forward Dives', name: 'Forward 1 1/2 SS', dod: { tuck: 1.6, pike: 1.7, str: 2.0 },
{ diveNo: 104, category: 'Forward Dives', name: 'Forward 2 SS', dod: { tuck: 2.2, pike: 2.3, str: 2.6 },
{ diveNo: 105, category: 'Forward Dives', name: 'Forward 2 1/2 SS', dod: { tuck: 2.4, pike: 2.6 },
{ diveNo: 106, category: 'Forward Dives', name: 'Forward 3 SS', dod: { tuck: 2.9, pike: 3.2 },
{ diveNo: 107, category: 'Forward Dives', name: 'Forward 3 1/2 SS', dod: { tuck: 3.0, pike: 3.3 },
{ diveNo: 112, category: 'Forward Dives', name: 'Forward Flying 1 SS', dod: { tuck: 1.6, pike: 1.7 },
{ diveNo: 113, category: 'Forward Dives', name: 'Forward Flying 1 1/2 SS', dod: { tuck: 1.8, pike: 1.9 },
{ diveNo: 201, category: 'Back Dives', name: 'Back Dive', dod: { tuck: 1.5, pike: 1.6, str: 1.7 },
{ diveNo: 202, category: 'Back Dives', name: 'Back 1 SS', dod: { tuck: 1.5, pike: 1.6, str: 1.7 },
{ diveNo: 203, category: 'Back Dives', name: 'Back 1 1/2 SS', dod: { tuck: 2.0, pike: 2.3, str: 2.5 },
{ diveNo: 204, category: 'Back Dives', name: 'Back 2 SS', dod: { tuck: 2.2, pike: 2.5 },
{ diveNo: 205, category: 'Back Dives', name: 'Back 2 1/2 SS', dod: { tuck: 3.0, pike: 3.2 },
{ diveNo: 212, category: 'Back Dives', name: 'Flying Back 1 SS', dod: { tuck: 1.6, pike: 1.7 },
{ diveNo: 301, category: 'Reverse Dives', name: 'Reverse Dive', dod: { tuck: 1.6, pike: 1.7, str: 1.8 },
{ diveNo: 302, category: 'Reverse Dives', name: 'Reverse 1 SS', dod: { tuck: 1.6, pike: 1.7, str: 1.8 },
{ diveNo: 303, category: 'Reverse Dives', name: 'Reverse 1 1/2 SS', dod: { tuck: 2.1, pike: 2.4, str: 2.7 },
{ diveNo: 304, category: 'Reverse Dives', name: 'Reverse 2 SS', dod: { tuck: 2.3, pike: 2.6, str: 2.9 },
{ diveNo: 305, category: 'Reverse Dives', name: 'Reverse 2 1/2 SS', dod: { tuck: 3.0, pike: 3.2 },
{ diveNo: 312, category: 'Reverse Dives', name: 'Flying Reverse SS', dod: { tuck: 1.7, pike: 1.8 },
{ diveNo: 401, category: 'Inward Dives', name: 'Inward Dive', dod: { tuck: 1.4, pike: 1.5, str: 1.8 },
{ diveNo: 402, category: 'Inward Dives', name: 'Inward 1 SS', dod: { tuck: 1.6, pike: 1.7, str: 2.0 },
{ diveNo: 403, category: 'Inward Dives', name: 'Inward 1 1/2 SS', dod: { tuck: 2.2, pike: 2.4 },
{ diveNo: 404, category: 'Inward Dives', name: 'Inward 2 SS', dod: { tuck: 2.8, pike: 3.0 },
{ diveNo: 405, category: 'Inward Dives', name: 'Inward 2 1/2 SS', dod: { tuck: 3.1, pike: 3.4 },
{ diveNo: 412, category: 'Inward Dives', name: 'Inward Flying SS', dod: { tuck: 2.0, pike: 2.1 },
{ diveNo: 413, category: 'Inward Dives', name: 'Inward Flying 1 1/2 SS', dod: { tuck: 2.7, pike: 2.9 },
{ diveNo: 5111, category: 'Twist Dives', name: 'Forward Dive, 1/2 Twist', dod: { tuck: 1.6, pike: 1.7, str: 1.8 },
{ diveNo: 5112, category: 'Twist Dives', name: 'Forward Dive, 1 Twist', dod: { pike: 1.9, str: 2.0 },
{ diveNo: 5121, category: 'Twist Dives', name: 'Forward 1 SS, 1/2 Twist', dod: { pike: 1.7, str:},
{ diveNo: 5122, category: 'Twist Dives', name: 'Forward 1 SS, 1 Twist', dod: { pike: 1.9, str:},
{ diveNo: 5124, category: 'Twist Dives', name: 'Forward 1 SS, 2 Twists', dod: { pike: 2.3, str:},
{ diveNo: 5126, category: 'Twist Dives', name: 'Forward 1 SS, 3 Twists', dod: { pike: 2.8, str:},
{ diveNo: 5131, category: 'Twist Dives', name: 'Forward 1 1/2 SS, 1/2 Twist', dod: { pike: 2.0, str:},
{ diveNo: 5132, category: 'Twist Dives', name: 'Forward 1 1/2 SS, 1 Twist', dod: { pike: 2.2, str:},
{ diveNo: 5134, category: 'Twist Dives', name: 'Forward 1 1/2 SS, 2 Twists', dod: { pike: 2.6, str:},
{ diveNo: 5136, category: 'Twist Dives', name: 'Forward 1 1/2 SS, 3 Twists', dod: { pike: 3.1, str:},
{ diveNo: 5152, category: 'Twist Dives', name: 'Forward 2 1/2 SS, 1 Twist', dod: { tuck: 3.0, pike: 3.2, str: — —},
{ diveNo: 5211, category: 'Twist Dives', name: 'Back Dive, 1/2 Twist', dod: { tuck: — — 1, pike:.8 —, str:},
{ diveNo: 5212, category: 'Twist Dives', name: 'Back Dive, 1 Twist', dod: { tuck: — — 2, pike:.0 —, str:},
{ diveNo: 5221, category: 'Twist Dives', name: 'Back 1 SS, 1/2 Twist', dod: { tuck: — — —, pike: 1.7, str:},
{ diveNo: 5222, category: 'Twist Dives', name: 'Back 1 SS, 1 Twist', dod: { tuck: — — —, pike: 1.9, str:},
{ diveNo: 5223, category: 'Twist Dives', name: 'Back 1 SS, 1 1/2 Twists', dod: { tuck: — — —, pike: 2.3, str:},
{ diveNo: 5225, category: 'Twist Dives', name: 'Back 1 SS, 2 1/2 Twists', dod: { tuck: — — —, pike: 2.7, str:},
{ diveNo: 5227, category: 'Twist Dives', name: 'Back 1 SS, 3 1/2 Twists', dod: { tuck: — — —, pike: 3.2, str:},
{ diveNo: 5231, category: 'Twist Dives', name: 'Back 1 1/2 SS, 1/2 Twist', dod: { tuck: — — —, pike: 2.1, str:},
{ diveNo: 5233, category: 'Twist Dives', name: 'Back 1 1/2 SS, 1 1/2 Twists', dod: { tuck: — — —, pike: 2.5, str:},
{ diveNo: 5235, category: 'Twist Dives', name: 'Back 1 1/2 SS, 2 1/2 Twists', dod: { tuck: — — —, pike: 2.9, str:},
{ diveNo: 5251, category: 'Twist Dives', name: 'Back 2 1/2 SS, 1/2 Twist', dod: { tuck: 2.7, pike: 2.9, str: — —},
{ diveNo: 5311, category: 'Twist Dives', name: 'Reverse Dive, 1/2 Twist', dod: { tuck: — — 1, pike:.9 —, str:},
{ diveNo: 5312, category: 'Twist Dives', name: 'Reverse Dive, 1 Twist', dod: { tuck: — — 2, pike:.1 —, str:},
{ diveNo: 5321, category: 'Twist Dives', name: 'Reverse 1 SS, 1/2 Twist', dod: { tuck: — — —, pike: 1.8, str:},
{ diveNo: 5322, category: 'Twist Dives', name: 'Reverse 1 SS, 1 Twist', dod: { tuck: — — —, pike: 2.0, str:},
{ diveNo: 5323, category: 'Twist Dives', name: 'Reverse 1 SS, 1 1/2 Twists', dod: { tuck: — — —, pike: 2.4, str:},
{ diveNo: 5325, category: 'Twist Dives', name: 'Reverse 1 SS, 2 1/2 Twists', dod: { tuck: — — —, pike: 2.8, str:},
{ diveNo: 5331, category: 'Twist Dives', name: 'Reverse 1 1/2 SS, 1/2 Twist', dod: { tuck: — — —, pike: 2.2, str:},
{ diveNo: 5333, category: 'Twist Dives', name: 'Reverse 1 1/2 SS, 1 1/2 Twists ....................— — — 2.6,
{ diveNo: 5335, category: 'Twist Dives', name: 'Reverse 1 1/2 SS, 2 1/2 Twists ....................— — — 3.0,
{ diveNo: 5351, category: 'Twist Dives', name: 'Reverse 2 1/2 SS, 1/2 Twist', dod: { tuck: 2.7, pike: 2.9, str: — —},
{ diveNo: 5411, category: 'Twist Dives', name: 'Inward Dive, 1/2 Twist', dod: { tuck: — 1., pike:7 2., str:0 —},
{ diveNo: 5412, category: 'Twist Dives', name: 'Inward Dive, 1 Twist', dod: { tuck: — 1., pike:9 2., str:2 —},
{ diveNo: 5421, category: 'Twist Dives', name: 'Inward 1 SS, 1/2 Twist', dod: { tuck: — — —, pike: 1.9, str:},
{ diveNo: 5422, category: 'Twist Dives', name: 'Inward 1 SS, 1 Twist', dod: { tuck: — — —, pike: 2.1, str:},
{ diveNo: 5432, category: 'Twist Dives', name: 'Inward 1 1/2 SS, 1 Twist', dod: { tuck: — — —, pike: 2.7, str:},
{ diveNo: 5434, category: 'Twist Dives', name: 'Inward 1 1/2 SS, 2 Twists', dod: { tuck: — — —, pike: 3.1, str:},
