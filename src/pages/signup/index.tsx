import { GeldIcon } from '@/components/icons/GeldIcon';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { RotatingLines } from 'react-loader-spinner';

interface SignupResponse {
  _id: string;
}

const Signup = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repassword, setRepassword] = useState('');
  const [required, setRequired] = useState('');

  const createUser = async () => {
    try {
      if (username.trim() === '' || email.trim() === '' || password.trim() === '' || repassword.trim() === '') {
        setRequired('Please enter all inputs');
        return;
      }
      if (password !== repassword) {
        alert('Password and Re-password do not match');
        return;
      }
      setLoader(true);
      await axios.post<SignupResponse>('https://income-tracker-service-2z57.onrender.com/signup', {
        username: username,
        password: password,
        email: email,
      });
      setLoader(false);
      router.back();
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name1 = event.target.value;
    if (name1.length <= 4) {
      setUsernameError('must be more than 4 characters');
    } else {
      setUsernameError('');
    }
    setUsername(name1);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email1 = event.target.value;
    if (!email1.includes('@')) {
      setEmailError('must include @');
    } else {
      setEmailError('');
    }
    setEmail(email1);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pass1 = event.target.value;
    setPassword(event.target.value);
    if (pass1.length < 8) {
      setPasswordError('at least 8');
    } else {
      setPasswordError('');
    }
  };

  const handleChangeRepassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepassword(event.target.value);
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="inputs">
            <GeldIcon />
            <h1 className="welcome">Create Geld account</h1>
            <p className="welcomex">Sign up below to create your Wallet account</p>
            <input className="input" placeholder="Email or phone number" onChange={handleChangeEmail} />
            <div style={{ color: 'red' }}>{emailError}</div>
            <input className="input" placeholder="Username" value={username} onChange={handleChangeUserName} />
            <div style={{ color: 'red' }}>{usernameError}</div>
            <input className="input" placeholder="Password" type="password" onChange={handleChangePassword} />
            <div style={{ color: 'red' }}>{passwordError}</div>
            <input className="input" placeholder="Re-enter password" type="password" onChange={handleChangeRepassword} />
            {loader ? (
              <div>
                <RotatingLines visible={true} width="48" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" />
              </div>
            ) : (
              <div className="login" onClick={createUser}>
                Sign up
              </div>
            )}
            <div style={{ color: 'red' }}>{required}</div>
            <p>
              Already have an account? <span className="signup-link" onClick={handleLogin}>Log in</span>
            </p>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Signup;
