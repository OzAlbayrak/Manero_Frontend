import React from 'react';
import PromoCode from '../components/sections/PromoCode';
import PromoVoucher from '../components/sections/PromoCodeVoucher';


const PromocodesView = () => {
  return (
    <div>
      <PromoVoucher />
      <PromoCode />
    </div>
  )
}

export default PromocodesView