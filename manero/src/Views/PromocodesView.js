import React from 'react';
import PromoCode from '../components/sections/PromoCode';
import PromoVoucher from '../components/sections/PromoCodeVoucher';
import StarRating from '../components/individuals/RatingStars';
import Reviews from '../components/individuals/Reviews';


const PromocodesView = () => {
  return (
    <div>
      <StarRating />
      <Reviews />
      <PromoVoucher />
      <PromoCode />
    </div>
  )
}

export default PromocodesView