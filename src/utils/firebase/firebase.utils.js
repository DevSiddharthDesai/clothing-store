import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAu57ErhoE9-HqNDJjnunSDUmy-5ecV0fQ",
    authDomain: "crown-clothing-db-27185.firebaseapp.com",
    projectId: "crown-clothing-db-27185",
    storageBucket: "crown-clothing-db-27185.appspot.com",
    messagingSenderId: "344080577513",
    appId: "1:344080577513:web:2cb27d93b16f2a469a1178"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // If user data does not exist
    // Create / set the document with data from userAuth in My Collection

    if(!userSnapshot.exists()){
        
        const {displayName, email}  = userAuth;

        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log('error creating the user', error.message);
        }

    }

    // If user data exists
    // return userdataref

    return userDocRef;
}