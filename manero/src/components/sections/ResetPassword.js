import React from 'react';
import Header from './Header';
import InputField from '../individuals/InputField';
import Button from '../individuals/Button';

const ResetPassword = () => {
	return (
		<>
			<Header title={'Reset password'} hasSideIcon={true} isMenu={false} />
			<main className='container'>
				<p className='text-light-color text-box mx-auto mb-5'>
					Enter new password and confirm.
				</p>
				<form className='inputcontainer'>
					<InputField
						type={'password'}
						name={'newPassword'}
						nameid={'newPassword'}
						labelName={'new password'}
					/>
					<InputField
						type={'password'}
						name={'confirmPassword'}
						nameid={'confirmPassword'}
						labelName={'confirm password'}
					/>
					<div className='text-center mx-auto px-3'>
						<Button btnText={'CHANGE PASSWORD'} btnType='submit' />
					</div>
				</form>
			</main>
		</>
	);
};

export default ResetPassword;
