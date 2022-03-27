import { useState } from "react";

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';

import './sign-in.styles.scss'

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = async event => {
        const {name, value } = event.target;

        setFormFields({...formFields, [name]: value})

    }
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        console.log('handleSubmit ttt')
        event.preventDefault();
        try {
               await signInAuthUserWithEmailAndPassword(email, password);
               resetFormFields()
            
        } catch (error) {
            console.log({error})
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account, sign in.</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="email"  type="text" required name="email" value={email} onChange={handleChange}/>
                <FormInput label="password"  type="text" required name="password" value={password} onChange={handleChange}/>
                <div className="buttons-container">
                    <Button buttonType="inverted" type="submit">Sign In</Button>
                    <Button onClick={signInWithGooglePopup} buttonType="google" type="button">Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;