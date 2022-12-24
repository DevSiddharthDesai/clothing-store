import SignUp from '../../components/sign-up/sign-up-component';
import SignInForm from '../../components/sign-in/sign-in-component';
import './auth.style.scss';

const Auth = () => {

    return (
        <>
            <div className='authentication-container'> 
                <SignInForm />
                <SignUp />
            </div>
        </>
    )
}

export default Auth;