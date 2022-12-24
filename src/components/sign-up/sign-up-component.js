// Packages and Libraries
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

// Imported Components
import FormInput from "../form-input/form-input";
import Button from "../button/button";

// CSS
import './sign-up-style.scss';


const defaultFormFields = {

    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmpassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
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
        
        if(password !== confirmpassword){

            alert("Passwords do not match");
            return
        }

        try{

            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});

            resetFormFields();

        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }
        }
    }
    
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required />

                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required />

                <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required />

                <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmpassword" value={confirmpassword} required />

                <Button type="submit">Sign Up</Button>
                {/* <button type="submit">Sign Up</button> */}
            </form>
        </div>
    )
}

export default SignUp;