import React from 'react';
import Button from '../individuals/Button';
import { useProfileContext } from '../../contexts/ProfileContext';
import { useNavigate } from 'react-router-dom';
import { useAddressContext } from '../../contexts/AddressContext';
import { useCreditCardContext } from '../../contexts/CreditCardContext';

const SignOut = ({ signOutOverlay, setSignOutOverlay }) => {
	const { setProfile } = useProfileContext();
	const { setAddresses } = useAddressContext();
	const { setCreditCards } = useCreditCardContext();
	const navigate = useNavigate();
	const signOut = () => {
		sessionStorage.clear();
		setProfile({});
		setAddresses({});
		setCreditCards({});
		navigate('/home');
		console.log('signed out');
	};
	return (
		<>
			<div className='sign-out-overlay'></div>
			<div className='signout-outer-circle  position-absolute top-50 start-50 translate-middle'></div>
			<div className='signout-inner-circle position-absolute top-50 start-50 translate-middle text-center'>
				<div className='vr mx-auto mb-3'></div>
				<div className='signout-text mx-auto'>
					Are you sure you want to sign out?
				</div>
				<div className='button-box mx-auto'>
					<Button btnText={'SURE'} btnType='button' handleClick={signOut} />
				</div>

				<div
					onClick={() => setSignOutOverlay(!signOutOverlay)}
					role='button'
					className='cancel-btn'
				>
					CANCEL
				</div>
			</div>
		</>

		// ett föräldra-element med pos rel, övriga el rakt under med pos ab
	);
};

export default SignOut;
