import Header from '../components/sections/Header'
import MenuLinkIcons from '../components/individuals/MenuLinkIcons'
import Searchbar from '../components/individuals/Searchbar'
import { useState } from 'react'
import FilterGender from '../components/sections/FilterGender'

const SearchView = () => {
    const [results, setResults] = useState([]);

    
  
  return (
    <div>
        <Header title={<Searchbar setResults={setResults}/>} hasSideIcon={true} isMenu={true} hasCart={true}/>
        <hr/>
        <FilterGender/>
        <MenuLinkIcons/>
    </div>
  )
}

export default SearchView