import React from 'react';
import PromoCode from '../components/sections/PromoCode';
import PromoVoucher from '../components/sections/PromoCodeVoucher';
import StarRating from '../components/individuals/RatingStars';
import LeaveReviewView from './LeaveReviewView';


const PromocodesView = () => {
  return (
    <div>
      <PromoCode />
      <PromoVoucher />
    </div>
  )
}

export default PromocodesView