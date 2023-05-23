import React, { useState } from 'react'
import SideIcon from '../components/individuals/SideIcon';
import Header from '../components/sections/Header'
import Image from '../assets/images/Shippment.png'



const ShippmentView = () => {

    const [selectedAddress, setSelectedAddress] = useState('address1');
    const [isChecked, setIsChecked] = useState(false);


    const handleAddressChange = (event) => {
        setSelectedAddress(event.target.value);
    }

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.value);
    }



    return (
        <div>
            <div className='d-flex flex-raw'>

                <SideIcon />
                <Header
                    title={'Shipping details'}
                ></Header>

            </div>
            <img className='shippment-img' src={Image} />
            <form>
                <div className="form-shipp">
                    <label className="form-shipp-label"
                        htmlFor="radioAddress1">
                        Address 1
                    </label>
                    <input className="form-shipp-input"
                        type="radio"
                        name="radioGroup"
                        id="radioAddress1"
                        value="Address1"
                        checked={selectedAddress === 'address1'}
                        onChange={handleAddressChange} />
                </div>
                <hr />

                <div className="form-shipp">
                    <label className="form-shipp-label" htmlFor="radioAddress2">
                        Address 2
                    </label>
                    <input className="form-shipp-input"
                        type="radio"
                        name="radioGroup"
                        id="radioAddress2"
                        value="option1Address2"
                        checked={selectedAddress === 'address2'}
                        onChange={handleAddressChange} />
                </div>
                <hr />

                <div className="form-shipp">
                    <label className="form-shipp-label" htmlFor="radioAddress3">
                        Address 3
                    </label>
                    <input className="form-shipp-input"
                        type="radio"
                        name="radioGroup"
                        id="radioAddress3"
                        value="Address3"
                        checked={selectedAddress === 'address3'}
                        onChange={handleAddressChange} />
                </div>
                <hr />
            </form>

            <div className='shipp-checkbox'>
                <input className='shipp-checkbox-input'
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange} />
                <label className='shipp-checkbox-label'>Use current location</label>
            </div>
        </div>

    )
}

export default ShippmentView