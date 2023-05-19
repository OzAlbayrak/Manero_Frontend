import React from 'react'
import Header from '../components/sections/Header';
import Description from '../components/sections/Description';
import Reviews from '../components/individuals/Reviews';

const DescriptionView = () => {
    
  return (
    <div>
        <Header title={"MANERO"} hasSideIcon={true} isMenu={false} hasCart={true}/>
        <Description />
        <Reviews/>
    </div>
  )
}

export default DescriptionView