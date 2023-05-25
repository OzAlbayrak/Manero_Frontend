import React from 'react'
import Image from '../assets/images/order-failed.png';
import { NavLink } from 'react-router-dom';


const OrderFailed = () => {
    return (
        <div>
            <img className='mx-auto d-flex order-completed-img' src={Image} />

            <h1>Sorry!your order has failed!</h1>

            <h4>Something went wrong. Please try again</h4>
            <h4>to continue your order</h4>

            <div className='mx-auto'>
                <NavLink to='/'>
                    <button className='btn rounded-pill my-3 custom-btn'>
                        TRY AGAIN
                    </button>
                </NavLink>
            </div>

            <div>GO TO MY PROFILE</div>
        </div>
    )
}

export default OrderFailed