import React from 'react'
import Header from '../components/sections/Header';
import AllReviews from '../components/sections/AllReviews';

export const AllReviewsView = () => {
  return (
    <div>
        <Header title={"Reviews"} hasSideIcon={true} />
        <AllReviews />
    </div>
  )
}
