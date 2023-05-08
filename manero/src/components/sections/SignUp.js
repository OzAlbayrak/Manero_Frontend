import React, { useState } from 'react';
import Header from './Header';
import InputField from '../individuals/InputField';
import Button from '../individuals/Button';

const SignUp = () => {
	const [formContent, setFormContent] = useState(null);
	/*
	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const res = Object.fromEntries(formData);
		e.target.reset();

		setFormContent(res);
		console.log(res);
	};
*/
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

			<form className='inputcontainer'>
				{' '}
				{/*onSubmit={handleSubmit}*/}
				<InputField
					type={'text'}
					name={'NAME'}
					nameid={'name'}
					placeholder={'Enter name'}
				></InputField>
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
				<InputField
					type={'password'}
					name={'CONFIRM PASSWORD'}
					nameid={'confirmPassword'}
					placeholder={'Confirm password'}
				></InputField>
				<div className='text-center mx-auto px-3'>
					<Button btnText={'SIGN UP'} btnType='submit' />
				</div>
			</form>
			<p className='mx-auto text-light-color'>
				Already have an account?{' '}
				<a href='#' className='text-dark-color'>
					Sign in.
				</a>
			</p>
			<div className='d-flex form-width justify-content-center mx-auto socials-btn-row'>
				<button className='btn rounded-circle m-2'>
					<i class='fa-brands fa-facebook-f'></i>
				</button>
				<button className='btn rounded-circle m-2'>
					<i class='fa-brands fa-twitter'></i>
				</button>
				<button className='btn rounded-circle m-2'>
					<i class='fa-brands fa-google-plus-g'></i>
				</button>
			</div>
		</div>
	);
};

export default SignUp;
