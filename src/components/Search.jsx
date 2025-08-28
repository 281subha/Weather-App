import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-center gap-2 '>
      <input type="text" placeholder='Enter City Name' className='border rounded-full py-2 px-4 outline-0'/>
      <a href="#"><img src={searchicon} alt="searchIcon"  className='border rounded-full p-3'/></a>
    </div>
  )
}

export default Search
