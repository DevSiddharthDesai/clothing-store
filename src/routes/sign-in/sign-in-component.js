import { signInWithGooglePopup, createUserDocumentFromAuth } from  '../../utils/firebase/firebase.utils';

const SignIn = () => {

    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        const {user} = response;
        const userDocRef = createUserDocumentFromAuth(user);
    }

    return (
        <>
            <div>Login Page</div>
            <h1>Hellp</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup</button> 
        </>
    )
}

export default SignIn;