import React from 'react';
import Header from '../components/sections/Header';
import SideIcon from '../components/individuals/SideIcon';


const PaymentView = () => {
    return (
        <div className='payment-container'>
            <div className='payment-header d-flex flex-raw'>
                <SideIcon />
                <Header
                    title={'Payment method'}
                ></Header>
            </div>
            <hr />

            <div>Credit cards</div>

            <hr />
            <div class="payment-custom-radio">
                <div className='payment-color'>
                    <input className='payment-input' type="radio" id="radioCreditCard1" name="radioGroup" value="creditCard1" />
                    <label for="radioCreditCard1">Card 1</label>

                </div>
                <hr />

                <div className='payment-color'>
                    <input className='payment-input' type="radio" id="radioCreditCard2" name="radioGroup" value="creditCard2" />
                    <label for="radioCreditCard2">Card 2</label>
                    <hr />
                </div>

                <input className='payment-input' type="radio" id="radioCreditCard3" name="radioGroup" value="creditCard3" />
                <label for="radioCreditCard3">Swish</label>
                <hr />

                <input className='payment-input' type="radio" id="radioCreditCard4" name="radioGroup" value="creditCard4" />
                <label for="radioCreditCard4">Direct payment</label>
                <hr />

                <input className='payment-input' type="radio" id="radioCreditCard5" name="radioGroup" value="creditCard5" />
                <label for="radioCreditCard5">Klarna invoice</label>
                <hr />

            </div>

        </div>
    )
}

export default PaymentView