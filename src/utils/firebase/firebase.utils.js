import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionkey, objectToAdd) => {
    
    const collectionRef = collection(db, collectionkey);
    const batch = writeBatch(db);

    objectToAdd.forEach((object) => {
        
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async() => {
    
    const collectionRef = collection(db, 'categories');

    const q = query(collectionRef);

    const querysnapshot = await getDocs(q);

    const categoryMap = querysnapshot.docs.reduce((acc, docsnapshot) => {
        
        const {title, items} = docsnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}

export const createUserDocumentFromAuth = async(
    userAuth, 
    additionalInfo = {}
    ) => {
    
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    // If user data does not exist
    // Create / set the document with data from userAuth in My Collection

    if(!userSnapshot.exists()){
        
        const {displayName, email}  = userAuth;

        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }catch(error){
            console.log('error creating the user', error.message);
        }

    }

    // If user data exists
    // return userdataref

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)

}

export const signoutuser = async () => {
    await signOut(auth);
} 

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}