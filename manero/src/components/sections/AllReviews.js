import React from 'react'
import Rating from '../individuals/Rating'

export const AllReviews = () => {
  return (
    <div className="container">
        <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-10">
            <p>Cameron Williamson</p>
          </div>
          <div className="col">
            <p>Consequant ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.</p>
          </div>
          <div className="col-3">
            <Rating />
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-10">
            <p>Theresa Webb</p>
          </div>
          <div className="col">
            <p>Consequant ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.</p>
          </div>
          <div className="col-3">
            <Rating />
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-10">
            <p>Marvin McKinnney</p>
          </div>
          <div className="col">
            <p>Consequant ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.</p>
          </div>
          <div className="col-3">
            <Rating />
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-10">
            <p>Jacob Jones</p>
          </div>
          <div className="col">
            <p>Consequant ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.</p>
          </div>
          <div className="col-3">
            <Rating />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AllReviews
