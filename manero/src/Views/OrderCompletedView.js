import React from 'react';
import Image from '../assets/images/payment-order-img.png';
import { NavLink } from 'react-router-dom';

const OrderCompletedView = () => {
    return (
        <div>
            <img className='mx-auto d-flex order-completed-img' src={Image} />

            <h1>Thank you for your order!</h1>

            <h4>Your order will be delivered on time.</h4>
            <h4>Thank you!</h4>

            <div className='mx-auto'>
                <NavLink to='/'>
                    <button className='btn rounded-pill my-3 custom-btn'>
                        VIEW ORDER
                    </button>
                </NavLink>
            </div>

            <div>CONTINUE SHOPPING</div>
        </div>
    )
}

export default OrderCompletedView