import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from  '../../utils/firebase/firebase.utils';
import SignUp from '../../components/sign-up/sign-up-component';
import Button from '../../components/button/button';

const SignIn = () => {

    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        const {user} = response;
        const userDocRef = createUserDocumentFromAuth(user);
    }

    return (
        <>
            <div>Login Page</div> 
            <Button onClick={logGoogleUser} buttonType="google">Sign in with Google</Button>
            <SignUp />
        </>
    )
}

export default SignIn;