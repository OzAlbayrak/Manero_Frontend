import React from 'react';
import Header from './Header';
import Button from '../individuals/Button';
import Image from '../../assets/images/PasswordReset.svg'
import { Link } from 'react-router-dom';

const ResetedPassword = () => {
  return (
    <div className='container d-flex flex-column text-center p-0'>
        <Header
            title={'MANERO'}
            hasSideIcon={false}
            isMenu={false}
            hasCart={false}
        ></Header>
        <img className='password-image mx-auto' src={Image} />

        <div className='testtest vr mx-auto'></div>
        <p className='mx-auto my-3 headline'>Your password has been reset!</p>
		<p className='mx-auto text-light-color'>Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum</p>
    <Link to="/signin" className='navlinkbutton'>
      <div className='text-center mx-auto px-3 button-container'>
        <Button btnText={'DONE'} btnType='button'/>
		  </div>
    </Link>
    </div>
  )
}

export default ResetedPassword