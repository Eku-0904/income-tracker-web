import { GeldIcon } from '@/components/icons/GeldIcon';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try {
      if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all inputs');
        return;
      }

      const res = await axios.post('https://income-tracker-service-2z57.onrender.com/login', {
        email: email,
        password: password,
      });

      alert('Hello user');
      localStorage.setItem('user', 'true');
      localStorage.setItem('userID', res.data._id);

      router.push('/stepper');

    } catch (err) {
      alert('User not found or password is incorrect');
    }
  };

  const changeRoute = () => {
    router.push('/signup');
  };

  return (
    <div>
      <div className="container">
        <div className="left">
          <div className='inputs'>
            <GeldIcon />
            <h1 className='welcome' >Welcome Back</h1>
            <p className='welcomex' >Welcome back, Please enter your details</p>
            <input
              className="input"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='input'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='login' onClick={loginUser}>
              Login
            </button>
            <p>Don&apos;t have an account?</p>
            <div className='signup-link' onClick={changeRoute}>
              Sign up
            </div>
          </div>
        </div>
        <div className='right'></div>
      </div>
    </div>
  );
};

export default Login;
