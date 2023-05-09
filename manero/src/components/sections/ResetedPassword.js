import React from 'react';
import Header from './Header';
import Button from '../individuals/Button';
import Image from '../../assets/images/PasswordReset.svg'

const ResetedPassword = () => {
  return (
    <div className='container d-flex flex-column'>
        <Header
            title={'MANERO'}
            hasSideIcon={false}
            isMenu={false}
            hasCart={false}
        ></Header>
        <img className='password-image mx-auto' src={Image} />

        <div className='vr mx-auto'></div>
        <p className='mx-auto my-3 headline'>Your password has been reset!</p>
		<p className='mx-auto text-light-color'>Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum</p>
        <div className='text-center mx-auto px-3 button-container'>
		    <Button btnText={'DONE'} btnType='button' />
		</div>

    </div>
  )
}

export default ResetedPassword