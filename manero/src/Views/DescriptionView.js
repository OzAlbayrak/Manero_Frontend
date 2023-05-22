import React from 'react'
import Header from '../components/sections/Header';
import Description from '../components/sections/Description';

const DescriptionView = () => {
    
  return (
    <div>
        <Header title={"MANERO"} hasSideIcon={true} isMenu={false} hasCart={true}/>
        <Description />
    </div>
  )
}

export default DescriptionView