
import Firebase from 'firebase';

export default class FirebaseRef extends Firebase {
  constructor(path) {
    super("https://divein.firebaseio.com/" + path);
  }
}
