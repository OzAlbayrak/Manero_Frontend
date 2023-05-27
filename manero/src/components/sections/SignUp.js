import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from './Header';
import InputField from '../individuals/InputField';
import Button from '../individuals/Button';
import { logIn, register } from '../../utilities/api';
import {
	LoginSocialFacebook,
	LoginSocialGoogle,
	LoginSocialTwitter,
} from 'reactjs-social-login';
import { useProfileContext } from '../../contexts/ProfileContext';

const SignUp = () => {
	const [error, setError] = useState('');
	const [validationError, setValidationError] = useState(false);
	const navigate = useNavigate();
	const { handleResponse } = useProfileContext();

	const validateEmail = (res) => {
		if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(res.email)) {
			return true;
		} else {
			setError('Incorrect Email format');
			return false;
		}
	};
	const validatePassword = (res) => {
		const strongRegex = new RegExp(
			'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
		);

		if (strongRegex.test(res.password)) {
			if (res.password === res.confirmPassword) {
				return true;
			} else {
				setError('Password and Confirm Password does not match');

				return false;
			}
		} else {
			setValidationError(true);

			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const res = Object.fromEntries(formData);

		if (validateEmail(res) && validatePassword(res)) {
			const result = await register(res);

			console.log('res: ', result);

			switch (result.status) {
				case 201:
					{
						const result = await logIn(res);
						const token = await result.text();
						sessionStorage.setItem('accessToken', token);

						navigate('/Created');
					}
					break;
				case 409:
					{
						const data = await result.text();
						setError(data);
					}
					break;
				case 400:
					{
						setError('Email or password is not valid');
					}
					break;
				default:
					setError('An unknown error occurred.');
			}
		}
	};

	return (
		<div className='container d-flex flex-column'>
			<Header
				title={'Sign up'}
				hasSideIcon={true}
				isMenu={false}
				hasCart={false}
			></Header>
			<div className='vr mx-auto'></div>
			<p className='mx-auto my-3 headline'>Sign Up</p>

			<form className='inputcontainer' onSubmit={handleSubmit} noValidate>
				<p className='text-danger text-center mx-auto'>{error}</p>
				{validationError && (
					<div className='text-danger mb-3 mx-auto'>
						Password must contain:
						<ul>
							<li>at least 8 characters</li>
							<li>at least 1 lowercase alphabetical character</li>
							<li>at least 1 uppercase alphabetical character</li>
							<li>at least 1 numeric character</li>
							<li>at least 1 one special character</li>
						</ul>
					</div>
				)}
				<InputField
					type={'text'}
					name={'name'}
					nameid={'name'}
					placeholder={'Enter name'}
					labelName={'name'}
				></InputField>
				<InputField
					type={'email'}
					name={'email'}
					nameid={'email'}
					placeholder={'Enter email'}
					labelName={'email'}
				></InputField>
				<InputField
					type={'password'}
					name={'password'}
					nameid={'password'}
					placeholder={'Enter password'}
					labelName={'password'}
				></InputField>
				<InputField
					type={'password'}
					name={'confirmPassword'}
					nameid={'confirmPassword'}
					placeholder={'Confirm password'}
					labelName={'confirm password'}
				></InputField>
				<div className='text-center mx-auto px-3'>
					<Button btnText={'SIGN UP'} btnType='submit' />
				</div>
			</form>
			<p className='mx-auto text-light-color'>
				Already have an account?{' '}
				<NavLink to='/SignIn' className='text-dark-color register-link'>
					Sign in.
				</NavLink>
			</p>
			<div className='d-flex form-width justify-content-center mx-auto socials-btn-row'>
				<LoginSocialFacebook
					appId='778333243702664'
					onResolve={(res) => {
						handleResponse(res);
						navigate('/');
					}}
					onReject={(error) => {
						console.log('error:', error);
					}}
				>
					<button className='btn rounded-circle m-2'>
						<i className='fa-brands fa-facebook-f'></i>
					</button>
				</LoginSocialFacebook>
				{/* <LoginSocialTwitter
					client_id='TXJUeGJhRWYtaHhENFoySWNxR1I6MTpjaQ'
					onResolve={(res) => {
						handleResponse(res);
						navigate('/');
					}}
					onReject={(error) => {
						console.log(error);
					}}
				>
					<button className='btn rounded-circle m-2'>
						<i className='fa-brands fa-twitter'></i>
					</button>
				</LoginSocialTwitter> */}
				<button className='btn rounded-circle m-2'>
					<i className='fa-brands fa-twitter'></i>
				</button>
				<LoginSocialGoogle
					client_id='287952620391-q4761s4igqnl0uflbkv5jm3nqe594l3c.apps.googleusercontent.com'
					scope='openid profile email'
					onResolve={(res) => {
						handleResponse(res);
						navigate('/');
					}}
					onReject={(error) => {
						console.log(error);
					}}
				>
					<button className='btn rounded-circle m-2'>
						<i className='fa-brands fa-google-plus-g'></i>
					</button>
				</LoginSocialGoogle>
			</div>
		</div>
	);
};

export default SignUp;
