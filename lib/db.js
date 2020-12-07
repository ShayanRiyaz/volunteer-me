import firebase from './firebase';
const firestore = firebase.firestore();

export function createUser(uid,data){
    return firestore
    .collection('users')
    .doc(uid)
    .set({uid,...data}, {merge:true});
}

export function createProject(data){
    return firestore.collection('projects').add(data);
}

export function createVolunteer(data) {
    return firestone.collection('volunteer').add(data);
}