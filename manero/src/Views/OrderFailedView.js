import React from 'react'
import Image from '../assets/images/order-failed.png';
import { NavLink } from 'react-router-dom';


const OrderFailed = () => {
    return (
        <div className='order-completed-container'>
            <img className='mx-auto d-flex order-completed-img' src={Image} alt="..." />

            <h1>Sorry! Your order has failed!</h1>

            <h4>Something went wrong. Please try again</h4>
            <h4 className='h4-under'>to continue your order.</h4>

            <div>
                <NavLink to='/Order'>
                    <button className='order-completed-b'>
                        TRY AGAIN
                    </button>
                </NavLink>
            </div>

            <div className='order-completed-p'>
                <NavLink to='/'>
                    <button className='order-completed-nav'>GO TO MY PROFILE</button>
                </NavLink>
            </div>
        </div>
    )
}

export default OrderFailed