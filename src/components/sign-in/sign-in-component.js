// Packages and Libraries
import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

// Imported Components
import FormInput from "../form-input/form-input";
import Button from "../button/button";

// CSS
import './sign-in-style.scss';


const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async() => {
        await signInWithGooglePopup();
    }

    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        try{

            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        }catch(error){
            if(error.code === 'auth/wrong-password'){
                alert('You entered Wrong Password');
            } else if(error.code === 'auth/user-not-found'){
                alert('user not found');
            }
        }
    }
    
    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />

                <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    {/* <button type="submit">Sign Up</button> */}
                    <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;