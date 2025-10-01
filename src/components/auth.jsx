import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin(event) {
    event.preventDefault;
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <form className="controls">
        <p>
          <label htmlFor='email' className={`${emailNotValid ? 'invalid' : ''}`}>Email</label>
          <input
            type="email"
            id='email'
            // use '&&' tidak cocok untuk jsx classname 
            className={emailNotValid ? 'invalid' : undefined} 
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password" className={`${passwordNotValid ? 'invalid' : ''}`}>Password</label>
          <input
            type="password"
            id="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </form>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
