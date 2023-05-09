import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import InputField from '../individuals/InputField';
import Button from '../individuals/Button';

const SignIn = () => {
	const [rememberMe, setRememberMe] = useState(false);

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
			<form className='inputcontainer'>
				<InputField
					type={'email'}
					name={'EMAIL'}
					nameid={'email'}
					placeholder={'Enter email'}
				></InputField>
				<InputField
					type={'password'}
					name={'PASSWORD'}
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
