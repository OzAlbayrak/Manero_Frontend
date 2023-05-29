import React from 'react';
import Header from './Header';
import InputField from '../individuals/InputField';
import Button from '../individuals/Button';

const ForgotPassword = () => {
	return (
		<>
			<Header title={'Forgot password'} hasSideIcon={true} isMenu={false} />
			<main className='container p-0'>
				<p className='text-light-color text-box mx-auto mb-5'>
					Please enter your email address. You will recive a link to create a new
					password via email.
				</p>
				<form className='inputcontainer'>
					<InputField
						type={'email'}
						name={'email'}
						nameid={'email'}
						placeholder={'Enter email'}
						labelName={'email'}
					/>
					<div className='text-center mx-auto px-3'>
						<Button btnText={'SEND'} btnType='submit' />
					</div>
				</form>
			</main>
		</>
	);
};

export default ForgotPassword;
