import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../services/authService';
import type { AppDispatch, RootState } from '../../store';

import useToast from '../../hooks/useToast';

import InputField from '.././common/InputField';
import Toast from '../common/Toast';
import { useNavigate } from 'react-router-dom';
import { resetState } from '../../features/auth/authSlice';

interface LoginCreds {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const [loginCreds, setLoginCreds] = useState<LoginCreds>({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<LoginCreds>({
    username: '',
    password: '',
  });

  const [isShaking, setIsShaking] = useState(false);

  const navigate = useNavigate();

  const { toast, showToast } = useToast();
  const loginError = useSelector((state: RootState) => state.auth.error);
  const isUserLogged = useSelector(
    (state: RootState) => state.auth.status === 'signedIn'
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let shakeTimeout: number | null = null;
    if (isShaking) {
      shakeTimeout = window.setTimeout(() => setIsShaking(false), 500);
    }
    return () => {
      shakeTimeout && clearTimeout(shakeTimeout);
    };
  }, [isShaking]);

  useEffect(() => {
    if (loginError) {
      showToast(loginError, 'error');
      dispatch(resetState());
    } else if (isUserLogged) {
      navigate('/');
    }
  }, [loginError, isUserLogged, showToast, navigate, dispatch]);

  const handleInputChange =
    (field: keyof LoginCreds) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setLoginCreds({ ...loginCreds, [field]: value });
      if (!value.trim()) {
        setErrors({
          ...errors,
          [field]: `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`,
        });
      } else {
        setErrors({ ...errors, [field]: '' });
      }
    };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // checking if the form is valid or empty
    const formErrors = {
      username: !loginCreds.username.trim() ? 'Username is required' : '',
      password: !loginCreds.password.trim() ? 'Password is required' : '',
    };
    setErrors(formErrors);
    if (formErrors.username || formErrors.password) {
      setIsShaking(true);
      return;
    }
    dispatch(login(loginCreds.username, loginCreds.password));
  };

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} />}
      <form
        className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'
        onSubmit={handleLogin}
      >
        <h2 className='text-4xl dark: text-white font-bold text-center'>
          Sign In
        </h2>
        <InputField
          label='Username'
          type='text'
          value={loginCreds.username}
          onChange={handleInputChange('username')}
          error={errors.username}
          containerClassName='flex flex-col py-2 text-gray-400'
          className='rounded-lg mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus: outline-none'
        />
        <InputField
          label='Password'
          type='password'
          value={loginCreds.password}
          onChange={handleInputChange('password')}
          error={errors.password}
          containerClassName='flex flex-col py-2 text-gray-400'
          className='rounded-lg mt-2 p-2 focus: border-blue-500 focus: bg-gray-800 focus: outline-none'
        />

        <div className='flex justify-between py-2 text-gray-400'>
          <p className='flex items-center'>
            <input className='mr-2' type='checkbox' /> Remember Me
          </p>
          <p>Forgot password?</p>
        </div>
        <button
          className={`w-full rounded-lg my-2 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 text-white hover:shadow-teal-500/30 ${
            isShaking ? 'animate-shake' : ''
          }`}
          type='submit'
        >
          Sign In
        </button>
      </form>
    </>
  );
};
