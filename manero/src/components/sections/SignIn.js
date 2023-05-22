import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import InputField from '../individuals/InputField';
import Button from '../individuals/Button';
import { logIn } from '../../utilities/api';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	const navigate = useNavigate();
	const [rememberMe, setRememberMe] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		setError('');
		const formData = new FormData(e.target);
		const res = Object.fromEntries(formData);
		rememberMe ? (res.rememberMe = true) : (res.rememberMe = false);

		console.log(JSON.stringify(res));
		//e.target.reset();

		const result = await logIn(res);

		//console.log(result);
		switch (result.status) {
			case 200:
				{
					const token = await result.text();
					sessionStorage.setItem('accessToken', token);
					console.log(token);
					navigate('/');
				}
				break;
			case 400:
				{
					const data = await result.json();
					setError(data.title);
				}
				break;
			case 401:
				{
					const data = await result.text();
					setError(data);
				}
				break;
			default:
				setError('An unknown error occurred.');
		}
	};

	return (
		<div className='container d-flex flex-column'>
			<Header
				title={'Sign in'}
				hasSideIcon={true}
				isMenu={false}
				hasCart={false}
			></Header>
			<div className='vr mx-auto'></div>
			<p className='mx-auto my-3 headline'>Welcome Back!</p>
			<p className='mx-auto text-light-color'>Sign in to continue</p>
			<form className='inputcontainer' onSubmit={handleSubmit}>
				<p className='text-danger text-center mx-auto'>{error}</p>
				<InputField
					type={'email'}
					name={'email'}
					nameid={'email'}
					placeholder={'Enter email'}
				></InputField>
				<InputField
					type={'password'}
					name={'password'}
					nameid={'password'}
					placeholder={'Enter password'}
				></InputField>
				<div className='d-flex justify-content-between container text-center my-3'>
					<div>
						<input
							type='checkbox'
							id='rememberMe'
							name='rememberMe'
							value={rememberMe}
							onChange={() => setRememberMe(!rememberMe)}
						/>
						<label htmlFor='rememberMe' className='text-light-color'>
							Remember me
						</label>
					</div>
					<NavLink to='/ForgotPassword' className='text-dark-color register-link'>
						Forgot password?
					</NavLink>
				</div>
				<div className='text-center mx-auto px-3'>
					<Button btnText={'SIGN IN'} btnType='submit' />
				</div>
			</form>
			<p className='mx-auto text-light-color'>
				Don't have an account?{' '}
				<NavLink to='/SignUp' className='text-dark-color register-link'>
					Sign up.
				</NavLink>
			</p>
			<div className='d-flex form-width justify-content-center mx-auto socials-btn-row'>
				<button className='btn rounded-circle m-2'>
					<i className='fa-brands fa-facebook-f'></i>
				</button>
				<button className='btn rounded-circle m-2'>
					<i className='fa-brands fa-twitter'></i>
				</button>
				<button className='btn rounded-circle m-2'>
					<i className='fa-brands fa-google-plus-g'></i>
				</button>
			</div>
		</div>
	);
};

export default SignIn;
