import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { getDatabase, ref, set, onValue, query, orderByChild, orderByKey } from 'firebase/database';
 
class Firebase {
    constructor(){
        const app = initializeApp(firebaseConfig);
        
        this.auth = getAuth(app);
        this.db = getDatabase(app);
    }

    async login(auth, email, password) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    /*async write( unidad, aire, valor ) {
        set(ref(this.db, "unidad-" + unidad + "/" + "aire-" + aire), {
            encendido: valor
        });
    }*/
}
 
const firebase = new Firebase();
export default firebase;