import * as firebase from 'firebase';
import firebaseConfig from './firebase.json';

export function initFirebase() {
    if(!firebaseConfig || !firebaseConfig.apiKey || firebaseConfig.apiKey == '<YOUR-API-KEY>') {
        throw new Error('Add your own firebaseConfig.json file in the folder /config/firebase.json')
    } else {
        console.log('Initialize firebase.');
        firebase.initializeApp(firebaseConfig);
    }
}