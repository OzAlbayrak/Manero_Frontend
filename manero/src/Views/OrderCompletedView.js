import React from 'react';
import Image from '../assets/images/payment-order-img.png';
import { NavLink } from 'react-router-dom';


const OrderCompletedView = () => {
    return (
        <div>
            <img className='mx-auto d-flex order-completed-img' src={Image} alt="..." />

            <h1>Thank you for your order!</h1>

            <h4>Your order will be delivered on time.</h4>
            <h4 className='h4-under'>Thank you!</h4>

            <div className=''>
                <NavLink to='/Order'>
                    <button className='order-completed-b'>
                        VIEW ORDER
                    </button>
                </NavLink>
            </div>

            <div className='order-completed-p'>
                <NavLink to='/'>
                    <button className='order-completed-nav'>CONTINUE SHOPPING</button>
                </NavLink>
            </div>
        </div>
    )
}

export default OrderCompletedView