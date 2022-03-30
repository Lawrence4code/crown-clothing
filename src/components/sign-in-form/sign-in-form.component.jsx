import { useState } from 'react';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignInContainer, ButtonContainer } from './sign-in.styles.jsx';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = async (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account, sign in.</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="password"
          type="text"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">
            Sign In
          </Button>
          <Button
            onClick={signInWithGooglePopup}
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
