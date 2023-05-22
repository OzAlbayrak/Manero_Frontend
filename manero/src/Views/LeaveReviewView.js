import React from 'react';
import Header from '../components/sections/Header';
import Reviews from '../components/individuals/Reviews';

export const LeaveReviewView = () => {
  return (
    <div>
    <Header title={"Leave a review"} hasSideIcon={true} isMenu={false} hasCart={false}/>
    <Reviews/>
    </div>
  )
}

export default LeaveReviewView
